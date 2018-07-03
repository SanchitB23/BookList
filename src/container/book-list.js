import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import selectBook from '../actions/index';
 class BookList extends Component {
  renderList(){
    return this.props.books.map((book) => { //the books here is the reducer prop
      return (
        <li key={book.title} onClick={()=> this.props.selectBook(book)} className="list-group-item">{book.title}</li>
      );
    });
  }
  render(){
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

//Glue between react and redux
function mapStateToProps(state) {
  //Whatever is returned shows up as props inside BookList
  return {
    //Whatever is returned here will be set equal to this.props in line 7
    books: state.books
  };
}
// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({selectBook: selectBook},dispatch); // // NOTE: takes the return value from select books and make sure it flows through all reducers

}

export default connect(mapStateToProps,mapDispatchToProps)(BookList); //connect takes a function 'mapStateToProp' and a Component 'BookList' and returns a container
