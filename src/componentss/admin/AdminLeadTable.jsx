import { useEffect, useState } from 'react';
import { Pagination, Table, Container, Col, Row } from 'react-bootstrap';
import AdminEditableModel from './AdminEditableModel';
import AdminCloseModel from './AdminCloseModel';

const AdminLeadTable = ({ leads, reloadData }) => {
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const [showModal, setShowModal] = useState(false);
    const [editingLead, setEditingLead] = useState(null);

    const [closeId, setCloseId] = useState(null);
    const [closingOpen, setClosingopen] = useState(false);

    useEffect(() => {
        if (search.length > 0) {
            const data = leads.filter((item) => item.clientName.includes(search) || item.status.includes(search) || item.clientEmail.includes(search));
            setFilteredData(data);
        } else {
            setFilteredData(leads);
        }
    }, [search, leads]);
    
    const handleEditClick = (lead) => {
        setEditingLead(null);
        setEditingLead(lead);
        setShowModal(true);
    };

    useEffect(() => { }, [editingLead])

    const handleCloseModal = () => {
        setShowModal(false);
        setEditingLead(null);
    };



    const handleCloseClick = (leadId) => {
        setClosingopen(true);
        setCloseId(leadId);
    }

    const handleCloseClosingModal = () => {
        setClosingopen(false);
        setCloseId(null);
    };

    return (
        <Container>
            {editingLead && (
                <AdminEditableModel
                    reloadData={reloadData}
                    show={showModal}
                    handleClose={handleCloseModal}
                    leadData={editingLead}
                />
            )}
            {closingOpen && (
                <AdminCloseModel
                    reloadData={reloadData}
                    show={closingOpen}
                    handleClose={handleCloseClosingModal}
                    leadId={closeId}
                />
            )}
            <Row>
                <Col>
                    <Row className=' p-2 d-flex align-items-center justify-content-between'>
                        <h2 className='col-md-6'>User Leads</h2>
                        <div className="col-md-3 mb-4">
                            <input
                                type="text"
                                className="form-control"
                                placeholder='search here...'
                                aria-describedby="helpId"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </div>

                    </Row>
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
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.length > 0 ? (
                                currentItems.map((lead, index) => (
                                    <tr key={index}>
                                        <td>{index+1}</td>
                                        <td>{lead.clientName}</td>
                                        <td>{lead.clientEmail}</td>
                                        <td>{lead.clientContact}</td>
                                        <td>{lead.leadFrom}</td>
                                        <td>{lead.projectType}</td>
                                        <td>{lead.requirement}</td>
                                        <td>{lead.clientBudget}</td>
                                        <td>{lead.companyPrice}</td>
                                        <td>{lead.deadLine }</td>
                                        <td>{lead.priority}</td>
                                        <td>
                                            {lead.status == 'close' && (<p className='badge badge-danger bg-secondary'>{lead.status}</p>)}
                                            {lead.status == 'ongoing' && (<p className='badge badge-danger bg-info'>{lead.status}</p>)}
                                            {lead.status == 'pending' && (<p className='badge badge-danger bg-warning'>{lead.status}</p>)}
                                            {lead.status == 'cancel' && (<p className='badge badge-danger bg-danger'>{lead.status}</p>)}
                                        </td>
                                        <td>{lead.createdAt}</td>
                                        {lead.status === 'pending' && (
                                            <>
                                                <td>
                                                    <div className="btn btn-sm btn-primary" onClick={() => handleEditClick(lead)}>Edit</div>
                                                </td>
                                                <td>
                                                    <div className="btn btn-sm btn-danger" onClick={() => handleCloseClick(lead._id)}>close</div>
                                                </td>
                                            </>
                                        )}

                                        {lead.status === 'ongoing' && (
                                            <>
                                                <td>
                                                    <div className="btn btn-sm btn-primary" onClick={() => handleEditClick(lead)}>Edit</div>
                                                </td>
                                                <td>
                                                    <div className="btn btn-sm btn-danger" onClick={() => handleCloseClick(lead._id)}>close</div>
                                                </td>
                                            </>
                                        )}

                                        {lead.status === 'close' && (
                                            <td colSpan={2}>No Action</td>
                                        )}

                                        {lead.status === 'cancel' && (
                                            <td colSpan={2}>Lead Cancel</td>
                                        )}

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
                        <Pagination.First onClick={() => setCurrentPage(1)} />
                        <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />
                        {[...Array(totalPages)].map((_, index) => (
                            <Pagination.Item key={index} active={index + 1 === currentPage} onClick={() => setCurrentPage(index + 1)}>
                                {index + 1}
                            </Pagination.Item>
                        ))}
                        <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
                        <Pagination.Last onClick={() => setCurrentPage(totalPages)} />
                    </Pagination>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminLeadTable;
