import React from "react";
import { MainSlider } from "../component/MainSlider";
import { CategorySlider } from "../component/CategorySlider";
import { FeaturedBanners } from "../component/FeaturedBanners";
import { Link } from "react-router-dom";
import "../styles/css/product_tabs.scss";
import { Products } from "../component/Products";

export const Home = () => {
  return (
    <>
      <section className="hero-slider-section">
        <div className="container">
          <div className="row">
            <MainSlider />
          </div>
        </div>
      </section>
      <section className="category-section">
        <div className="container">
          <div className="row">
            <CategorySlider />
          </div>
        </div>
      </section>
      <section className="featured-banners">
        <div className="container">
          <div className="row">
            <FeaturedBanners />
          </div>
        </div>
      </section>
      <section className="popular-products">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div className="section-heading">
                <h2>Popular Products</h2>
              </div>
            </div>
            <div className="col-md-8">
              <div className="product-tabs">
                <ul>
                  <li>
                    <Link>All</Link>
                  </li>
                  <li>
                    <Link>Milks & Dairies</Link>
                  </li>
                  <li>
                    <Link>Coffes & Teas</Link>
                  </li>
                  <li>
                    <Link>Pet Foods</Link>
                  </li>
                  <li>
                    <Link>Meats</Link>
                  </li>
                  <li>
                    <Link>Vegetables</Link>
                  </li>
                  <li>
                    <Link>Fruits</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="products-section pt-5">
        <div className="container">
          <div className="row">
            <Products />
          </div>
        </div>
      </section>
    </>
  );
};
