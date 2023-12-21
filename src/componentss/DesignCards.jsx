import React, { useEffect, useState }  from "react";
import "./css/designCards.css";
import slider1 from "../assetss/slider1.jpg";
import slider2 from "../assetss/slider2.jpg";
import slider3 from "../assetss/slider3.jpg";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GiCheckMark } from "react-icons/gi";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const DesignCards = () => {

    useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".after-effect1", { width: 0 });
    gsap.set(".after-effect2", { width: 0 });
    gsap.set(".after-effect3", { width: 0 });

    const tl = gsap.timeline();

    tl.to(".after-effect1", {
      width: "90%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect1",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(".after-effect2", {
      width: "80%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect2",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
    tl.to(".after-effect3", {
      width: "70%",
      duration: 2,
      ease: "Expo.ease",
      scrollTrigger: {
        trigger: ".after-effect3",
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);

  return (
    <>
      <div className="container mt-5 border p-4 bg-white">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider2} alt="" />
              <h5 className="mt-4 fw-bolder">What we offer</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>
              <ul className="list-unstyled mt-4">
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Web Expertise
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Branding
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Design Illustration
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Data Analysis
                </li>
              </ul>
              <div className="d-link">
                <Link className="text-decoration-none d-flex align-items-center mt-4">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider1} alt="" />
              <h5 className="mt-4 fw-bolder">What we do</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>

              <div className="progress-main mt-4 pe-4">
                <div className="progress-inner">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Development</h6>
                    <h6 className="fw-bolder">90%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect1"></div>
                  </div>
                </div>
                <div className="progress-inner mt-4">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Design</h6>
                    <h6 className="fw-bolder">80%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect2"></div>
                  </div>
                </div>
                <div className="progress-inner mt-4 mb-3">
                  <div className="progress-inner-top d-flex align-items-center justify-content-between">
                    <h6 className="fw-bolder">Marketing</h6>
                    <h6 className="fw-bolder">70%</h6>
                  </div>
                  <div className="progress-inner-bottom mt-1">
                    <div className="after-effect3"></div>
                  </div>
                </div>
              </div>
              <div className="d-link">
                <Link className="text-decoration-none d-flex align-items-center">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="dCard">
              <img className="d-block w-100" src={slider3} alt="" />
              <h5 className="mt-4 fw-bolder">Hire Developers</h5>
              <span className="dDate">April 29, 2019 . Ferdinand Davidson</span>

              <ul className="list-unstyled mt-4">
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Verified Delevelopes
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Reduced Cost
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  Less Time
                </li>
                <li>
                  <span className="dIcon">
                    <GiCheckMark />
                  </span>
                  95% Success Rate
                </li>
              </ul>
              <div className="d-link">
                <Link className="text-decoration-none d-flex align-items-center mt-4">
                  Read more{" "}
                  <span>
                    <MdOutlineKeyboardArrowRight
                      className="dArrow"
                      style={{ color: "#000", fontSize: "1.2rem" }}
                    />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesignCards;
