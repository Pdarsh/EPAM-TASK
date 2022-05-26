import React from 'react';
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../redux/actions/action";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import {useParams} from "react-router-dom"
import './BookDetail.css'

const baseURL = "http://localhost:4000/books";
const noImgUrl =
  "http://accordelectrotechnics.in/img/product/no-preview/no-preview.png";



export const BookDetail = () => {
    const {bookisbn} = useParams()
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get(baseURL).then((response) => {
          setBooks(response.data);
        });
      }, []);
    const book = books.find(prod => prod.isbn === bookisbn)
    const dispatch = useDispatch();

    const addToCart = (book) => {
      dispatch(ADD(book));
    };
    if(book){
        return(
            <>
            <Navbar sideHeading={` | ${book.title}`}/>
            <div className='book-detail-container'>
            <div className='book-img-container'>
            {book.thumbnailUrl ? (
            <img className="book-detail-img" src={book.thumbnailUrl} alt="book" />
          ) : (
            <img className="book-detail-img" src={noImgUrl} alt="book" />
          )}
            </div>
            <div className='book-properties'>
            <h2>Title : {book.title}</h2>
            <h3>Price : &#x20b9;{book.price}</h3>
            <h3>Authors : {book.authors.join(",")}</h3>
            <h3>Pages : {book.pageCount}</h3>
            <h3>ISBN : {book.isbn}</h3>
            <button onClick={() => addToCart(book)}>Add to Cart</button>
            <Link to="/cart"><button onClick={() => addToCart(book)}>Buy Now</button></Link>
            {book.longDescription ? <p className='book-description'>{book.longDescription}</p> :<p className='book-description'> No Description Available</p>}
             
            </div>
            </div>
            </>
        )
    }

}

