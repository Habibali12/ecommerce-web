import React from "react";
import ProductImage from "../styles/images/product-1.jpg";
import "../styles/css/top_selling.scss";

export const TopSellingItems = (props) => {
  const { title, price, saleprice } = props;

  return (
    <>
      <div className="item-detail-wrapper d-flex align-items-center">
        <div className="img-wrapper">
          <img src={ProductImage} alt="Product Image" />
        </div>
        <div className="items-details ms-4">
          <h5 className="item-title">{title}</h5>
          <p className="item-price">
            ${price} <span>${saleprice}</span>
          </p>
        </div>
      </div>
    </>
  );
};
