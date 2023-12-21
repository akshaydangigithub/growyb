import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MyAPI, { Item } from '../MyAPI';
import { useAlert } from 'react-alert';

function AdminCloseModel({ show, handleClose, leadId, reloadData }) {

    const [ammount, setAmmount] = useState('');
    const [reason, setReason] = useState('');
    let alert = useAlert();

    const handleSave = () => {
        console.log({ ammount, reason, leadId });
        let token = Item.getItem('token');
        if (token) {
            MyAPI.post(`/admin/leads/close/${leadId}`, { ammount, reason }, token)
                .then((res) => {
                    reloadData();
                    if(res.data.status){
                        alert.success(res.data.message);
                    }else{
                        alert.info(res.data.message);
                    }
                })
        } else {
            window.location.assign('/admin/sign-in');
        }
        handleClose();
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Close Lead</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Closing Ammount</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="ammount"
                                autoFocus
                                value={ammount}
                                onChange={(e) => setAmmount(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Closing Reason</Form.Label>
                            <Form.Control as="textarea"
                                value={reason}
                                onChange={(e) => setReason(e.target.value)}
                                rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSave}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AdminCloseModel;