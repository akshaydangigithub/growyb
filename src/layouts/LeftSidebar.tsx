import React, { useEffect, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import FeatherIcon from "feather-icons-react";

import { getMenuItems } from "../helpers/menu.ts";

// components
import Scrollbar from "../components/Scrollbar.tsx";

import AppMenu from "./Menu.tsx";

// images
import profileImg from "../assets/images/users/avatar-1.jpg";
import MyAPI, { Item } from "../componentss/MyAPI";

/* user box */
const UserBox = () => {
  const [username, setUsername] = useState('User');
  const [profile, setUserProfile] = useState(null)
  let token = Item.getItem('token');
  let isAdmin = Item.getItem('isAdmin');
  let navigate = useNavigate();

  useEffect(()=>{
    if (token) {
      MyAPI.get('/api/company/profile', token)
        .then((res) => {
          if (res.data.success) {
            setUsername(res.data.user.company_name);
            setUserProfile(res.data.user.company_logo);
          } else {
            console.log('User Not Found')
          }
        })
    }
  
    if (token) {
      try {
        if (isAdmin == 'false') {
          MyAPI.get('/api/company/check', token)
            .then((res) => {
              if(res.data.status == false){
                Item.setItem('token','');
                Item.setItem('isAdmin',false);
                navigate('/');
              }
            });
        }else{
          console.log('This is Admin');
        }
      } catch (error) {
        console.log(error.message)
      }
    }
  },[token,isAdmin])

  // get the profilemenu
  const ProfileMenus = [
    {
      label: "My Account",
      icon: "user",
      redirectTo: "/pages/profile",
    },
    {
      label: "Settings",
      icon: "settings",
      redirectTo: "/",
    },
    {
      label: "Support",
      icon: "help-circle",
      redirectTo: "/",
    },
    // {
    //   label: "Lock Screen",
    //   icon: "lock",
    //   redirectTo: "/auth/lock-screen",
    // },
    {
      label: "Logout",
      icon: "log-out",
      redirectTo: "/auth/logout",
    },
  ];

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /*
   * toggle dropdown
   */
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="user-box text-center">

      {!profile ? (
        <img
          src={profileImg}
          alt=""
          title="Mat Helme"
          className="rounded-circle avatar-md"
        />
      ) : (
        <img
          src={`http://localhost:8080/api/company/img/${profile}`} // Fetch the image using the profile data
          alt=""
          title="Mat Helme"
          className="rounded-circle avatar-md"
        />
      )}

      <Dropdown show={dropdownOpen} onToggle={toggleDropdown}>
        <Dropdown.Toggle
          id="dropdown-notification"
          as="a"
          onClick={toggleDropdown}
          className="cursor-pointer text-dark h5 mt-2 mb-1 d-block"
        >
          {username}
        </Dropdown.Toggle>
        <Dropdown.Menu className="user-pro-dropdown m-0">
          {/* <div onClick={toggleDropdown}> */}
          {(ProfileMenus || []).map((item, index) => {
            return (
              <React.Fragment key={index + "-profile-menu"}>
                {index === ProfileMenus.length - 1 && (
                  <div className="dropdown-divider"></div>
                )}
                <Link
                  to={item.redirectTo}
                  className="dropdown-item notify-item"
                >
                  <FeatherIcon
                    icon={item.icon}
                    className="icon-dual icon-xs me-1"
                  />
                  <span>{item.label}</span>
                </Link>
              </React.Fragment>
            );
          })}
          {/* </div> */}
        </Dropdown.Menu>
      </Dropdown>
      <p className="text-muted">Admin Head</p>
    </div>
  );
};

/* sidebar content */
const SideBarContent = () => {
  return (
    <>
      <UserBox />

      <div id="sidebar-menu">
        <AppMenu menuItems={getMenuItems()} />
      </div>

      <div className="clearfix" />
    </>
  );
};

interface LeftSidebarProps {
  isCondensed: boolean;
}

const LeftSidebar = ({ isCondensed }: LeftSidebarProps) => {
  const menuNodeRef: any = useRef(null);

  /**
   * Handle the click anywhere in doc
   */
  const handleOtherClick = (e: any) => {
    if (
      menuNodeRef &&
      menuNodeRef.current &&
      menuNodeRef.current.contains(e.target)
    )
      return;
    // else hide the menubar
    if (document.body) {
      document.body.classList.remove("sidebar-enable");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOtherClick, false);
    return () => {
      document.removeEventListener("mousedown", handleOtherClick, false);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="left-side-menu" ref={menuNodeRef}>
        {!isCondensed && (
          <Scrollbar
            style={{ maxHeight: "100%" }}
            timeout={500}
            scrollbarMaxSize={320}
          >
            <SideBarContent />
          </Scrollbar>
        )}
        {isCondensed && <SideBarContent />}
      </div>
    </React.Fragment>
  );
};

LeftSidebar.defaultProps = {
  isCondensed: false,
};

export default LeftSidebar;
