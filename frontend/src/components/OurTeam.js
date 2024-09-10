// src/components/OurTeam.js
import React from "react";
import "../styles/style.css";

const OurTeam = () => {
  return (
    <div className="site-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6 text-center mb-5">
            <h2 className="text-cursive">Our Core Team</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="post-entry-1 h-100 bg-white text-center">
              <div className="d-inline-block">
                <img
                  src="assets/images/team/person_1.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>John Doe</h2>
                <p>
                  Visionary leader with a passion for social impact. <br />
                  Committed to empowering marginalized communities in Uganda.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 mb-5">
            <div className="post-entry-1 h-100 bg-white text-center">
              <div className="d-inline-block">
                <img
                  src="assets/images/team/person_2.jpg"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="post-entry-1-contents">
                <span className="meta">Founder</span>
                <h2>Jane Doe</h2>
                <p>
                  Driven by a lifelong mission to drive positive change. <br />
                  Innovative thinker dedicated to sustainable development
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
