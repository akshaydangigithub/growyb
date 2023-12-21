import React from "react";
import slider2 from "../assetss/slider2.jpg";
import { FaCloudUploadAlt } from "react-icons/fa";
import { GiProgression } from "react-icons/gi";
import { IoLogoClosedCaptioning } from "react-icons/io";
import { TiTick } from "react-icons/ti";

const WhatWeDo = () => {
  return (
    <>
      <div className="container mt-4  ">
        <div className="row">
          <div className="col-lg-6 mb-3">
            <div className="whLeft border py-4 px-md-4 px-2 d-flex flex-column justify-content-center">
              <h3 className="mb-4 fw-bolder">
                For <span>Vendors</span>{" "}
              </h3>

              <div className="row">
                <div className="col-6 card1">
                  <div className="wLine1">
                    <div className="gola1"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards1">
                    <div className="d-flex align-items-center ">
                      <span>
                        <FaCloudUploadAlt className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Upload The wastage <br /> Leads
                      </h5>
                    </div>
                    <p className="mt-3">
                      wastage leads, and the GrowYb team will make every effort
                      to seal the deals, sharing the resulting profits with you.
                    </p>
                  </div>
                </div>
                <div className="col-6 card2">
                  <div className="wLine2">
                    <div className="gola2"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards1">
                    <div className="d-flex align-items-center">
                      <span>
                        <GiProgression className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Track <br /> Progress
                      </h5>
                    </div>
                    <p className="mt-3">
                      Easily monitor the progress of your provided leads with
                      our user-friendly status tracking feature. Stay updated on
                      lead developments.
                    </p>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards1">
                    <div className="d-flex align-items-center">
                      <span>
                        <IoLogoClosedCaptioning className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Get Closing <br /> Confirmation
                      </h5>
                    </div>
                    <p className="mt-3">
                      Rest assured, you will receive confirmation as soon as
                      your provided lead is successfully closed, keeping you
                      updated throughout.
                    </p>
                  </div>
                </div>
                <div className="col-6 card3">
                  <div className="wLine3">
                    <div className="gola3"></div>
                  </div>
                  <div className="py-4 px-md-3 px-2 rounded-4 shadow respCards1">
                    <div className="d-flex align-items-center">
                      <span>
                        <TiTick className="whIcon me-3" />
                      </span>
                      <h5 className="respH3">
                        Get profits and <br /> Reports
                      </h5>
                    </div>
                    <p className="mt-3">
                      Expect to receive profits from every deal, along with
                      detailed reports to provide transparency and insights into
                      your investments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-3">
            <div
              style={{ backgroundColor: "#f6f4f5" }}
              className="whRight image_div1 border"
            >
              <img src={slider2} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
