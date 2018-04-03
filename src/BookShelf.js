// TODO: add PropTypes

import React from 'react'
import Book from './Book';

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book, index) => (
                            book.shelf === this.props.optionValue &&
                            (<li key={index}>
                                <Book
                                    book={book}
                                    bookshelves={this.props.bookshelves}
                                    onBookMove={(bookMoved) => this.props.onBookMove(bookMoved)}
                                />
                            </li>)
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf