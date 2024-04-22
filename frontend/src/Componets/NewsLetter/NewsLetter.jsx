import React from "react";
import "./NewsLetter.css";

export default function NewsLetter() {
  return (
    <div className="newsletter">
      <h1>Get Exclucive Offers On Your Email</h1>
      <p>Subsribe To Our newsletter and stay updated</p>
      <div>
        <input type="email" placeholder="Your Email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
}
