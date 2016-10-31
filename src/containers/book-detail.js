import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class BookDetail extends React.Component {
  render() {
    if(!this.props.book){
      return (
        <div>Please select a book.</div>
      )
    }
    return (
      <div>
        <h3>Detail for ...</h3>
        <p>Title: {this.props.book.title}</p>
        <p>Price: {this.props.book.price} THB</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    book: state.activeBook
  };
};

export default connect(mapStateToProps)(BookDetail);
