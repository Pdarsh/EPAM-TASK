import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import Navbar from "../Navbar/Navbar"
import { Book } from "../Book/Book";

const baseURL = "http://localhost:4000/books";

export const Home = () => {
  const [noOfElement, setNoOfElements] = useState(20);
  const [books, setBooks] = useState([]);
  const loadBooks = books.slice(0, noOfElement);
  const loadMore = () => {
    setNoOfElements(noOfElement + noOfElement);
  };

  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  
  window.addEventListener('scroll', toggleVisible);
  useEffect(() => {
    axios.get(baseURL).then((response) => {
      //console.log(response)
      setBooks(response.data);
    });
  }, []);

  if (!books) return null;

  return (
    <>
    <Navbar />
      <div className="cardlist">
        {loadBooks.map((book) => {
          return <Book book={book} key={book.isbn} />;
        })}
      </div>
      <div className="load-more">
        <button onClick={() => loadMore()}>Load more</button>
      </div>
      <div className="scroll-top" style={{display: visible ? 'inline' : 'none'}}>
        <button onClick={() => scrollToTop()}>^</button>
      </div>
    </>
  );
};
