import React, { useState } from "react";
import "./AddProduct.css";
import upload_area from "../../assets/upload_area.svg";

export default function AddProduct() {
  const [image, setImage] = useState(false);
  const [productDetail, setProductDetail] = useState({
    name: "",
    image: "",
    category: "men",
    old_price: "",
    new_price: "",
    description: "",
    tag: "Modern , Latest",
    information: "",
  });

  const changeHandler = (e) => {
    setProductDetail({ ...productDetail, [e.target.name]: e.target.value });
  };

  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const submitHandler = async () => {
    console.log(productDetail);
    let responData;
    let product = productDetail;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: { accept: "application/json" },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responData = data;
      });

    if (responData.success) {
      product.image = responData.image_url;
      console.log(product);

      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success
            ? alert("Success add product")
            : alert("Failed add product");
        });
    }
  };

  return (
    <div className="add-product">
      <h1 style={{ textAlign: "center" }}>ADD FORM PRODUCTS</h1>
      <hr style={{ width: "100%", marginTop: "20px", marginBottom: "50px" }} />
      <div className="addproduct-item-field">
        <p>Product title</p>
        <input
          value={productDetail.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-item-field">
          <p>Price</p>
          <input
            value={productDetail.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-item-field">
          <p>Offer Price</p>
          <input
            value={productDetail.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-item-field">
        <p>Product description</p>
        <input
          value={productDetail.description}
          onChange={changeHandler}
          type="text"
          name="description"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-item-field">
        <p>Product information</p>
        <input
          value={productDetail.information}
          onChange={changeHandler}
          type="text"
          name="information"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-item-field">
          <p>Product Category</p>
          <select
            value={productDetail.category}
            onChange={changeHandler}
            name="category"
            className="add-product-selector"
          >
            <option value="men">Mens</option>
            <option value="women">Womens</option>
            <option value="kid">Kids</option>
          </select>
        </div>
        <div className="addproduct-item-field">
          <p>Product Tags</p>
          <select
            value={productDetail.tag}
            onChange={changeHandler}
            name="tag"
            className="add-product-selector"
          >
            <option value="Modern , Latest">Modern , Latest</option>
            <option value="Traditional, Old">traditional, old</option>
          </select>
        </div>
      </div>
      <div className="addproduct-item-field">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : upload_area}
            className="add-product-thumbnail-img"
            alt=""
          />
        </label>
        <input onChange={imageHandler} type="file" id="file-input" hidden />
      </div>
      <button onClick={() => submitHandler()} className="addproduct-btn">
        ADD
      </button>
    </div>
  );
}
