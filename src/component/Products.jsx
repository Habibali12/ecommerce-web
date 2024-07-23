import React from "react";
import Product1 from "../styles/images/product-1.jpg";
import "../styles/css/products_box.scss";

export const Products = () => {
  return (
    <>
      <div className="product-box">
        <div className="product-img position-relative">
          <img src={Product1} alt="Product1" />
          <div className="product-options d-flex">
            <div className="option me-1">
              <button>
                <i className="fa-regular fa-eye"></i>
              </button>
            </div>
            <div className="option">
              <button>
                <i className="fa-regular fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
        <p className="product-category mt-4">Category</p>
        <h4 className="product-heading">Product heading</h4>
        <div className="product-rating d-flex">
          <i class="fa-solid fa-star fa-fw rated"></i>
          <i class="fa-solid fa-star fa-fw rated"></i>
          <i class="fa-solid fa-star fa-fw rated"></i>
          <i class="fa-solid fa-star fa-fw"></i>
          <i class="fa-solid fa-star fa-fw"></i>
        </div>
        <div className="product-add-price-box mt-3 d-flex align-items-center justify-content-between">
          <div className="col-md-7">
            <p className="product-price">7.99 $</p>
          </div>
          <div className="col-md-5">
            <button>Add</button>
          </div>
        </div>
      </div>
    </>
  );
};
