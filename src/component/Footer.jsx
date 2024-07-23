import React from "react";
import Logo from "../styles/images/logo.png";
import Apple from "../styles/images/app-store.jpg";
import Google from "../styles/images/google-play.jpg";
import "../styles/css/footer.scss";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo-wrapper">
              <img src={Logo} alt="Footer Logo" />
              <p className="mt-3">
                Awesome grocery store <br /> website template
              </p>
            </div>
            <div className="company-info">
              <p>
                <i class="fa-regular fa-envelope"></i>
                <strong>Email: </strong> sale@Nest.com
              </p>
              <p className="mt-3">
                <i class="fa-regular fa-clock"></i>
                <strong>Hours: </strong> 10:00 - 18:00, Mon - Sat
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="#">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Popular</h5>
              <ul>
                <li>
                  <Link to="#">Milk & Flavoured Milk</Link>
                </li>
                <li>
                  <Link to="#">Butter and Margarine</Link>
                </li>
                <li>
                  <Link to="#">Eggs Substitutes</Link>
                </li>
                <li>
                  <Link to="#">Marmalades</Link>
                </li>
                <li>
                  <Link to="#">Sour Cream and Dips</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer-links">
              <h5>Install App</h5>
            </div>
            <div className="install-links d-flex">
              <Link to="#">
                <img src={Apple} alt="Apple Store" />
              </Link>
              <Link to="#">
                <img src={Google} alt="Google Store" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
