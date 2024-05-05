import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import Cart from "../../assets/Cart.json";
import list_product from "../../assets/list_product";
import Lottie from "lottie-react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <Lottie
            className="nav-logo-icon"
            style={{ width: "50px" }}
            animationData={Cart}
          />
          <p>Add Product</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <Lottie
            className="nav-logo-icon"
            style={{ width: "50px" }}
            animationData={list_product}
          />
          <p>Product List</p>
        </div>
      </Link>
    </div>
  );
}
