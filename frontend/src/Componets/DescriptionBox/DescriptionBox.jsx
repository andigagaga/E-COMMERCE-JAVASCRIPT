import React from "react";
import "./DescriptionBox.css";

export default function DescriptionBox() {
  return (
    <div className="description-box">
      <div className="description-box-navigator">
        <div className="description-box-nav-box">Description</div>
        <div className="description-box-nav-box fade">Reviews (122)</div>
      </div>
      <div className="description-box-description">
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum
          dolor sit amet consectetur adipisicing elit. Dignissimos lorem ipsum
          dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet
          consectetur adipisicing elit.
        </p>
        <p>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>
  );
}
