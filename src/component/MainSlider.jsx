import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/css/main_banner.scss";

export const MainSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    autoplay: 3000,
  };

  return (
    <Slider {...settings}>
      <div className="item">
        <div className="slide-item slide-item-1">
          <div className="container">
            <div className="row">
              <div className="main-banner-heading">
                <h1>
                  Don't miss <br /> amazing deals
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="slide-item slide-item-2">
          <div className="container">
            <div className="row">
              <div className="main-banner-heading">
                <h1>
                  Fresh Vegetables <br /> Big Discounts
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};
