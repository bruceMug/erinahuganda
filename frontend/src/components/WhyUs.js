// src/components/WhyUs.js
import React from "react";
import "../styles/style.css";

const WhyUs = () => {
  return (
    <div
      className="bg-image overlay site-section"
      style={{ backgroundImage: `url("/assets/images/hero_1.jpg")` }}
    >
      <div className="container whychoose">
        <div className="row align-items-center m-3">
          <div className="col-12 text-center">
            <div className="row mb-5">
              <div className="col-md-7 mx-auto">
                <div className="heading-20219">
                  <h2 className="title text-white mb-4 text-cursive">
                    Why Us!
                  </h2>
                  <p className="text-white">
                    Transparent, Accountable, and Deeply Committed to Driving
                    Sustainable, Community-Powered Change.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div className="row p-4">
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>1</span>
                  </div>
                  <div className="mx-3">
                    <h3>Transparency</h3>
                    <p>
                      At Erinah Uganda, we are committed to full financial and
                      operational transparency, ensuring donors and partners can
                      trust that their contributions are making a meaningful
                      impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>2</span>
                  </div>
                  <div className="mx-3">
                    <h3>Accountability</h3>
                    <p>
                      We hold ourselves accountable to the communities we serve,
                      regularly monitoring and evaluating our programs.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>3</span>
                  </div>
                  <div className="mx-3">
                    <h3>Community Engagements</h3>
                    <p>
                      Our work is deeply rooted in the local communities we
                      serve. We collaborate closely with stakeholders, listen to
                      their needs, and empower them to be active participants.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-5">
                <div className="feature-29012 d-flex">
                  <div className="number mr-4">
                    <span>4</span>
                  </div>
                  <div className="mx-3">
                    <h3>Effectiveness</h3>
                    <p>
                      With a proven track record of successful programs, Erinah
                      Uganda has demonstrated our ability to efficiently and
                      effectively utilize resources to drive tangible
                      improvements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
