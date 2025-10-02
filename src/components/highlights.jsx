import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import Highlight from './ui/highlight'

const Highlights = () => {
  return (
    <section id="highlights">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    Why choose <span className="purple">Library</span>
                </h2>
                <div className="highlight__wrapper">
                    <Highlight 
                    icon={<FontAwesomeIcon icon="bolt" />}
                    title="Fast and Reliable"
                    paragraph="Get your books delivered at lightning speed with our efficient and reliable service."
                    />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="book-open" />}
                    title="Wide Selection"
                    paragraph="Explore a vast collection of books across various genres and categories."
                    />
                    <Highlight 
                    icon={<FontAwesomeIcon icon="tags" />}
                    title="Affordable Prices"
                    paragraph="Enjoy competitive pricing and great deals on your favorite books."
                    />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Highlights;