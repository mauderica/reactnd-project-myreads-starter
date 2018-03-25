// TODO: add PropTypes
// TODO: (later) destructuring assignment

import React from 'react'
// import { Link } from 'react-router-dom'
import Book from './Book'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends React.Component {
    state = {
        query: '',
    }

    updateQuery = (userInput) => {
        this.setState({ query: userInput.trim() })
    }

    render() {
        let showingBooks;
        if (this.state.query) {
            const match = new RegExp(escapeRegExp(this.state.query), 'i')
            showingBooks = this.props.books.filter((book) =>
                (match.test(book.title) || match.test(book.authors))
            );
        } else {
            showingBooks = []; // this.props.books
        }

        showingBooks.sort(sortBy('title'));

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <a className="close-search" onClick={() => this.props.onNavigateToLibrary()}>Close</a>
                    <div className="search-books-input-wrapper">
                        {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book, index) => (
                            <li key={index}>
                                <Book book={book} bookshelves={this.props.bookshelves} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks