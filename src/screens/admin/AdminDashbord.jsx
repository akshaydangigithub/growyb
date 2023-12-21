import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../componentss/Navbar";
import { Outlet } from "react-router-dom";
import '../vendorDashboard.css';
import MyAPI, { Item } from "../../componentss/MyAPI";
import { Container } from "react-bootstrap";
import AllLedsList from "../../componentss/admin/AllLedsList";
import PendeingAdminTable from "../../componentss/admin/PendeingAdminTable";
import OnGoingAllAdminTable from "../../componentss/admin/OnGoingAllAdminTable";
import ClosedAllAdminTable from "../../componentss/admin/ClosedAllAdminTable";
import CancelAllAdminTable from "../../componentss/admin/CancelAllAdminTable";

const AdminDashboard = ({id}) => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    let token = Item.getItem('token');
    if (token) {
      MyAPI.get('/admin/profile', token)
        .then((res) => {
          console.log(res.data)
          if (res.data.status) {
            setUser(res.data.user);
          } else {
            window.location.assign('/admin/sign-in');
          }
        })
    } else {
      window.location.assign('/admin/sign-in');
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (id) => {
    setActiveSection(id);
    switch (id) {
      case 1:
        navigate("/admin/dashboard/allleads");
        break;
      case 2:
        navigate("/admin/dashboard/pending");
        break;
      case 3:
        navigate("/admin/dashboard/ongoing");
        break;
      case 4:
        navigate("/admin/dashboard/closed");
        break;
      case 5:
        navigate("/admin/dashboard/cancel");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <Container>
          <div className="row justify-content-between">
            <div className="col-md-4 col-6 col-lg-2">
              <div className={`section ${activeSection === 1 ? 'active' : ''}`} onClick={() => handleSectionClick(1)}>
                All Leads
              </div>
            </div>
            <div className="col-md-4 col-6 col-lg-2">
              <div className={`section ${activeSection === 2 ? 'active' : ''}`} onClick={() => handleSectionClick(2)}>
                Pending
              </div>
            </div>
            <div className="col-md-4 col-6 col-lg-2">
              <div className={`section ${activeSection === 3 ? 'active' : ''}`} onClick={() => handleSectionClick(3)}>
                On Going
              </div>
            </div>
            <div className="col-md-4 col-6 col-lg-2">
              <div className={`section ${activeSection === 4 ? 'active' : ''}`} onClick={() => handleSectionClick(4)}>
                Closed
              </div>
            </div>
            <div className="col-md-4 col-6 col-lg-2">
              <div className={`section ${activeSection === 5 ? 'active' : ''}`} onClick={() => handleSectionClick(5)}>
                Cancel
              </div>
            </div>
          </div>

        </Container>

        <div className="midsec container-fluid mt-5 d-md-flex justify-content-center align-items-start">
          <div style={{height:'fit-content'}} className="side-section d-none d-md-block d-lg-block d-xl-block col-md-3">
            <h2>User Details</h2>
            <img className="userLogo mx-auto d-block" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU' alt="Company Logo" />
            <p className="mt-5 fw-bold">Name : {user && user.name}</p>
            <p className="mt-3 fw-bold">Location: {user && user.email}</p>
            <p className="mt-3 fw-bold">Address: {user && user.company_address}</p>
            <p className="mt-3 fw-bold">Website: www.lorem.com</p>
          </div>
          <div className="side-section2 col-md-8 container-md container-sm" style={{ height: '100%', maxHeight: 'auto', position: 'relative' }}>
            {/* <Outlet /> */}
            {
              activeSection === 1 ? <AllLedsList/> :activeSection === 2 ? <PendeingAdminTable/> : activeSection === 3 ? <OnGoingAllAdminTable/> : activeSection === 4 ? <ClosedAllAdminTable/> : activeSection === 5 ? <CancelAllAdminTable/> :null
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
