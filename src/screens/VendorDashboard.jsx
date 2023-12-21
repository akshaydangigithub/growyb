import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../componentss/Navbar";
import { Outlet } from "react-router-dom";
import "./VendorDashboard.css";
import MyAPI, { Item } from "../componentss/MyAPI";

const VendorDashboard = () => {
  const navigate = useNavigate();
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = Item.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      MyAPI.get('/api/company/profile', token)
        .then((res) => {
          if (res.status == 200) {
            setUser(res.data.user);
          } else {
            Item.setItem('token','');
            window.location.assign('/')
          }
        })
    } else {
      setIsLoggedIn(false);
      Item.setItem('token','');
      window.location.assign('/')
    }
  }, [])

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };
  const [activeSection, setActiveSection] = useState(1);

  const handleSectionClick = (sectionNumber) => {
    setActiveSection(sectionNumber);
    switch (sectionNumber) {
      case 1:
        navigate("/vendor/dashboard/uploadLeads");
        break;
      case 2:
        navigate("/vendor/dashboard/track");
        break;
      case 3:
        navigate("/vendor/dashboard/ongoing");
        break;
      case 4:
        navigate("/vendor/dashboard/closed");
        break;
      case 5:
        navigate("/vendor/dashboard/reports");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="four-section-container">
          <div
            className={`section ${activeSection === 1 ? 'active' : ''}`}
            onClick={() => handleSectionClick(1)}
          >
            Uploads Leads
          </div>
          <div
            className={`section ${activeSection === 2 ? 'active' : ''}`}
            onClick={() => handleSectionClick(2)}
          >
            Track
          </div>
          <div
            className={`section ${activeSection === 3 ? 'active' : ''}`}
            onClick={() => handleSectionClick(3)}
          >
            On Going
          </div>
          <div
            className={`section ${activeSection === 4 ? 'active' : ''}`}
            onClick={() => handleSectionClick(4)}
          >
            Closed
          </div>
          <div
            className={`section ${activeSection === 5 ? 'active' : ''}`}
            onClick={() => handleSectionClick(5)}
          >
            Reports
          </div>
        </div>

        <div className="midsec">
          <div className="side-section">
            <h2>Company Details</h2>
            <img className="userLogo mx-auto d-block" src={user && `http://localhost:8080/api/company/img/${user.company_logo}`} alt="Company Logo" />
            <p className="mt-5 fw-bold">{user && user.company_name}</p>
            <p className="mt-3 fw-bold">Location: {user && user.company_address}</p>
            <p className="mt-3 fw-bold">Contact Details: {user && user.company_contact} <br /> {user && user.company_email}</p>
            <p className="mt-3 fw-bold">Industry: {user && user.technology.map((t, index) => index === user.technology.length - 1 ? t : `${t}, `)}</p>
            <p className="mt-3 fw-bold">Address: {user && user.company_address}</p>
            <p className="mt-3 fw-bold">Website: www.lorem.com</p>
          </div>
          <div className="side-section2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};



export default VendorDashboard;
