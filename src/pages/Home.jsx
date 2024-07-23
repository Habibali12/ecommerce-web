import React from "react";
import { Link } from "react-router-dom";
import { MainSlider } from "../component/MainSlider";
import { CategorySlider } from "../component/CategorySlider";
import { FeaturedBanners } from "../component/FeaturedBanners";
import { Products } from "../component/Products";
import { ProductSlider } from "../component/ProductSlider";
import { TopSellingItems } from "../component/TopSellingItems";
import { Subscription } from "../component/Subscription";
import { FeatureBox } from "../component/FeatureBox";

import "../styles/css/product_tabs.scss";
import "../styles/css/product_slider_banner.scss";
import "../styles/css/top_selling.scss";

import HomeSliderBanner from "../styles/images/home-slider-banner.jpg";
import gift from "../styles/images/gift.png";
import delivery from "../styles/images/delivery-truck.png";
import deal from "../styles/images/deak.png";
import easyreturn from "../styles/images/return.png";

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
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
            <div className="col-md-4 col-lg-2">
              <Products />
            </div>
          </div>
        </div>
      </section>
      <section className="product-slider">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <div
                className="product-slider-banner"
                style={{ backgroundImage: `url(${HomeSliderBanner})` }}
              >
                <h4>Bring nature into your home</h4>
                <div className="product-link d-flex mt-5">
                  <Link>Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <ProductSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="top-selling-section">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="top-selling-wrapper">
                <h3 className="wrapper-title">Top Selling</h3>
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Organic Cage-Free Grade A Large Brown Eggs"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-selling-wrapper">
                <h3 className="wrapper-title">Trending Products</h3>
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Organic Cage-Free Grade A Large Brown Eggs"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="top-selling-wrapper">
                <h3 className="wrapper-title">Recently added</h3>
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Organic Cage-Free Grade A Large Brown Eggs"
                  price="32.85"
                  saleprice="33.8"
                />
                <TopSellingItems
                  title="Nestle Original Coffee-Mate Coffee Creamer"
                  price="32.85"
                  saleprice="33.8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Subscription />
      <section className="features-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <FeatureBox
                title="Best prices & offers"
                content="Orders $50 or more"
                icon={gift}
              />
            </div>
            <div className="col-md-3">
              <FeatureBox
                title="Free delivery"
                content="24/7 amazing services"
                icon={delivery}
              />
            </div>
            <div className="col-md-3">
              <FeatureBox
                title="Great daily deal"
                content="When you sign up"
                icon={deal}
              />
            </div>
            <div className="col-md-3">
              <FeatureBox
                title="Easy returns"
                content="Within 30 days"
                icon={easyreturn}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
