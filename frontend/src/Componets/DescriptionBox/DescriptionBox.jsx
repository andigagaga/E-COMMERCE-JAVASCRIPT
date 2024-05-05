import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox(props) {
  const { product } = props;
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Information</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>{product?.information}</p>
      </div>
    </div>
  );
}
