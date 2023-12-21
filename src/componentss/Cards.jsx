import React, { useEffect } from "react";
import card1 from "../assetss/card1.png";
import card2 from "../assetss/card2.png";
import card3 from "../assetss/card3.png";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import "./css/card.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Cards = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".cCard", { opacity: 0, y: -100 });

    gsap.to(".cCard", {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: "Expo.ease",
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".cCard",
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
      },
    });
  }, []);
  return (
    <div style={{ zIndex: "999" }} className="mt-5 container">
      <div className="row">
        <div className="col-lg-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card1} alt="" />
            <h4 className="mb-4 fw-bolder">Marketplace</h4>
            <p className="mb-5 pTag">
              GrowYB serves as the ultimate destination for businesses in search
              of digital services. With a wide-ranging portfolio, we address
              diverse digital needs, making us the go-to choice for
              organizations looking to excel and prosper in the digital
              landscape.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
                className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
        <div className="col-lg-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card2} alt="" />
            <h4 className="mb-4 fw-bolder">Hire Verified Developers</h4>
            <p className="mb-5 pTag">
              GrowYB provides a reliable source of verified and experienced
              developers to fulfill all your contractual staffing needs. With
              our talent pool, you can confidently meet project demands,
              ensuring expertise and efficiency in your endeavors.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
                className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
        <div className="col-lg-4 mb-3 cCard">
          <div className="border px-5 py-5 rounded bg-white">
            <img className="mb-4" src={card3} alt="" />
            <h4 className="mb-4 fw-bolder">Development</h4>
            <p className="mb-5 pTag">
              Our services encompass customized mobile app, website, and
              software development, meticulously crafted to meet your specific
              needs. We employ the latest and most advanced technologies to
              ensure that your digital solutions remain at the
              forefront of innovation.
            </p>
            <span className="d-flex align-items-center cLink">
              <Link
                style={{ color: "#6272C7", fontSize: ".8rem" }}
                className="text-decoration-none me-2 fw-bolder"
              >
                LEARN MORE
              </Link>
              <MdOutlineKeyboardArrowRight
                className="arrow fw-bolder"
                style={{ color: "#6272C7", fontSize: "1.2rem" }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
