import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../styles/css/product_slider.scss";

import { Products } from "./Products";

export const ProductSlider = () => {
  var product_slider_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: 3000,
  };

  return (
    <>
      <Slider {...product_slider_settings}>
        <div className="item">
          <Products />
        </div>
        <div className="item">
          <Products />
        </div>
        <div className="item">
          <Products />
        </div>
        <div className="item">
          <Products />
        </div>
      </Slider>
    </>
  );
};
