import React from "react";
import slider2 from "../assetss/slider1.jpg";
import "./css/whatWeOffer.css";
import { FaClipboardCheck } from "react-icons/fa";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiClipboardDocument } from "react-icons/hi2"
import { GiProgression } from "react-icons/gi";

const WhatWeOffer = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div style={{ backgroundColor: "#eef5ff" }} className="whRight image_div2 border">
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div

              className="whLeft border py-4 px-md-4 px-2 d-flex flex-column justify-content-center"
            >
              <h3 className="mb-4 fw-bolder">
                For <span>Users</span>{" "}
              </h3>

              <div className="row">
                <div className="col-6 card1">
                  <div className="wLine1">
                    <div className="gola1"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center ">
                      <span>
                        <FaClipboardCheck className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">

                        Provide your <br /> Specifications
                      </h5>
                    </div>
                    <p className="mt-3">
                      Communicate your business requirements to us, and our consultants will contact you within one business day.
                    </p>
                  </div>
                </div>
                <div className="col-6 card2">
                  <div className="wLine2">
                    <div className="gola2"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <HiClipboardDocument className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Alignment of <br /> Partnerships
                      </h5>
                    </div>
                    <p className="mt-3">
                      We subsequently schedule meetings with our partners and developers to engage in a thorough discussion and scope your project
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <GiProgression className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Monitor  <br /> Advancement
                      </h5>
                    </div>
                    <p className="mt-3">
                      Your only task thereafter is to effortlessly monitor the progress and authorize milestones with our team until the final delivery.
                    </p>
                  </div>
                </div>
                <div className="col-6 card3">
                  <div className="wLine3">
                    <div className="gola3"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards2">
                    <div className="d-flex align-items-center">
                      <span>
                        <AiFillCheckCircle className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                      Execute  <br /> Agreements
                      </h5>
                    </div>
                    <p className="mt-3">
                    After your endorsement of both our developers and the project scope, we formalize agreements and initiate the commencement of your project
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeOffer;
