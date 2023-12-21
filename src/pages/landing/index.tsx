import React, { useEffect } from "react";

// components
import Tagline from "./Tagline.tsx";
import NavBar from "./NavBar.tsx";
import Hero from "./Hero.tsx";
import Layouts from "./Layouts.tsx";
import Pages from "./Pages.tsx";
import Features from "./Features.tsx";
import FAQs from "./FAQs.tsx";
import Footer from "./Footer.tsx";

// // dummy data
import { layouts, pagesList } from "./data.tsx";

const Landing = () => {
  useEffect(() => {
    if (document.body) {
      document.body.classList.remove("authentication-bg");
      document.body.classList.add("pb-0");
    }

    return () => {
      if (document.body) document.body.classList.remove("pb-0");
    };
  }, []);

  return (
    <div className="landing">
      {/* tagline */}
      <Tagline />

      {/* navbar */}
      <NavBar />

      {/* hero */}
      <Hero />

      {/* layout demos */}
      <Layouts layouts={layouts} />

      {/* pages demos */}
      <Pages pagesList={pagesList} />

      {/* widgets demos */}
      <Features />

      {/* FAQs */}
      <FAQs />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Landing;
