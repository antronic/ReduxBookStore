import React, { Component } from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="col-md-6">
          <BookList />
        </div>
        <div className="col-md-6">
          <BookDetail />
        </div>
      </div>
    );
  }
}
