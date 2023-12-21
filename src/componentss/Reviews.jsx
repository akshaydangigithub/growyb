import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard ,Autoplay} from "swiper/modules";
import img1 from "../assetss/rimg1.jpg";
import img2 from "../assetss/rimg2.jpg";
import img3 from "../assetss/rimg3.jpg";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./css/reviews.css";

const Reviews = () => {
  return (
    <>
      <div className="container rContainer mt-5 border">
        <Swiper
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          grabCursor={true}
          
          modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
        >
          <SwiperSlide className="SwiperContainer">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center justify-content-around">
                <div className="rImgCon">
                  <img src={img1} className="d-block w-100" alt="" />
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-center flex-column">
                <p className="textCon">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  corporis accusamus dolorum tempore harum iusto consectetur,
                  saepe aut asperiores est facere sint provident, placeat
                  maiores totam eaque neque laudantium repudiandae.
                </p>
                <div className="name d-flex align-items-center">
                    <div></div>
                    <p>A happy cutomer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperContainer">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center justify-content-around">
                <div className="rImgCon">
                  <img src={img2} className="d-block w-100" alt="" />
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-center flex-column">
                <p className="textCon">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  corporis accusamus dolorum tempore harum iusto consectetur,
                  saepe aut asperiores est facere sint provident, placeat
                  maiores totam eaque neque laudantium repudiandae.
                </p>
                <div className="name d-flex align-items-center">
                    <div></div>
                    <p>A happy cutomer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="SwiperContainer">
            <div className="row">
              <div className="col-md-4 d-flex align-items-center justify-content-around">
                <div className="rImgCon">
                  <img src={img3} className="d-block w-100" alt="" />
                </div>
              </div>
              <div className="col-md-8 d-flex justify-content-center flex-column">
                <p className="textCon">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
                  corporis accusamus dolorum tempore harum iusto consectetur,
                  saepe aut asperiores est facere sint provident, placeat
                  maiores totam eaque neque laudantium repudiandae.
                </p>
                <div className="name d-flex align-items-center">
                    <div></div>
                    <p>A happy cutomer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
       
        </Swiper>
      </div>
    </>
  );
};

export default Reviews;
