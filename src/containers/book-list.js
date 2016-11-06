import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { selectBook } from '../actions/index'

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className='list-group-item'
          onClick={() => this.props.selectBook(book)}>{book.title}
        </li>
      )
    })
  }

  render() {
    return (
      <div className='book-list'>
        <h3>Booklist 👔</h3>
        <ul className='list-group'>
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props inside of BookList
  return {
    books: state.books
  }
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Propote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
