import React, { Component } from 'react'

import BookList from '../containers/book-list'
import BookDetail from '../containers/book-detail'

class App extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <div className='row'>
          <div className='col-sm-6'>
            <BookList />
          </div>
          <div className='col-sm-6'>
            <BookDetail />
          </div>
        </div>
      </div>
    )
  }
}

export default App
