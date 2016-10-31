export default (state = null, action) => {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
      // state.title = book.title;
      // return state;
  }
  return state;
}
