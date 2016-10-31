import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
  renderList(){
    return this.props.books.map((book)=>{
      return (
        <li
          key={book.title}
          onClick={()=> this.props.selectBookx(book)}
          className="list-group-item">
          {book.title}
        </li>
      );
    });
  }
  render(){
    // console.log(this.props.books)
    return (
      <ul className="list-group">
        {this.renderList()}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  // Whenever selectBook is called, the result should be passed
  // to all of out reducers
  // : >> selectBook << import from the top
  return bindActionCreators({selectBookx: selectBook}, dispatch);
}

// Promote BookList from a componenet to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
