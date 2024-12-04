import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const MenuItems = [
    {
      name: "Home",
      link: "/",
    },
  ];
  return (
    <nav className="navbar navbar-expand-lg  ftco-navbar-light">
      <div className="container-xl">
        <Link className="navbar-brand" href="/">
          <img
            style={{ height: "50px", width: "70px" }}
            src={"/dreamDay.jpeg"}
            alt="Dream Day"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fa fa-bars" /> Menu
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {MenuItems.map((item, index) => (
              <li className="nav-item">
                <a className="nav-link active" href={item.link}>
                  Home
                </a>
              </li>
            ))}

            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginRight: "10px",
              }}
            >
              <Link to="/profile">
                <button className=" btn nav-link btn-secondary">
                  Register
                </button>
              </Link>
            </li>
            <li
              className=""
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link to="/login">
                <button className="btn nav-link btn-primary">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
