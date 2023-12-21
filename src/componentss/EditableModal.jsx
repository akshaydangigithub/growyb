import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import MyAPI, { Item } from './MyAPI';
import { useAlert } from 'react-alert';

const EditableModal = ({ show, handleClose, leadData,reloadData }) => {
  let alert = useAlert();
  const excludeFields = ['_id', 'account', 'createdAt', '__v', 'status','closingAmmount','closingReasone']; // Fields to exclude
  const editableFields = Object.keys(leadData).filter((key) => !excludeFields.includes(key));

  const [formData, setFormData] = useState({ ...leadData });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (editableFields.includes(name)) {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSaveChanges = () => {
    let token = Item.getItem('token');
    MyAPI.post(`/lead/edit/${formData._id}`, formData, token)
      .then((res) => {
        reloadData();
        if (res.data.success) {
          alert.success('lead updated successfully..!');
        } else {
          alert.error('something wrong');
        }
      })
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Lead Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <div className="row">
            {editableFields.map((key) => (
              <div className="col-md-6 col-sm-12" key={key}>
                <Form.Group controlId={key}>
                  <Form.Label>{key}</Form.Label>
                  <Form.Control
                    type="text"
                    name={key}
                    value={formData[key]}
                    onChange={handleInputChange}
                  />
                </Form.Group>
              </div>
            ))}
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSaveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditableModal;
