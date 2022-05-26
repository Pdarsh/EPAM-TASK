import React from "react";
import "./MyOrders.css";
import Navbar from "../Navbar/Navbar";

export const MyOrders = () => {
  const orders = JSON.parse(localStorage.getItem("Cart"));

  if(!orders){
    return(
      <>
      <Navbar sideHeading={" | My Orders"} />
      You have No Orders
      </>
    )
  }

  return (
    <>
      <Navbar sideHeading={" | My Orders"} />
      <div className="my-orders-container">
        {orders.map((order) => {
          return (
            <>
              <div className="order-info">
                <div className="order-date">OrderDate : </div>
                <div className="order-staus">Status : Delivered</div>
              </div>
              <div className="order-detail">
                <div className="orders">
                  <div className="order-img">
                    <img src={order.thumbnailUrl} alt="book-img" />
                  </div>
                  <div className="book-detail">
                    <h1>Title : {order.title}</h1>
                    <h2>Authors :{order.authors.join(",")}</h2>
                    <h3>
                      Total-Price : {order.price} * {order.qty} = &#x20b9;
                      {order.price * order.qty}
                    </h3>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
