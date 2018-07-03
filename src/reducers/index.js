import { combineReducers } from 'redux';
import BooksReducer from './reducer_book_list';
import activeBookReducer from './reducer_active_book';

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: activeBookReducer
});

export default rootReducer;
