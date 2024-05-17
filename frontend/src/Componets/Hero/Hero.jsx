import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/Hand.json";
import arrow_icon from "../Assets/Arrow.json";
import hero_image from "../Assets/Hero.json";
import Lottie from "lottie-react";

export default function Hero({ scrollToNewsCollections }) {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <Lottie className="hero-icon" animationData={hand_icon} />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={scrollToNewsCollections}>
          <div>New Collections</div>
          <Lottie className="arrow-icon" animationData={arrow_icon} />
        </div>
      </div>
      <div className="hero-right">
        <Lottie animationData={hero_image} />
      </div>
    </div>
  );
}
