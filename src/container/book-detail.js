import React from 'react';
import {Component} from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators} from 'redux';
// import selectBook from '../actions/index';

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Sleect abook</div>;
    }
    return (
      <div><h3>BookDetail:</h3>
        <div>
          {this.props.book.title}
        </div>
        <div>
          {this.props.book.page}

        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Whatever is returned shows up as props inside BookList
  return {
    //Whatever is returned here will be set equal to this.props in line 7
    book: state.activeBook
  };
}
export default connect(mapStateToProps)(BookDetail);
