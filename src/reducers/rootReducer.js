import { combineReducers } from 'redux';
import movieReducer from './manageMovies.js';
import triviaReducer from './manageTrivia.js'
const rootReducer = combineReducers({
  movie: movieReducer,
  trivia: triviaReducer
});

export default rootReducer
