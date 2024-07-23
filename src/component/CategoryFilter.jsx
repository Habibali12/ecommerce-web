import React from "react";

import "../styles/css/category_filter.scss";

import DairyImage from "../styles/images/dairy.jpg";

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <h4 className="category-filter-title">Category</h4>
      <div className="filter-categories">
        <div className="filter-category-box d-flex align-items-center">
          <div className="category-image">
            <img src={DairyImage} alt="Category Image" />
          </div>
          <div className="category-title ms-2">
            <h6>Milk & Dairy</h6>
          </div>
        </div>
        <div className="filter-category-box d-flex align-items-center">
          <div className="category-image">
            <img src={DairyImage} alt="Category Image" />
          </div>
          <div className="category-title ms-2">
            <h6>Pet Foods</h6>
          </div>
        </div>
        <div className="filter-category-box d-flex align-items-center">
          <div className="category-image">
            <img src={DairyImage} alt="Category Image" />
          </div>
          <div className="category-title ms-2">
            <h6>Clothing</h6>
          </div>
        </div>
        <div className="filter-category-box d-flex align-items-center">
          <div className="category-image">
            <img src={DairyImage} alt="Category Image" />
          </div>
          <div className="category-title ms-2">
            <h6>Fresh Fruits</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
