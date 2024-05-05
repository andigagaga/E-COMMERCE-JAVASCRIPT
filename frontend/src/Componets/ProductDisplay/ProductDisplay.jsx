import React, { useContext } from "react";
import start_icon from "../Assets/star_icon.png";
import start_dull_icon from "../Assets/star_dull_icon.png";
import "./ProductDisplay.css";
import { ShopContext } from "../../Context/ShopContext";

export default function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
          <img src={product?.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <img
            className="productdisplay-main-img"
            src={product?.image}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product?.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_icon} alt="" />
          <img src={start_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-price">
          <div className="productdisplay-right-price-old">
            Rp {product?.old_price.toLocaleString("id-ID")}
          </div>
          <div className="productdisplay-right-price-new">
            Rp {product?.new_price.toLocaleString("id-ID")}
          </div>
        </div>
        <div className="productdisplay-right-description">
          <span>Description</span> : {product?.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product?.id);
          }}
        >
          Add To Cart
        </button>
        <p className="productdisplay-right-category">
          <span>Cetegory : </span>
          {product?.category} , T-Shirt, Crop-Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags : </span>
          {product?.tag}
        </p>
      </div>
    </div>
  );
}
