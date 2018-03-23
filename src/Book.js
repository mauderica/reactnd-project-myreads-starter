// Note: This component must receive a 'bookshelves', (about the book:) 'style', 'title', 'authors' prop in its call

import React from 'react'
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
                    <div className="book-cover" style={this.props.style}></div>
                    <ShelfChanger bookshelves={this.props.bookshelves}/>
                </div>
                <div className="book-title">{this.props.title}</div>
                <div className="book-authors">{this.props.authors}</div>
            </div>
        )
    }
}

export default Book