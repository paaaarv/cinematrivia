import { combineReducers } from 'redux';
import movieReducer from './manageMovies.js';

const rootReducer = combineReducers({
  movie: movieReducer
});

export default rootReducer
