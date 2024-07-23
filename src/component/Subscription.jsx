import React from "react";
import "../styles/css/newsletter.scss";

export const Subscription = () => {
  return (
    <section className="newsletter-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="newsletter-wrapper">
              <div className="wrapper-details">
                <h2>Stay home & get your daily needs from our shop</h2>
                <p>Start You'r Daily Shopping!</p>
                <input type="email" placeholder="Your Email Address" />
                <input type="submit" value="Subscribe!" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
