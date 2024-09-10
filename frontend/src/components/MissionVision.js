// src/components/MissionVision.js
import React from "react";
import "../styles/style.css";

const MissionVision = () => {
  return (
    <section className="container-fluid mission-vision">
      <div className="container">
        <div className="row mission">
          <div className="col-md-6 mv-det">
            <h1>Our Mission</h1>
            <p>
              To provide support and empowerment through education, healthcare,
              sports development, and economic empowerment. We focus on
              marginalized groups, including orphans, widows, people with
              disabilities, and talented youth.
            </p>
          </div>
          <div className="col-md-6 mv-img">
            <img src="/assets/images/misin.png" alt="Our Mission" />
          </div>
        </div>
        <div className="row vision">
          <div className="col-md-6 mv-img">
            <img src="/assets/images/vision.png" alt="Our Vision" />
          </div>
          <div className="col-md-6 mv-det">
            <h1>Our Vision</h1>
            <p>
              To empower vulnerable individuals and communities in Uganda to
              break the cycle of poverty and marginalization, fostering a just,
              equitable, and thriving society where all people have the
              opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
