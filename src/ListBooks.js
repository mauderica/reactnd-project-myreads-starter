// TODO: add PropTypes

import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf';

class ListBooks extends React.Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookshelves.map((bookshelf, index) => (
                            <BookShelf
                                key={index}
                                title={bookshelf.title}
                                optionValue={bookshelf.optionValue}
                                bookshelves={this.props.bookshelves}
                                books={this.props.books}
                                onBookMove={(bookMoved) => this.props.onBookMove(bookMoved)}
                            />
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default ListBooks