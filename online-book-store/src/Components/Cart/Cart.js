import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { Product } from "./Product/Product";
import Navbar from "../Navbar/Navbar";
import { useDispatch } from "react-redux";
import { EMPTY_CART } from "../../redux/actions/action";
import { AddressForm } from "../AddressForm/AddressForm";

export const Cart = () => {
  const getData = useSelector((state) => state.cartreducer);
  console.log(getData.carts);
  let totalprice = 0;
  getData.carts.forEach((element) => {
    totalprice += element.price * element.qty;
  });

  const dispatch = useDispatch();

  const emptyCart = () => {
    dispatch(EMPTY_CART());
  };

  const checkout = () => {
    const stringifyData = JSON.stringify(getData.carts);
    localStorage.setItem('Cart', stringifyData);
    alert("Order Placed Successfully")
    emptyCart()
  }

  const clearCart = () => {
    alert("Cart Cleared")
    emptyCart()
  }


  if (getData.carts.length === 0) {
    return (
      <div>
        <Navbar sideHeading={" | Cart"} />
        YOUR CART IS EMPTY
      </div>
    );
  } else {
    return (
      <>
        <Navbar />
        <div className="cart-container">
          <div className="address">
            <h2 id="address-heading">Address Form</h2>
            <AddressForm />
          </div>
          <div className="shopping-detail">
            <h2 id="h2">Shopping Bag</h2>
            <div className="shopping-bag">
              {getData.carts.map((book) => {
                return <Product book={book} key={book.isbn} />;
              })}
            </div>
            <div className="payment">
              <h2>Payment Info</h2>
              <table>
                <tbody>
                <tr>
                  <td>Sub-Total :</td>
                  <td>&#x20b9;{totalprice}</td>
                </tr>
                <tr>
                  <td>Tax :</td>
                  <td>&#x20b9;{Math.floor(totalprice * 0.05)}</td>
                </tr>
                <tr>
                  <td>Shipping :</td>
                  <td>&#x20b9;20</td>
                </tr>
                <tr className="top row">
                  <td>Total :</td>
                  <td>
                    &#x20b9;{totalprice + Math.floor(totalprice * 0.05) + 20}
                  </td>
                </tr>
                </tbody>
              </table>
            </div>
            <button className="btn" onClick={() => checkout()}>Checkout</button>
            <button className="btn" onClick={() => clearCart()}>Cancel</button>
          </div>
        </div>
      </>
    );
  }
};
