import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./css/crousel.css";

import slider1 from "../assetss/slider1.jpg";
import slider2 from "../assetss/slider2.jpg";
import slider3 from "../assetss/slider3.jpg";

const Crousel = () => {
  return (
    <div className="swiper-main container">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        spaceBetween={50}
        effect="fade"
        slidesPerView={1}
        onSlideChange={() => {
          gsap.from(".sliderh1", {
            y: 100,
            duration: 0.7,
            opacity: 0,
          });
          gsap.from(".swiperp", {
            y: 100,
            duration: 0.7,
            opacity: 0,
            delay: 0.3,
          });
          gsap.from(".swiperbtton", {
            y: 100,
            duration: 0.7,
            opacity: 0,
            delay: 0.3,
          });
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        {/* Slide 1 */}
        <SwiperSlide
          className="swiper-container"
          style={{ backgroundColor: "#EFF6FF" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 c-left ps-5">
              <h1 className="mb-4 sliderh1">
                Start <br /> <span>Growing</span>{" "}
              </h1>
              <p className="mb-5 swiperp">
                Utilize GrowYB to connect, share your wastage leads, and let us
                handle deal closures. Simplify your business journey by
                partnering with us for effective results.
              </p>
              <div className="swiperbtton">
                <button className="me-4">Learn more</button>
                <button>Contact us</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 img-con d-flex align-items-center">
              <img className="d-block w-100" src={slider1} alt="" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide
          className="swiper-container"
          style={{ backgroundColor: "#F7F5F6" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 c-left ps-5">
              <h1 className="mb-4 sliderh1">
                We Build <br /> <span>Mobile</span> App{" "}
              </h1>
              <p className="mb-5 swiperp">
                Our team transforms your business vision into reality by
                developing custom mobile apps and websites. We efficiently
                connect with vendors to bring your product to life.
              </p>
              <div className="swiperbtton">
                <button className="me-4">Learn more</button>
                <button>Contact us</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 img-con d-flex align-items-center">
              <img className="d-block w-100" src={slider2} alt="" />
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide
          className="swiper-container"
          style={{ backgroundColor: "#FFF4E0" }}
        >
          <div className="row">
            <div className="col-lg-6 col-md-12 c-left ps-5">
              <h1
                className="mb-4 sliderh1"
                style={{ fontSize: "2.5rem", lineHeight: 1.2 }}
              >
                Simplify Tech <span>Recruitment </span>
                <br /> with GrowYB{" "}
              </h1>
              <p className="mb-5 swiperp">
                The biggest pool of pre-vetted contractual developers across
                India.
              </p>
              <div className="swiperbtton">
                <button className="me-4">Learn more</button>
                <button>Contact us</button>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 img-con d-flex align-items-center">
              <img className="d-block w-100" src={slider3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Crousel;
