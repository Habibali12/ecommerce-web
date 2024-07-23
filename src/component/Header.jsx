import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/css/search_bar.scss";
import "../styles/css/header.scss";
import { SearchDropdown } from "./SearchDropdown";
import { Navigation } from "./Navigation";
import Logo from "../styles/images/logo.png";

const locationIcon = `<i class="fa-solid fa-location-dot"></i>`;

export const Header = () => {
  const headerDropdownRef = useRef(null);

  const [categories, setcategories] = useState([
    "Milks and Dairies",
    "Wines & Alcohol",
    "Clothing & Beauty",
    "Pet Foods & Toy",
    "Baking material",
    "Vegetables",
    "Fresh Seafood",
    "Noodles & Rice",
    "Ice cream",
  ]);

  const countryList = [];

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry = async (url) => {
    try {
      await axios.get(url).then((res) => {
        if (res !== null) {
          res.data.data.map((countryName, index) => {
            return countryList.push(countryName.country);
          });
        }
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const dropDownHandle = () => {
    setisDropdownOpen((prev) => !prev);
  };

  const handleheaderDropdownRef = (event) => {
    if (
      headerDropdownRef.current &&
      !headerDropdownRef.current.contains(event.target)
    ) {
      setisDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleheaderDropdownRef);

    return () => {
      document.removeEventListener("mousedown", handleheaderDropdownRef);
    };
  }, []);

  return (
    <header>
      <div className="header-main-top pt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-2">
              <div className="logo-wrapper">
                <Link to={"/"}>
                  <img src={Logo} alt="Logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-5">
              <div className="search-wrapper">
                <div className="row">
                  <div className="col-md-5 d-flex align-items-center">
                    <SearchDropdown
                      data={categories}
                      placeholder="All Categories"
                      icon={false}
                    />
                  </div>
                  <div className="col-md-7">
                    <div className="search-bar-wrapper d-flexsearch-bar-wrapper d-flex align-items-center">
                      <input type="text" placeholder="Search for Items..." />
                      <i className="fa-solid fa-magnifying-glass mb-1"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="location-wrapper">
                <SearchDropdown
                  data={countryList}
                  placeholder="Select Location"
                  icon={locationIcon}
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="main-header-options d-flex justify-content-between">
                <div className="option-box w-100">
                  <ul className="d-flex align-items-center justify-content-end">
                    <li>
                      <div className="header-item d-flex align-items-center">
                        <i className="fa-regular fa-heart me-2"></i>
                        <p>Wishlist</p>
                      </div>
                    </li>
                    <li>
                      <div className="header-item d-flex align-items-center">
                        <i className="fa-solid fa-basket-shopping me-2"></i>
                        <p>Cart</p>
                      </div>
                    </li>
                    <li className="position-relative">
                      <div
                        className="header-item d-flex align-items-center"
                        onClick={() => dropDownHandle()}
                        ref={headerDropdownRef}
                      >
                        <i className="fa-regular fa-user me-2"></i>
                        <p>Account</p>
                      </div>
                      {isDropdownOpen && (
                        <ul className="header-options-dropdown">
                          <li>
                            <i className="fa-regular fa-user me-2"></i>
                            <p>My Account</p>
                          </li>
                          <li>
                            <i className="fa-solid fa-motorcycle me-2"></i>
                            <p>Order Tracking</p>
                          </li>
                          <li>
                            <i className="fa-solid fa-ticket me-2"></i>
                            <p>My Voucher</p>
                          </li>
                          <li>
                            <i className="fa-regular fa-heart me-2"></i>
                            <p>My Wishlisht</p>
                          </li>
                          <li>
                            <i className="fa-solid fa-gear me-2"></i>
                            <p>Settings</p>
                          </li>
                          <li>
                            <i className="fa-solid fa-arrow-right-from-bracket me-2"></i>
                            <p>Sign Out</p>
                          </li>
                        </ul>
                      )}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="navigation-row py-3 mt-3">
        <Navigation />
      </div>
    </header>
  );
};
