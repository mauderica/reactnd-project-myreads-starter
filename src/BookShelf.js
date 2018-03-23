// Note: This component must receive a 'title' prop in its call

import React from 'react'
import Book from './Book.js'

class BookShelf extends React.Component {
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <li>
                        </li>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf