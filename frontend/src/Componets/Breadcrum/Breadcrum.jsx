import React from "react";
import arrow_icon from "../Assets/breadcrum_arrow.png";
import "./Breadcrum.css";

export default function Breadcrum(props) {
  const { product } = props;

  return (
    <div className="breadcrum">
      HOME <img src={arrow_icon} alt="arrow" /> SHOP
      <img src={arrow_icon} alt="" /> {product.category}
      <img src={arrow_icon} /> {product.name}
    </div>
  );
}
