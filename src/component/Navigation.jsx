import React from "react";
import { Link } from "react-router-dom";
import "../styles/css/navigation.scss";

export const Navigation = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-3">
          <div className="browse-categories">
            <button>
              <i className="fa-solid fa-grip-vertical me-2"></i>
              <p> Browse All Categories</p>
              <i className="fa-solid fa-chevron-down ms-2"></i>
            </button>
          </div>
        </div>
        <div className="col-md-7">
          <div className="nav-items-wrapper">
            <ul>
              <li>
                <Link>
                  <i className="fa-solid fa-fire me-1 icon-large"></i> Deals
                </Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
              <li className="position-relative">
                <Link>
                  Shop
                  <i className="fa-solid fa-chevron-down down-icon ms-2"></i>
                </Link>
                <div className="nav-item-dropdown">
                  <ul>
                    <li>
                      <Link> Shop - Main </Link>
                    </li>
                    <li>
                      <Link>Shop - Products</Link>
                    </li>
                    <li>
                      <Link>Shop - Cart</Link>
                    </li>
                    <li>
                      <Link>Shop - Checkout</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="position-relative">
                <Link>
                  Vendors
                  <i className="fa-solid fa-chevron-down down-icon ms-2"></i>
                </Link>
                <div className="nav-item-dropdown">
                  <ul>
                    <li>
                      <Link> Vendor Guide </Link>
                    </li>
                    <li>
                      <Link>Vendor Dashboard</Link>
                    </li>
                    <li>
                      <Link>Vendor List</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="position-relative">
                <Link>
                  Blog
                  <i className="fa-solid fa-chevron-down down-icon ms-2"></i>
                </Link>
                <div className="nav-item-dropdown">
                  <ul>
                    <li>
                      <Link>Blogs - Main</Link>
                    </li>
                    <li>
                      <Link>Blogs - Category</Link>
                    </li>
                    <li>
                      <Link>Blogs - Single</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-2">
          <div className="nav-contact">
            <Link
              to={"tel:19001800"}
              className="d-flex justify-content-end align-items-center"
            >
              <i className="fa-solid fa-headphones-simple me-3"></i>
              <h6 className="mb-0">1900 - 1800</h6>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
