import React, { useEffect } from "react";
import Crousel from "../componentss/Crousel";
import Navbar from "../componentss/Navbar";
import Cards from "../componentss/Cards";
import WhatWeDo from "../componentss/WhatWeDo";
import WhatWeOffer from "../componentss/WhatWeOffer";
import DesignCards from "../componentss/DesignCards";
import Reviews from "../componentss/Reviews";
import Company from "../componentss/Company";
import StartWebsite from "../componentss/StartWebsite";
import Footer from "../componentss/Footer";
import { MdKeyboardArrowUp } from "react-icons/md";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Homepage = () => {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.set(".topArrow", { scale: 0 });

    gsap.to(".topArrow", {
      transition: "all 0.5s ease",
      scale: 1,
      duration: .5,
      ease: "none",
      scrollTrigger: {
        trigger: ".topArrow",
        start: "top 40%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        markers: false,
      },
    });
  }, []);

  return (
    <>
      <a href="#">
        <div className="topArrow">
          <span>
            <MdKeyboardArrowUp />
          </span>
        </div>
      </a>
      <div className="main" style={{ backgroundColor: "#fcfdff" }}>
        <Navbar />
        <Crousel />
        <Cards />
        <WhatWeDo />
        <WhatWeOffer />
        <DesignCards />
        <Reviews />
        <Company />
        <StartWebsite />
        <Footer />
      </div>
    </>
  );
};

export default Homepage;
