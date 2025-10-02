import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Nav from './components/nav';
import React from 'react';
import './index.css';
import Footer from './components/footer';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Books from './pages/books';
import { books } from './data';
import BookInfo from './pages/bookinfo';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/books' exact render={() => <Books books={books} />} />
          <Route path='/books/1' render={() => <BookInfo books={books} />} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

