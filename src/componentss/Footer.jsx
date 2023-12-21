import React from "react";
import "./css/footer.css";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import playStore from "../assetss/playStore.png";
import appStore from "../assetss/appStore.png";

const Footer = () => {
  return (
    <>
      <div className="border mt-5 py-5 px-4 fContainer">
        <div className="row">
          <div className="col-md-3 mb-4">
            <div>
              <h4 className="logo mb-4">Milu</h4>
              <p className="fPTag">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitationt.
              </p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="fSecondSection">
              <h4 className="mb-4 fLinks">QuickLinks</h4>
              <ul className="list-unstyled">
                <li className="mb-3 fHover">About Us</li>
                <li className="mb-3 fHover">FAQ</li>
                <li className="mb-3 fHover">Blog</li>
                <li className="mb-3 fHover">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div>
              <h4 className="mb-4 fLinks">Last Tweet</h4>
              <div className="fThirdSection">
                <div className="col-2">
                  <AiOutlineTwitter className="twitter" />
                </div>
                <div className="col-9">
                  <p>
                    Our Twitter feed is currently unavailable but you can visit
                    our official twitter page @wolf_themes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div>
              <h4 className="mb-4 fLinks">Download Our App</h4>
              <p className="fFourthSection">
                Available on Google Play and App Store.
              </p>
              <div className="row mt-5">
                <div className="col-6">
                  <img
                    style={{ cursor: "pointer" }}
                    src={playStore}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-6">
                  <img
                    style={{ cursor: "pointer" }}
                    src={appStore}
                    className="d-block w-100"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-6 copyRight align-self-center">© Created By Akshay With ❤</div>
          <div className="col-6 d-flex align-items-center justify-content-end">
            <div className="fSocialIcons">
                <BiLogoFacebook className="fIcons"/>
            </div>
            <div className="fSocialIcons">
                <AiOutlineTwitter className="fIcons"/>
            </div>
            <div className="fSocialIcons">
                <AiOutlineInstagram className="fIcons"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
