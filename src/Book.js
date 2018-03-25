// Note: This component must receive a 'bookshelves', (about the book:) 'coverStyle', 'title', 'authors' prop in its call

import React from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger';

class Book extends React.Component {
    state = {
        isOnShelf: 'currentlyReading',
    }

    render() {
        // console.log('Props', this.props)
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 140,
                        height: 200,
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
                    }}></div>
                    {/* 
                        TODO: The selected option of 'ShelfChanger' should be linked to the internal state of the book,
                        much like a form input controlled component.
                        
                        TODO: The position of the checkmark should match the Book component state
                        (idea: pass down this info to ShelfChanger as a prop?)
                    */}
                    <ShelfChanger bookshelves={this.props.bookshelves} onSelectShelf={this.updateShelf} />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(', ')}</div>
            </div>
        )
    }
}

export default Book