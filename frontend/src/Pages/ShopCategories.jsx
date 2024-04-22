import React, { useContext } from "react";
import "./CSS/ShopCategories.css";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Componets/Assets/dropdown_icon.png";
import Item from "../Componets/Item/Item";

export default function ShopCategories(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner}></img>
      <div className="shopcategory-indexsort">
        <p>
          <span>Shwoing 1 - 12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon}></img>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore more</div>
    </div>
  );
}
