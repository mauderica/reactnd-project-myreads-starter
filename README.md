# My Reads - React Project

## Table of Contents

* [Instructions For Set-Up](#instructions-for-set-up)
* [Dependencies](#dependencies)
* [How The App Works](#how-the-app-works)
* [Contributing](#contributing)

## Instructions For Set-Up

To get started:
* download all project files
* go to a command line terminal at the project's root directory, and from there:
    * install all project dependencies with `npm install`
    * start the development server with `npm start`

## Dependencies

* favicon
* Google fonts
* react
* react-dom
* react-router-dom
* sort-by
* prop-types

## How The App Works

This is a bookshelf app that allows the user to search, select and categorize books based on the following bookshelf options:
* Read
* Currently Reading
* Want to Read

These three bookshelves are displayed on the main page, along with any books that have been placed on a bookshelf by the user. Each book has a control that lets the user select the shelf for that book. When the user selects a different shelf, the book moves there. The main page also has a link to a search page that allows the user to find books to add to their library.

The search page has a text input that can be used to find books (based on fixed search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md)). As the value of the text input changes, the books that match that query are displayed on the page, along with a control that allows the user to add the book to their library. The search page also has a link which leads back to the main page.

Note: The above app description was taken in part from the Udacity Front-End Nanodegree My Reads project description.

## Contributing

Contributions are welcome!