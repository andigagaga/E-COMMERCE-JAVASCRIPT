import Lottie from "lottie-react";
import React from "react";
import logo from "../Assets/LogoShop.json";
import instagram_icon from "../Assets/instagram_icon.png";
import pintester_icon from "../Assets/pintester_icon.png";
import whatsapp_icon from "../Assets/whatsapp_icon.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-logo">
        <Lottie className="footer-logo-icon" animationData={logo} />
        {/* <img src={footer_logo}></img> */}
        <p>SHOOPER</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon}></img>
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon}></img>
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon}></img>
        </div>
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright © 2023. All rights reserved.</p>
      </div>
    </div>
  );
}
