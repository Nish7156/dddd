import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import { BiMapPin } from "react-icons/bi";
import { FaPhone, FaPaperPlane } from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="ftco-footer img"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
    >
      <div className="overlay" />
      <div className="container-xl">
        <div className="row mb-5 justify-content-between">
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo d-flex">
                <Link className="navbar-brand" href="/">
                  <img
                    style={{ height: "50px", width: "70px" }}
                    src={"/dreamDay.jpeg"}
                    alt="Dream Day"
                  />
                </Link>
              </h2>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia.
              </p>
              <ul
                className="ftco-footer-social mt-4"
                style={{ gap: "10px", display: "flex" }}
              >
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaTwitter />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <FaFacebook />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Services</h2>
              <div className="d-md-flex">
                <ul className="list-unstyled w-100">
                  <li>
                    <a href="#">
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Financial Planning
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Investments Management
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Business Loan
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="ion ion-ios-arrow-round-forward me-2" />
                      Taxes Consulting
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg"></div>
          <div className="col-md-6 col-lg">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Have a Questions?</h2>
              <div className="block-23 mb-3">
                <ul>
                  <li>
                    <BiMapPin style={{ marginRight: "10px" }} />
                    <span className="text">
                      203 Fake St. Mountain View, San Francisco, California, USA
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      <FaPhone style={{ marginRight: "10px" }} />
                      <span className="text">+2 392 3929 210</span>
                    </a>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid px-0 py-5 bg-darken">
        <div className="container-xl">
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0" style={{ fontSize: 14 }}>
                Copyright © All rights reserved | This template is made with
                {"{"}" "{"}"}
                <i className="fa fa-heart color-danger" aria-hidden="true" /> by
                {"{"}" "{"}"}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  rel="nofollow noopener"
                >
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
