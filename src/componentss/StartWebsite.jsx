import React from "react";
import "./css/startWebsite.css";
import { useNavigate } from "react-router-dom";

const StartWebsite = () => {
  const navigate = useNavigate();

  const RedirectToVendorContact = () => {
    navigate("/vendor/contact");
  };
  return (
    <>
      <div className="container mt-5 sContainer border">
        <h1>Start your business now with GrowYB!</h1>
        <button onClick={RedirectToVendorContact}>start now</button>
      </div>
    </>
  );
};

export default StartWebsite;
