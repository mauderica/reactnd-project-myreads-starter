import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    bookshelves: [
      {
        title: 'Currently Reading',
        optionValue: 'currentlyReading',
      },
      {
        title: 'Want to Read',
        optionValue: 'wantToRead',
      },
      {
        title: 'Read',
        optionValue: 'read',
      },
    ],
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  updateBooks = (bookMoved) => {
    alert(`You are about to move "${bookMoved.title}" off the "${bookMoved.shelf}" shelf.`);
    this.getBooks();
  }

  render() {
    return (
      <div className="app">
        <Route path="/search" render={() => (
          <SearchBooks
            books={this.state.books}
            bookshelves={this.state.bookshelves}
          />
        )} />
        <Route exact path="/" render={() => (
          <ListBooks
            books={this.state.books}
            bookshelves={this.state.bookshelves}
            onBookMove={(bookMoved) => this.updateBooks(bookMoved)}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
