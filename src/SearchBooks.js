// TODO: add PropTypes
// TODO: (later) destructuring assignment

import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'
// import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends React.Component {
    state = {
        query: '',
        haveMatch: false,
        bookResults: [],
        searchTerms: [
            'ANDROID',
            'ART',
            'ARTIFICIAL INTELLIGENCE',
            'ASTRONOMY',
            'AUSTEN',
            'BASEBALL',
            'BASKETBALL',
            'BHAGAT',
            'BIOGRAPHY',
            'BRIEF',
            'BUSINESS',
            'CAMUS',
            'CERVANTES',
            'CHRISTIE',
            'CLASSICS',
            'COMICS',
            'COOK',
            'CRICKET',
            'CYCLING',
            'DESAI',
            'DESIGN',
            'DEVELOPMENT',
            'DIGITAL MARKETING',
            'DRAMA',
            'DRAWING',
            'DUMAS',
            'EDUCATION',
            'EVERYTHING',
            'FANTASY',
            'FILM',
            'FINANCE',
            'FIRST',
            'FITNESS',
            'FOOTBALL',
            'FUTURE',
            'GAMES',
            'GANDHI',
            'HOMER',
            'HORROR',
            'HUGO',
            'IBSEN',
            'JOURNEY',
            'KAFKA',
            'KING',
            'LAHIRI',
            'LARSSON',
            'LEARN',
            'LITERARY FICTION',
            'MAKE',
            'MANAGE',
            'MARQUEZ',
            'MONEY',
            'MYSTERY',
            'NEGOTIATE',
            'PAINTING',
            'PHILOSOPHY',
            'PHOTOGRAPHY',
            'POETRY',
            'PRODUCTION',
            'PROGRAMMING',
            'REACT',
            'REDUX',
            'RIVER',
            'ROBOTICS',
            'ROWLING',
            'SATIRE',
            'SCIENCE FICTION',
            'SHAKESPEARE',
            'SINGH',
            'SWIMMING',
            'TALE',
            'THRUN',
            'TIME',
            'TOLSTOY',
            'TRAVEL',
            'ULTIMATE',
            'VIRTUAL REALITY',
            'WEB DEVELOPMENT',
            'IOS'],
    }

    updateQuery = (userInput) => {
        this.setState({ query: userInput });
        this.checkMatch(userInput);
    }

    checkMatch = (userInput) => {
        let query = userInput.trim().toUpperCase();
        if (this.state.searchTerms.includes(query)) {
            console.log(`Calling search for "${query}".`)
            this.setState({ haveMatch: true });
            this.searchBooks(query);
        } else {
            this.clearBookResults();
        }
    }

    clearBookResults = () => {
        this.setState({ haveMatch: false });
        this.setState({ bookResults: [] });
    }

    searchBooks = (query) => {
        BooksAPI.search(query).then((bookResults) => {
            this.setState({ bookResults });
            // console.log('Book results: ', bookResults);
        })
    }

    render() {
        console.log('The bookResults in state are: ', this.state.bookResults);
        let showingBooks;
        if (this.state.haveMatch) {
            showingBooks = this.state.bookResults;
            // Check if any book in the results is already on a shelf - if so, show it instead of the raw result book:
            showingBooks.forEach((bookResult, index) => {
                let bookOnShelf = this.props.books.find(book => book.id === bookResult.id);
                if (bookOnShelf !== undefined) {
                    // console.log(bookOnShelf);
                    showingBooks.splice(index, 1, bookOnShelf);
                }
            })
            showingBooks.sort(sortBy('title'));
        } else {
            showingBooks = [];
        }

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
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
                        {
                            showingBooks.map((book, index) => (
                                <li key={index}>
                                    <Book
                                        book={book}
                                        bookshelves={this.props.bookshelves}
                                        onBookMove={(bookMoved) => this.props.onBookMove(bookMoved)}
                                    />
                                </li>
                            ))
                        }
                    </ol>
                </div>
            </div>
        )
    }
}

export default SearchBooks