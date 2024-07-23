import React from "react";

import { Products } from "../component/Products";
import CategoryFilter from "../component/CategoryFilter";

import "../styles/css/category_page.scss";

export const Category = () => {
  return (
    <>
      <section className="category-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="category-banner-details">
                <div className="details-wrapper">
                  <h4>Snack</h4>
                  <p className="mt-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Dicta rerum blanditiis numquam vitae sapiente neque eum, rem
                    vel illum corporis facilis, voluptates, ipsa sed modi fuga
                    fugit ad officiis eligendi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="category-products">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <CategoryFilter />
            </div>
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
                <div className="col-md-3">
                  <Products />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
