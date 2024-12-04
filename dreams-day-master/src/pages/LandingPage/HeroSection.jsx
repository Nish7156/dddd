import React from "react";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="slider-hero">
      <div className="overlay" />
      <div className="hero-slider">
        <div className="item">
          <div className="work">
            <div
              className="img img2 d-flex align-items-center js-fullheight"
              style={{
                backgroundImage: "url(/images/bg_2.jpg)",
                // opacity: "0.9",
              }}
            >
              <div className="container-xl">
                <div className="row d-flex justify-content-center">
                  <div className="col-md-9" style={{ width: "82%" }}>
                    <div className="text text-center mt-lg-5">
                      <h1 className="mb-4">
                        Welcome to Dreams Day Corporation Limited– Where Your
                        Money Grows Safely and Smartly
                      </h1>
                      <p className="mb-4">
                        Unlock Exceptional Annual Returns – Beyond What Usually
                        Offer!
                      </p>
                      <p>
                        <Link to="/login" className="btn btn-white p-4 py-3">
                          Get Started{" "}
                          <span className="ion-ios-arrow-round-forward" />
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
