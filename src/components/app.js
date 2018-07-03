import React, { Component } from 'react';

//In Project file import
import BookList from '../container/book-list.js';
import BookDetail from '../container/book-detail.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList />
        <BookDetail />
      </div>
    );
  }
}
