// TODO: add PropTypes

import React from 'react'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger';

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
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 140,
                        height: 200,
                        backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`,
                    }}></div>
                    <ShelfChanger
                        bookshelves={this.props.bookshelves}
                        shelf={this.props.book.shelf}
                        onSelectShelf={(shelfSelected) => this.updateShelf(shelfSelected)}
                    />
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors.join(', ')}</div>
            </div>
        )
    }
}

export default Book