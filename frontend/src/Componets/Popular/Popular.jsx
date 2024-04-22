import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";

export default function Popular() {
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="pupular-item">
        {data_product.map((item, index) => {
          return (
            <Item
              key={index}
              id={item.id}
              nama={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}
