// Note: This component must receive a 'bookshelves' prop in its call
// TODO: add PropTypes

import React from 'react'
import BookShelf from './BookShelf';

class ListBooks extends React.Component {
    render() {
        console.log('Props', this.props)
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {this.props.bookshelves.map((bookshelf, index) => (
                            <BookShelf key={index} title={bookshelf.title} bookshelves={this.props.bookshelves}/>
                        ))}
                    </div>
                </div>
                <div className="open-search">
                    <a onClick={() => this.props.onNavigateToSearch()}>Add a book</a>
                </div>
            </div>
        )
    }
}

export default ListBooks