import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div className="col-md-3 footer-logo d-flex flex-column align-items-center mb-3 mb-md-0">
            <img src={logo} alt="Logo" className="mb-2" />
            <p>© 2024 - Mmt All Rights Reserved</p>
          </div>
          <div className="col-md-6 d-flex justify-content-between">
            <div className="footer-links me-2">
              <h5>Quick Links</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#discography">Discography</a>
                </li>
                <li>
                  <a href="#concerts">Concerts</a>
                </li>
                <li>
                  <a href="#tourcompostion">Tour-Composition</a>
                </li>
                <li>
                  <a href="#newtracks">New-Tracks</a>
                </li>
                <li>
                  <a href="#upcomingevents">Upcoming-Events</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>                
              </ul>
            </div>

            <div className="footer-contact">
              <h5>Contact Us</h5>
              <p>
                <FontAwesomeIcon icon={faEnvelope} /> info@example.com
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} /> +123 456 7890
              </p>
              <div className="footer-social mt-2">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
