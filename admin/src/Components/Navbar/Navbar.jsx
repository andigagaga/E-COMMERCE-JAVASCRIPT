import React from "react";
import "./Navbar.css";
import navLogo from "../../assets/nav-logo.svg";
import navProfile from "../../assets/nav-profile.svg";

export default function Navbar() {
  return (
    <div className="navbar">
      <img src={navLogo} className="nav-logo" />
      <img src={navProfile} className="nav-profile" />
    </div>
  );
}
