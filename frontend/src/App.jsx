import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import kid_banner from "./Componets/Assets/banner_kids.png";
import men_banner from "./Componets/Assets/banner_mens.png";
import women_banner from "./Componets/Assets/banner_women.png";
import Footer from "./Componets/Footer/Footer";
import Navbar from "./Componets/Navbar/Navbar";
import Cart from "./Pages/Cart";
import LoginSignUp from "./Pages/LoginSignup";
import Product from "./Pages/Product";
import Shop from "./Pages/Shop";
import ShopCategories from "./Pages/ShopCategories";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/mens"
            element={<ShopCategories banner={men_banner} category="men" />}
          />
          <Route
            path="/womens"
            element={<ShopCategories banner={women_banner} category="women" />}
          />
          <Route
            path="/kids"
            element={<ShopCategories banner={kid_banner} category="kid" />}
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
