import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./PlaceOlder.css";
import midtransClient from "midtrans-client";

export default function PlaceOlder() {
  const { getTotalCartAmount, addCheckout } = useContext(ShopContext);

  const handleProceedToPayments = async () => {
    try {
      const totalAmount = getTotalCartAmount();
      const data = await addCheckout(totalAmount);
      if (data) {
        const token = data.token;
        window.snap.pay(token);
      } else {
        console.error("Checkout data not returned");
      }
    } catch (error) {
      console.log("Error during checkout:", error);
    }
  };

  return (
    <div className="place-order">
      <div className="place-order-container">
        <div className="cart-items-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cart-items-total-items">
              <p>Subtotal</p>
              <p>Rp.{getTotalCartAmount().toLocaleString("id-ID")}</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <p>Shiping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cart-items-total-items">
              <h3>Total</h3>
              <h3>Rp.{getTotalCartAmount().toLocaleString("id-ID")}</h3>
            </div>
          </div>
          <button onClick={handleProceedToPayments}>PROCED TO PAYMENTS!</button>
        </div>
      </div>
    </div>
  );
}
