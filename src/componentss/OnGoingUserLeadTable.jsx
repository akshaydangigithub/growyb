import { useState } from 'react';
import { Pagination, Table, Container, Col, Row } from 'react-bootstrap';
import EditableModal from './EditableModal';
import MyAPI, { Item } from './MyAPI';
import { toast } from 'react-toastify';

const OnGoingUserLeadTable = ({ leads,reloadData }) => {



    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = leads.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(leads.length / itemsPerPage);

    const [showModal, setShowModal] = useState(false);
    const [editingLead, setEditingLead] = useState(null);
    const handleEditClick = (lead) => {
        setEditingLead(lead);
        setShowModal(true);
    };


    // define paginate function
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>
            
            <Row>
                <Col>
                    <h3>OnGoing Leads</h3>
                    <Table striped bordered hover responsive>
                        <thead>
                            <tr>
                                <th>Lead ID</th>
                                <th>Client Name</th>
                                <th>Client Email</th>
                                <th>Client Contact</th>
                                <th>Lead From</th>
                                <th>Project Type</th>
                                <th>Requirement</th>
                                <th>Client Budget</th>
                                <th>Company Price</th>
                                <th>Deadline</th>
                                <th>Priority</th>
                                <th>Status</th>
                                <th>Created At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map((lead, index) => (
                                    <tr key={index}>
                                        <td>{lead.leadUniqueId}</td>
                                        <td>{lead.clientName}</td>
                                        <td>{lead.clientEmail}</td>
                                        <td>{lead.clientContact}</td>
                                        <td>{lead.leadFrom}</td>
                                        <td>{lead.projectType}</td>
                                        <td>{lead.requirement}</td>
                                        <td>{lead.clientBudget}</td>
                                        <td>{lead.companyPrice}</td>
                                        <td>{lead.deadLine}</td>
                                        <td>{lead.priority}</td>
                                        <td>
                                            {lead.status == 'close' && (<p className='badge badge-danger bg-danger'>{lead.status}</p>)}
                                            {lead.status == 'ongoing' && (<p className='badge badge-danger bg-info'>{lead.status}</p>)}
                                        </td>
                                        <td>{lead.createdAt}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={15}>Lead's Not found!</td>
                                </tr>
                            )}
                        </tbody>

                    </Table>

                    <Pagination>
                        <Pagination.First onClick={() => paginate(1)} />
                        <Pagination.Prev onClick={() => paginate(currentPage - 1)} />
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => paginate(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => paginate(currentPage + 1)} />
                        <Pagination.Last onClick={() => paginate(totalPages)} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default OnGoingUserLeadTable;
