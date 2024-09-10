// src/components/Footer.js
import React from "react";
import FormPart from "./ContactForm";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitterSquare,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useLocation } from "react-router-dom";

const UpperFooter = () => {
  const location = useLocation();
  const isDonatePage = location.pathname === "/donate";

  return (
    <footer className="footer" id="footer-section">
      <div className="container">
        <div className={isDonatePage ? "row text-center px-5" : "row"}>
          <div className={isDonatePage ? "col-md-8" : "col-md-4"}>
            <h2>About Us</h2>
            <p>
              Erinah Uganda is a non-profit organization dedicated to serving
              vulnerable individuals and communities in Uganda. Through our
              holistic programs in education, healthcare, sports, and economic
              development, we strive to create lasting, positive change and
              build a more equitable society. Join us in our mission to uplift
              those in need and foster a brighter future for all Ugandans.
            </p>
          </div>
          <div className={isDonatePage ? "col-md-4" : "col-md-4 text-center"}>
            <h2>Contact Us</h2>
            <address className="md-margin-bottom-40">
              Erinah Uganda <br />
              {/* Kampala District <br /> */}
              Phone: +91 9159669599 <br />
              Email:{" "}
              <a href="mailto:erinahuganda@gmail.com" className="">
                erinahuganda@gmail.com
              </a>
              <br />
              Web:{" "}
              <a href="/" className="">
                www.erinahuganda.com
              </a>
            </address>
          </div>
          {!isDonatePage && <FormPart />}
        </div>

        <div className="nav-box row clearfix mt-5">
          <div className="inner col-md-9 col-sm-12 clearfix">
            <ul className="ulright">
              <li>
                <span>Follow Us</span>:
              </li>
              <li className="fab">
                <FontAwesomeIcon icon={faFacebookSquare} />
              </li>
              <li className="fab">
                <FontAwesomeIcon icon={faTwitterSquare} />
              </li>
              <li className="fab">
                <FontAwesomeIcon icon={faInstagram} />
              </li>
              <li className="fab">
                <FontAwesomeIcon icon={faLinkedin} />
              </li>
            </ul>
          </div>
          <div className="donate-link col-md-3">
            <a href="/donate" className="btn btn-primary mt-3 mx-2">
              <span className="btn-title">Donate Now</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UpperFooter;
