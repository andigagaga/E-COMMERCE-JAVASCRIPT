import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from "../../assets/cross_icon.png";

export default function ListProduct() {
  const [allProducts, setAllProducts] = useState([]);

  const getAllProducts = async () => {
    await fetch("http://localhost:4000/getallproducts").then((res) => {
      res.json().then((data) => {
        setAllProducts(data);
      });
    });
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await getAllProducts();
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  console.log("allProducts", allProducts);

  return (
    <div className="list-product">
      <h1>ALL PRODUCTS LIST</h1>
      <hr style={{ width: "100%" }} />
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((item, index) => {
          return (
            <>
              <div
                key={index}
                className="listproduct-format-main listproduct-format"
              >
                <img className="listproduct-product-icon" src={item.image} />
                <p style={{ color: "green" }}>{item.name}</p>
                <p style={{ textDecoration: "line-through", color: "#ff5722" }}>
                  Rp.{item.old_price}
                </p>
                <p>Rp.{item.new_price}</p>
                <p>{item.category}</p>
                <img
                  style={{ cursor: "pointer" }}
                  onClick={() => removeProduct(item.id)}
                  className="listproduct-remove-icon"
                  src={cross_icon}
                />
              </div>
              <hr />
            </>
          );
        })}
      </div>
    </div>
  );
}
