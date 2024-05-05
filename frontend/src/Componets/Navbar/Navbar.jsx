import Lottie from "lottie-react";
import React, { useContext, useRef, useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import cart_icon from "../Assets/Cart.json";
import logo from "../Assets/LogoShop.json";
import "./Navbar.css";

export default function Navbar() {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toogle = (e) => {
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle("open");
  };

  return (
    <div className="navbar">
      <div className="nav-logo">
        <Lottie className="nav-logo-icon" animationData={logo} />
        <p>Guswandi</p>
      </div>
      <IoIosArrowDropdown
        className="nav-dropdown-icon"
        onClick={dropdown_toogle}
      />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => setMenu("shop")}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              textShadow: "0 2px 5px #000",
            }}
            to={"/"}
          >
            Shop
          </Link>
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("mens")}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              textShadow: "0 2px 5px #000",
            }}
            to={"/mens"}
          >
            Mens
          </Link>
          {menu === "mens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("womens")}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              textShadow: "0 2px 5px #000",
            }}
            to={"/womens"}
          >
            Womens
          </Link>
          {menu === "womens" ? <hr /> : <></>}
        </li>
        <li onClick={() => setMenu("kids")}>
          <Link
            style={{
              textDecoration: "none",
              color: "white",
              textShadow: "0 2px 5px #000",
            }}
            to={"/kids"}
          >
            Kids
          </Link>
          {menu === "kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem("auth-token") ? (
          <button
            style={{
              background: "#FDA403",
              color: "red",
              border: "none",
              textShadow: "0 4px 8px white",
            }}
            onClick={() => {
              localStorage.removeItem("auth-token");
              window.location.replace("/");
            }}
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button
              style={{
                background: "green",
                color: "white",
                textShadow: "0 2px 5px #000",
              }}
            >
              Login
            </button>
          </Link>
        )}
        <Link to={"/cart"}>
          <Lottie className="nav-cart-icon" animationData={cart_icon} />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}
