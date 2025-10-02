import React from 'react'
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="landing">
      <header>
        <div className="header__container">
            <div className="header__description">
                <h1>Americas most awarded online Library platform</h1>
                <h2>Find you dream book with <span className="purple">Library</span></h2>
                <Link to="#features">
                    <button className="btn">Browse books</button>
                </Link>
            </div>
            <figure className="header__image--wrapper">
                <img src={UndrawBooks} alt="Books illustration" />
            </figure>
        </div>
      </header>
    </section>
  )
}
