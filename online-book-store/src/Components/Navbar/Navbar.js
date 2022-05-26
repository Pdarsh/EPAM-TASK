import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const getData = useSelector((state) => state.cartreducer);
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //console.log(getData.carts.length);
  return (
    <>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <span>Online Book Store{props.sideHeading}</span>
          </NavLink>
        </div>
        <button
          className="ham"
          onClick={() => setIsNavExpanded(!isNavExpanded)}
        >
          =
        </button>
        <div
          className={
            isNavExpanded ? "navlink extended" : "navlink"
          }
        >
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/myorders">
            <span>My Orders</span>
          </NavLink>
          <NavLink to="/cart">
            <span className="cart">
              Cart<span className="cart-length">({getData.carts.length})</span>
            </span>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

Navbar.defaultProps = {
  sideHeading: "",
};

export default Navbar;
