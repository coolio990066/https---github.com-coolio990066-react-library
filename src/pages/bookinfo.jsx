import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Price from '../components/ui/price'
import Rating from '../components/ui/rating'
import book from '../components/ui/book'



const BookInfo = ({ books }) => {
   
  return (
    <div id="books__body">
        <main id= 'books__main'>

            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                        <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                        <Link to='/books'>
                         <h2 className="book__selected--title--top">Books</h2>
                        </Link>
                    </div>
                    <div className="book__selected">
                        <figure className="book__selected--figure">
                            <img src='https://m.media-amazon.com/images/I/61mIq2iJUXL._AC_UF1000,1000_QL80_.jpg' alt="" className="book__selected--img" />
                        </figure>
                        <div className="book__selected--description">
                            <h2 className="book__selected--title">
                                <Rating rating='4.5' />
                            </h2>
                            </div>
                            <div className="book__selected--price">
                                <Price originalPrice={book.originalPrice} salePrice={book.salePrice}
                                />
                            </div>
                            <div className="book__summary">
                                <div className="book__summary--title">
                                    Summary
                                </div>
                                <p className="book__summary--para">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
                                </p>
                            </div>
                            <button className="btn">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
  )
}

export default BookInfo

