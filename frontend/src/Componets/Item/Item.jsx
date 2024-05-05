import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export default function Item(props) {
  return (
    <div className="item">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image}></img>
      </Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          Rp {props.new_price.toLocaleString("id-ID")}
        </div>
        <div className="item-price-old">
          Rp {props.old_price.toLocaleString("id-ID")}
        </div>
      </div>
    </div>
  );
}
