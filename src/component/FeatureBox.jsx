import React from "react";
import "../styles/css/feature_box.scss";

export const FeatureBox = (props) => {
  const { title, content, icon } = props;

  return (
    <div className="feature-box-wrapper d-flex align-items-center">
      <div className="icon-wrapper me-3">
        <img src={icon} alt="Feature Icon" />
      </div>
      <div className="details-wrapper">
        <h4> {title} </h4>
        <p> {content} </p>
      </div>
    </div>
  );
};
