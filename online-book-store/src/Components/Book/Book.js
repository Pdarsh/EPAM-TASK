import React from "react";
import "./Book.css";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
import { Link } from "react-router-dom";
const noImgUrl =
  "http://accordelectrotechnics.in/img/product/no-preview/no-preview.png";

export const Book = ({ book }) => {
  const dispatch = useDispatch();

  const addToCart = (book) => {
    dispatch(ADD(book));
  };
  return (
    <>
      <div className="card">
        <div className="img-container">
          {book.thumbnailUrl ? (
            <img className="book-img" src={book.thumbnailUrl} alt="book" />
          ) : (
            <img className="book-img" src={noImgUrl} alt="book" />
          )}
          
        </div>
        <h2 className="title"><Link to={`/books/${book.isbn}`}>{book.title}</Link></h2>
        <h3 className="price"> &#x20b9; {book.price}</h3>
        <Link to="/cart"><button onClick={() => addToCart(book)}>Buy Now</button></Link>
        <button onClick={() => addToCart(book)}>Add To Cart</button>
      </div>
    </>
  );
};
