import React from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {
    static propTypes = {
        bookshelves: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        onSelectShelf: PropTypes.func.isRequired,
    }

    render() {
        return (
            < div className="book-shelf-changer" >
                <select value={this.props.shelf} onChange={(event) => this.props.onSelectShelf(event.target.value)} >
                    <option value="none-disabled" disabled>Move to...</option>
                    {
                        this.props.bookshelves.map((bookshelf, index) => (
                            <option key={index} value={bookshelf.optionValue}>{bookshelf.title}</option>
                        ))
                    }
                    <option value="none">None</option>
                </select>
            </div >
        )
    }
}

export default ShelfChanger