import { combineReducers } from 'redux';
import Books from './reducers_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
	books : Books,
	activeBook: ActiveBook
});

export default rootReducer;