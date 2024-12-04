import React from "react";
import { FaTwitter, FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

function TopBar() {
  return (
    <div className="top-wrap">
      <div className="container">
        <div className="row">
          <div className="col-md-3 d-flex align-items-center mb-2 mb-md-0">
            <div className="con">
              <p className="mb-0">
                <span className="fa fa-phone" /> Call Us: +2 392 3929 210
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-center mb-2 mb-md-0">
            <div className="con">
              <p className="mb-0">
                <span className="fa fa-map-o" /> Location: San Francisco,
                California, USA
              </p>
            </div>
          </div>
          <div className="col-md d-flex justify-content-start justify-content-md-end align-items-center">
            <p className="ftco-social d-flex">
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <FaGoogle />
              </a>
              <a
                href="#"
                className="d-flex align-items-center justify-content-center"
              >
                <FaInstagram />
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
