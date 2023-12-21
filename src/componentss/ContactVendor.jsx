import { useState } from "react";
import "./css/vendor.css";
import gsap from "gsap";
import { Col, Form, Row } from 'react-bootstrap';
import {useAlert} from 'react-alert'

// import ExampleCarouselImage from '../assetss/garbage1.png';
import ExampleCarouselImage from '../assetss/garbage1.png';
import axios from "axios";
import MyAPI, { Item } from "./MyAPI";
import { Link } from "react-router-dom";
import '../assetss/css/login.css';

const ContactVendor = () => {
  const [focusedInput, setFocusedInput] = useState(null);
  const [currentTech, setCurrentTech] = useState("");
  const [validated, setValidated] = useState(false);
  const [index, setIndex] = useState(0);
  let alert = useAlert();

  const [c_name, setC_name] = useState('');
  const [c_address, setC_address] = useState('');
  const [c_contact, setC_contact] = useState('');
  const [c_email, setCEmail] = useState('');
  const [c_founder, setc_founder] = useState('');
  const [logo, setlogo] = useState(null);
  const [technologies, setTechnologies] = useState([]);
  const [services, setservices] = useState([]);
  const [portfolio, setportfolio] = useState(null);
  const [password,setPassword] = useState('');


  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const handleFocus = (inputId) => {
    setFocusedInput(inputId);

    gsap.to(`#input_border_${inputId}`, {
      display: "block",
      width: "100%",
      duration: 1,
      ease: "expo.out",
    });
  };

  const handleBlur = (inputId) => {
    setFocusedInput(null);

    gsap.to(`#input_border_${inputId}`, {
      display: "none",
      width: "0%",
      duration: 1,
      ease: "expo.out",
    });
  };

  const handleInputChange = (e) => {
    setCurrentTech(e.target.value);
  };

  const handleEnterPress = (e) => {
    if (e.key === "Enter" && currentTech.trim() !== "") {
      setTechnologies((prevTechs) => [...prevTechs, currentTech]);
      setCurrentTech("");
    }
  };

  const handleRemoveTech = (tech) => {
    setTechnologies((prevTechs) => prevTechs.filter((t) => t !== tech));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      c_name: c_name,
      c_address: c_address,
      c_contact: c_contact,
      email: c_email,
      c_founder: c_founder,
      companyLogo: logo,
      technology: technologies,
      services: services,
      password,
      companyPortfolio: portfolio,
    };

    const newFormData = new FormData();
Object.keys(formData).forEach((key) => {
  if (Array.isArray(formData[key])) {
    formData[key].forEach((value) => newFormData.append(key, value));
  } else {
    newFormData.append(key, formData[key]);
  }
});


    console.log('formData',formData)
    console.log('newFormData',newFormData.getAll)
    try {
      const response = await axios.post('http://localhost:8080/api/company/signup', newFormData);
  console.log('response',response)
      if (response.data.status == true) {
        alert.success(response.data.message);
        Item.setItem('token',response.data.token);
        Item.setItem('isAdmin',false);
        window.location.assign('/vendor/dashboard/uploadLeads');
      } else {
        Item.setItem('isAdmin',false);
        alert.error(response.data.message);
      }
    } catch (error) {
      console.log(error)
      Item.setItem('isAdmin',false);
      alert.error(error.message);
    }

  // axios.post('http://localhost:8080/api/company/signup', newFormData, {
  //   // headers: {
  //   //   'Content-Type': 'multipart/form-data',
  //   // },
  // }).then((res)=>{
  //   console.log(res)
  // })

  };

  const handleCheckboxChange = (value) => {
    if (services.includes(value)) {
      setservices(services.filter((checkbox) => checkbox !== value));
    } else {
      setservices([...services, value]);
    }
  };

  return (
    <>
      <div >
        <img
          className=" w-98 img-fluid  bannerimage mx-auto d-block "
          src={ExampleCarouselImage}
          alt="First slide"
        />
      </div>

      <div className="vendor_contact_main"  >
        <div className="container vendor_contact_main_inner px-5 py-3" style={{borderRadius:'10px', boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", background: "white" }} >
          <h3 className="mx-auto d-block mt-4" >Explore Our Vendor Interaction Form for Seamless Collaboration.</h3>
          <br />
          <br />
          <form className="mt-4" onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "500", color: "grey" }} >Enter Company Name </Form.Label> <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              <Form.Control
                style={{ height: "45px", fontSize: "1.2rem" }}
                required
                type="text"
                onChange={(e) => setC_name(e.target.value)}
                value={c_name}
                placeholder="Eg : softseekersinfotech "
              // defaultValue="Mark"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "500", color: "grey" }}>Enter Company Address </Form.Label>  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              <Form.Control
                style={{ height: "45px", fontSize: "1.2rem" }}
                onChange={(e) => setC_address(e.target.value)}
                value={c_address}
                required
                type="text"
                placeholder="Eg : Qubikals Co-working Space, 13"
              // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "500", color: "grey" }}>Contact No. </Form.Label>  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              <Form.Control
                style={{ height: "45px", fontSize: "1.2rem" }}
                onChange={(e) => setC_contact(e.target.value)}
                value={c_contact}
                required
                type="number"
                placeholder="Eg : +91-9151485749"
              // defaultValue="Otto"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "500", color: "grey" }}>Email Id</Form.Label>  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              <Form.Control
                style={{ height: "45px", fontSize: "1.2rem" }}
                onChange={(e) => setCEmail(e.target.value)}
                value={c_email}
                type="email" placeholder="Eg : example@gmail.com" required />
              <Form.Control.Feedback type="invalid">
                Please provide a email id.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom04">
              <Form.Label style={{ fontSize: "1.2rem", fontWeight: "500", color: "grey" }}>Founder Name
              </Form.Label>  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              <Form.Control type="text"
                style={{ height: "45px", fontSize: "1.2rem" }}
                onChange={(e) => setc_founder(e.target.value)}
                value={c_founder}
                required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid name
              </Form.Control.Feedback>
            </Form.Group>

          </Row>

          {/* </Form> */}
          {/* <form className="mt-4" onSubmit={handleSubmit}> */}

            <div
              className={`name_div input_box mb-3 ${focusedInput === "companyLogo" ? "focused" : ""
                }`}
            >
              <label className="mb-2" htmlFor="name" style={{ color: "grey" }}  >
                Upload Company Logo  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              </label>
              <Form.Group className="position-relative mb-3">
                <Form.Control
                  style={{ background: "white" }}
                  type="file"
                  required
                  onChange={e => setlogo(e.target.files[0])}
                  name="file"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  "Choose File"
                </Form.Control.Feedback>
              </Form.Group>
              <div id="input_border_companyLogo" className="input_border"></div>
            </div>
            <div className="checkBox mb-3">
              <label className="mb-2" htmlFor="name" style={{ color: "grey" }} >
                Select Services  <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              </label>
              <div className="row">
                <div className="col-6">
                  {" "}
                  <div className="checkbox_div mb-3">
                    {" "}
                    <input
                      onChange={() => handleCheckboxChange('Website Development')}
                      checked={services.includes('Website Development')}
                      type="checkbox" className="me-3 mt-1" />
                    <span className="respSpan">Website Developement</span>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="checkbox_div mb-3">
                    {" "}
                    <input type="checkbox"
                      onChange={() => handleCheckboxChange('App/IOS Developement')}
                      checked={services.includes('App/IOS Developement')}
                      className="me-3 mt-1" />
                    <span className="respSpan">App/IOS Developement</span>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="checkbox_div mb-3">
                    {" "}
                    <input
                      onChange={() => handleCheckboxChange('Software Developement')}
                      checked={services.includes('Software Developement')}
                      type="checkbox" className="me-3 mt-1" />
                    <span className="respSpan">Software Developement</span>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="checkbox_div mb-3">
                    {" "}
                    <input
                      onChange={() => handleCheckboxChange('Digital Marketing')}
                      checked={services.includes('Digital Marketing')}
                      type="checkbox" className="me-3 mt-1" />
                    <span className="respSpan">Digital Marketing</span>
                  </div>
                </div>
                <div className="col-6 ">
                  <div className="checkbox_div mb-3">
                    {" "}
                    <input
                      onChange={() => handleCheckboxChange('Project Outsoursing')}
                      checked={services.includes('Project Outsoursing')}
                      type="checkbox" className="me-3 mt-1" />
                    <span className="respSpan">Project Outsoursing</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={`name_div input_box mb-3 ${focusedInput === "addTech" ? "focused" : ""
                }`}
            >
              <label className="mb-2" htmlFor="name" style={{ color: "grey" }} >
                Add Technologies <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              </label>
              <div className="technologies-list d-flex">
                {technologies.map((tech, index) => (
                  <div
                    style={{ backgroundColor: "#FFC050", padding: "6px 10px" }}
                    key={index}
                    className="technology me-3 mb-2 fw-bold"
                  >
                    {tech}
                    <span
                      className="remove-tech ms-2"
                      onClick={() => handleRemoveTech(tech)}
                      style={{ cursor: "pointer" }}
                    >
                      &#10005;
                    </span>
                  </div>
                ))}
              </div>
              <Form.Control
                style={{ height: "45px", fontSize: "1.2rem", background: "white" }}
                className="pt-2"
                type="text"
                value={currentTech}
                onChange={handleInputChange}
                // onFocus={() => handleFocus("addTech")}
                // onBlur={() => handleBlur("addTech")}
                onKeyPress={handleEnterPress}
              />
              <div id="input_border_addTech" className="input_border"></div>
            </div>
            <div
              className={`name_div input_box mb-3 ${focusedInput === "companyPort" ? "focused" : ""
                }`}
            >
              <label className="mb-2" htmlFor="name" style={{ color: "grey" }} >
                Upload Company Broucher & Portfolio <span style={{ fontWeight: "bold", color: "red" }} >*</span>
              </label>

              <Form.Group className="position-relative mb-3">
                <Form.Control
                  style={{ background: "white" }}
                  type="file"
                  required
                  onChange={e => setportfolio(e.target.files[0])}
                  name="file"
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  "Choose File"
                </Form.Control.Feedback>
              </Form.Group>

              <div id="input_border_companyPort" className="input_border"></div>
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                aria-describedby="helpId"
                placeholder="Enter Password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
              />
            </div>
            <Form.Group className="mb-3">
              <Form.Check
                required
                label="Agree to terms and conditions"
                feedback="You must agree before submitting."
                feedbackType="invalid"
              />
            </Form.Group>
            <div className="text-warning mb-3">Already have an account? <Link style={{color:'blue'}} to={'/vendor/login'} className="text-warning">Sign In</Link> </div>
            <button className="submit_btn ms-auto d-block">
              Register
            </button>
          </form>
        </div>

      </div>
    </>
  );
};

export default ContactVendor;
