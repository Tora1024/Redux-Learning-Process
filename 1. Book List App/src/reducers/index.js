import { combineReducers } from 'redux';
import Books from './reducers_books';

const rootReducer = combineReducers({
	books : Books
});

export default rootReducer;