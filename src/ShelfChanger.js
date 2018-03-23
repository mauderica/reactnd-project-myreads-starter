// Note: This component must receive a 'bookshelves' prop in its call

import React from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {
    static propTypes = {
        bookshelves: PropTypes.array.isRequired
    }
    
    render() {
        return (
            < div className="book-shelf-changer" >
                <select>
                    <option value="none" disabled>Move to...</option>
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