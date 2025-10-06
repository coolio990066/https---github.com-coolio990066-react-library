import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './components/nav';
import React, { useEffect, useState } from 'react';
import './index.css';
import Footer from './components/footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/books';
import { books } from './data';
import BookInfo from './pages/bookinfo';
import Price from './components/ui/price';  
import Rating from './components/ui/rating';  
import Cart from './pages/cart';

function App() {
  const [cart, setCart] = React.useState([]);

  
  function addToCart(book) {
    setCart([...cart, {...book, quantity: 1}])
  }
  function changeQuantity(book, quantity) {
    setCart(cart.map(item => 
      item.id === book.id
        ? {
          ...item,
          quantity: +quantity
        } 
        : item
    )
  )
  }

  function removeItem(item) {
    setCart(cart.filter(book => book.id !== item.id))
  }

  function numberOfItemsInCart() {
    let counter = 0;
    cart.forEach(item => {
      counter += item.quantity;
    })
    return counter;
  }


  useEffect(() => {
    // console.log(cart);
  }, [cart]);
  return (
    <Router>
      <div className='App'>
        <Nav numberOfItemsInCart={numberOfItemsInCart} />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/books' exact render={() => <Books books={books} />} />
          <Route path='/books/:id' render={() => <BookInfo books={books} addToCart={addToCart} cart={cart}/>} />
          <Route path='/cart' render={() => <Cart books={books} cart={cart} changeQuantity={changeQuantity} removeItem={removeItem} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// const dupeItem = cart.find(item => +item.id === +book.id);
//     if(dupeItem) {
//     setCart(cart.map(item => {
//       if (+item.id === +dupeItem.id) {
//         return {
//           ...item,
//           quantity: item.quantity + 1
//         } 
//       }
//       else {
//         return item;
//       }
//     }))
//     }
//     else {
//       setCart([...cart, {...book, quantity: 1}])
//     }