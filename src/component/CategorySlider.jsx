import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/css/category_slider.scss";
import Icecream from "../styles/images/ice-cream-cone.png";

export const CategorySlider = () => {
  var CategorySliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <Slider {...CategorySliderSettings}>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="category-slide-item">
          <div className="category-slide-box d-flex flex-column align-items-center">
            <div className="img-div">
              <img src={Icecream} alt="Icecream" />
            </div>
            <h4>Ice cream</h4>
          </div>
        </div>
      </div>
    </Slider>
  );
};
