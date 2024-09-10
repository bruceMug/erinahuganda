// src/components/AboutUs.js
import React from "react";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faSearchDollar,
  faDonate,
  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <div id="about-us-section" className="about-us container-fluid">
      <div className="container">
        <div className="row natur-row no-margin w-100">
          <div className="text-part col-md-6">
            <h2>Who are we!</h2>
            <p>
              Erinah Uganda is a non-profit organization dedicated to serving
              vulnerable individuals and communities in Uganda.{" "}
            </p>
            <p>
              {" "}
              Our goal is to create a positive impact in our society, fostering
              a brighter future for all. Through donations, partnerships, and
              community engagement, we strive to make a sustainable difference
              in the lives of those we serve in the world. Lets all unite and
              show humanity in our communities.
            </p>
          </div>
          <div className="image-part col-md-6">
            <div className="about-quick-box row">
              <div className="col-md-6">
                <div className="about-qcard">
                  <FontAwesomeIcon icon={faUser} size="2x" />
                  <p>Volunteer</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-qcard">
                  <FontAwesomeIcon
                    icon={faSearchDollar}
                    className="red"
                    size="2x"
                  />
                  <p>Fundraise</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-qcard">
                  <FontAwesomeIcon icon={faDonate} className="yell" size="2x" />
                  <p>Donate</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="about-qcard">
                  <FontAwesomeIcon
                    icon={faHandsHelping}
                    className="blu"
                    size="2x"
                  />
                  <p>Help Someone</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
