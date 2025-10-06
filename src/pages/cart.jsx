import React, { useEffect, useState } from "react";
import EmptyCart from "../assets/empty_cart.svg";
import { Link } from "react-router-dom";

const Cart = ({ cart, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price += +(item.salePrice || item.originalPrice * item.quantity);
    });
    return price;
  };

  return (
    <div id="books__body">
      <div id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="cart__title">Cart</h2>
            </div>
            <div className="cart">
              <div className="cart__header">
                <span className="cart__book">Book</span>
                <span className="cart__quantity">Quantity</span>
                <span className="cart__total">Total</span>
              </div>
              <div className="cart__body">
                {cart.map((book) => {
                  return (
                    <div className="cart__item" key={book.id}>
                      <div className="cart__book">
                        <img
                          src={book.url}
                          className="cart__book--img"
                          alt=""
                        />
                        <div className="cart__book--info">
                          <span className="cart__book--title">
                            {book.title}
                          </span>
                          <span className="cart__book--price">
                            ${(book.salePrice || book.originalPrice).toFixed(2)}
                          </span>
                          <button
                            className="cart__book--remove"
                            onClick={() => removeItem(book)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="cart__quantity">
                        <input
                          type="number"
                          min={0}
                          max={99}
                          value={book.quantity}
                          className="cart__input"
                          onChange={(e) => changeQuantity(book, e.target.value)}
                        />
                      </div>
                      <div className="cart__total">
                        $
                        {(
                          (book.salePrice || book.originalPrice) * book.quantity
                        ).toFixed(2)}
                      </div>
                    </div>
                  );
                })}
              </div>
              {
                cart.length === 0 && <div className="cart__empty">
                <img src={EmptyCart} alt="" className="cart__empty--img" />
                <h2>Your cart is empty</h2>
                <Link to="/books">
                  <button className="btn">Browse Books</button>
                </Link>
              </div>
              }
              
            </div>
            {cart.length > 0 && <div className="total">
              <div className="total__item total__sub-total">
                <span>Subtotal</span>
                <span>${(total() * 0.9).toFixed(2)}</span>
              </div>
              <div className="total__item total__tax">
                <span>Tax</span>
                <span>${(total() * 0.1).toFixed(2)}</span>
              </div>
              <div className="total__item total__price">
                <span>Total</span>
                <span>${total().toFixed(2)}</span>
              </div>
              <button
                className="btn btn__checkout no-cursor"
                onClick={() =>
                  alert("This is a demo. No payment will be processed.")
                }
              >
                Proceed to Checkout
              </button>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

// export default Cart

//                                     <div className="cart__book--info">
//                                         <span className="cart__book--title">
//                                             Crack the Coding Interview
//                                             </span>
//                                         <span className="cart__book--price">
//                                             $14.95
//                                             </span>
//                                             <button className="cart__book--remove">
//                                                 Remove
//                                             </button>
//                                     </div>
//                                 </div>
//                                 <div className="cart__quantity">
//                                     <input type="number" min={0} max={99} className="cart__input"/>
//                                 </div>
//                                 <div className="cart__total">
//                                     $14.95
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="total">
//                         <div className="total__item total__sub-total">
//                             <span>Subtotal</span>
//                             <span>$14.95</span>
//                         </div>
//                         <div className="total__item total__tax">
//                             <span>Tax</span>
//                             <span>$1.50</span>
//                         </div>
//                         <div className="total__item total__price">
//                             <span>Total</span>
//                             <span>$16.45</span>
//                         </div>
//                         <button className="btn btn__checkout no-cursor"
//                         onClick={() => alert("This is a demo. No payment will be processed.")}>
//                             Proceed to Checkout
//                         </button>
//                 </div>
//             </div>
//         </div>
//     </div>
//     </div>
//   )
// }
