import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Rating from "./rating";
import Price from "./price";





const Book = ({ book }) => {
  const [img, setImg] = useState();

  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.url;
    image.onload = () => {
      setTimeout(() => {
        setImg(image);
      }, 300);
    };
  }, [book.url]);

  return (
    <div className="book">
      {img ? (
        <>
        <Link to={`/books/${book.id}`}>
        <figure className="book__img--wrapper">
          <img src={img.src} 
          alt="" 
          className="book__img" />
        </figure>
      </Link>
      <div className="book__title">
        <Link to={`/books/${book.id}`} className="book__title--link">
          {book.title}
        </Link>
      </div>
      <Rating rating={book.rating} />
      <Price originalPrice={book.originalPrice} salePrice={book.salePrice} 
      />
        </>
       ) : (
        <>
        <div className="book__img--skeleton"></div>
      <div className="book__title--skeleton"></div>
      <div className="book__rating--skeleton"></div>
      <div className="book__price--skeleton"></div>
      
        </>
      )
    }
    </div>
  );
};

export default Book;
