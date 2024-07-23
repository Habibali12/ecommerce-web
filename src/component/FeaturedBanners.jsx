import React from "react";
import { Link } from "react-router-dom";
import Banner1 from "../styles/images/banner-1.png";
import Banner2 from "../styles/images/banner-2.png";
import Banner3 from "../styles/images/banner-3.png";
import "../styles/css/featured_banner.scss";

export const FeaturedBanners = () => {
  const boxData = [
    {
      heading: `Everyday Fresh & <br /> Clean with Our Products`,
      image: Banner1,
    },
    ,
    {
      heading: "Make your Breakfast Healthy and Easy",
      image: Banner2,
    },
    {
      heading: "The best Organic Products Online",
      image: Banner3,
    },
  ];

  return (
    <>
      {boxData.map((data) => (
        <>
          <div className="col-md-4">
            <div
              className="featured-banner-box"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <h3
                className="heading-featured-box"
                dangerouslySetInnerHTML={{ __html: data.heading }}
              ></h3>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
