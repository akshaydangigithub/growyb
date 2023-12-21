import { useEffect, useRef, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import "./css/navbar.css";
import { useNavigate } from "react-router-dom";
import { Item } from "./MyAPI";
import logo from "../assetss/growYB-logo (2).png"

const Navbar = () => {
  const navigate = useNavigate();
  const RedirectToDashboard = () => {
    navigate("/vendor/dashboard/uploadLeads");
  };

  const RedirectToContact = () => {
    navigate("/vendor/login");
  };

  const RedirectToAdminLogIn = () => {
    navigate("/admin/sign-in");
  };

  const RedirectToAdminDashboard = () => {
    navigate("/admin/dashboard/allleads");
  }

  const sidebarRef = useRef(null);
  const menuIconRef = useRef(null);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const menuHandler = () => {
    setSidebarShow(!sidebarShow);
  };
  const handleClickOutside = (e) => {
    if (
      sidebarRef.current &&
      menuIconRef.current &&
      !sidebarRef.current.contains(e.target) &&
      !menuIconRef.current.contains(e.target)
    ) {
      setSidebarShow(false);
    }
  };

  const HandleLogOut = () => {
    setIsLoggedIn(false);
    Item.setItem('token', '');
    navigate('/');
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    let token = Item.getItem('token');
    let TisAdmin = Item.getItem('isAdmin');
    if (TisAdmin == 'false') {
      setIsAdmin(false)
    } else {
      setIsAdmin(true)
    }
    if (token && token != null && token != '') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const Handleclose = () => {
    setSidebarShow(false);
  };
  return (
    <>
      <nav className="d-flex align-items-center justify-content-between">
        <div className="cNav px-4 py-2">
          <div className="left">
            {/* <h1 className="fw-bold">G</h1> */}
            <img src={logo} className="mt-2" height={70} alt="" />
          </div>
          <div className="right">
            <span ref={menuIconRef} onClick={menuHandler}>
              <IoIosMenu />
            </span>
          </div>
        </div>
      </nav>
      <div
        ref={sidebarRef}
        className={`sidebar shadow overflow-hidden ${sidebarShow ? "sidebar-active" : "sidebar-close"
          }`}
      >
        <span onClick={Handleclose} className="close">
          <AiOutlineClose />
        </span>

        <div>
          <ul>
            <li onClick={() => navigate("/")} >Home</li>
            {isLoggedIn && !isAdmin && <li onClick={RedirectToDashboard}>Dashboard</li>}
            {isLoggedIn && isAdmin && <li onClick={RedirectToAdminDashboard}>Dashboard</li>}
            {!isLoggedIn && <li onClick={RedirectToContact}>LogIn</li>}

            <li>Shop</li>
            <li>Blog</li>
            <li>Elements</li>
            {!isLoggedIn && <li onClick={RedirectToAdminLogIn}>Admin LogIn</li>}
            {isLoggedIn && <button onClick={HandleLogOut} style={{ maxHeight: '5vh', textAlign: 'center !important', justifyContent: 'center !important' }} className="btn btn fw-bold btn-danger">Log-Out</button>}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
