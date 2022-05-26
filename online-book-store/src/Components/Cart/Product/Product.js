import React from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { CART_QTY,DEL_ITEM } from "../../../redux/actions/action";
//import { CART_QTY } from "../../../redux/actions/action";


export const Product = ({ book }) => {
  const dispatch = useDispatch();
  const changeQty = (qty, isbn) => {
    dispatch(CART_QTY(Number(qty), isbn));
  };
  const deleteitem = (isbn) => {
    dispatch(DEL_ITEM(isbn));
  };
  return (
    <>
      <div className="selected-books">
        <div className="img-container">
          <div className="product-book-img">
            <img src={book.thumbnailUrl} alt="book" />
          </div>
        </div>
        <div className="book-details">
          <div className="book-title">Title : {book.title}</div>
          <div className="book-qty">
            <select onChange={(e) => changeQty(e.target.value, book.isbn)} value={book.qty}>
              {[...Array(book.instock).keys()].map((x) => (
                <option key={x + 1}> {x + 1} </option>
              ))}
            </select>
          </div>
          <div className="book-price">Price : &#x20b9;{book.price}</div>
          <div className="book-total">Book-Total : {book.price} * {book.qty} = &#x20b9;{book.price * book.qty}</div>
          <button onClick={() => deleteitem(book.isbn)}>Delete Product</button>
        </div>
      </div>
    </>
  );
};