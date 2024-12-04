import React from "react";
import "./navItem.scss";

function NavItem({ label }) {
  return <button className="nav-item">{label}</button>;
}

export default NavItem;
