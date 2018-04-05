// TODO: add PropTypes

import React from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {

    updateShelf = (userOption) => {
        let bookMoved = this.props.book;
        BooksAPI.update(bookMoved, userOption).then((response) => {
            console.log(response);
            this.props.onBookMove(bookMoved);
            console.log('onBookMove() has been called');
        }
        )
    }

    render() {
        // console.log('Book.js --> Props', this.props)
        let authors = this.props.book.authors;
        let imageLinks = this.props.book.imageLinks;

        let shelf = this.props.book.shelf;
        if (shelf === undefined) {
            shelf = "none";
        }

        return (
            <div className="book">
                <div className="book-top">
                    {imageLinks !== undefined && (
                        <div className="book-cover" style={{
                            width: 140,
                            height: 200,
                            backgroundImage: `url(${imageLinks.thumbnail})`,
                        }}></div>
                    )}
                    <ShelfChanger
                        bookshelves={this.props.bookshelves}
                        shelf={shelf}
                        onSelectShelf={(shelfSelected) => this.updateShelf(shelfSelected)}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                {authors !== undefined && (
                    <div className="book-authors">{authors.join(', ')}</div>
                )}
            </div>
        )
    }
}

export default Book