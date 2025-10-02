import React, {useState} from 'react'
import Book from '../components/ui/book'


const Books = ({ books: initialBooks }) => {
    const [books, setBooks] = React.useState(initialBooks);
    function filterBooks(filter) {
        console.log(filter);
        if (filter === "LOW__TO__HIGH") {
            setBooks(books.slice().sort((a, b) => (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)));
    }
        if (filter === "HIGH__TO__LOW") {
            setBooks(books.slice().sort((a, b) => (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)));
    }
        if (filter === "RATING") {
            setBooks(books.slice().sort((a, b) => b.rating - a.rating));
    }
}
  return (
    <div className="books__body">
        <div className="books__main">
            <section>
                <div className="books__container">
                    <div className="row">
                        <div className="books__header">
                            <h2 className="section__title books__header--title">All Books</h2>
                            <select id="filter" defaultValue="DEFAULT" onChange={(event) => filterBooks(event.target.value)}>
                                <option value="default" disabled>Sort</option>
                                <option value="LOW__TO__HIGH">Low to High</option>
                                <option value="HIGH__TO__LOW">High to Low</option>
                                <option value="RATING">Rating</option>
                            </select>
                        </div>
                        <div className="books">
                            {
                                books.map((book) => <Book book={book} key={book.id} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
export default Books

