

export default function movieReducer(state={movies: [], loading: false}, action){
    switch(action.type){
        case "START_ADDING_MOVIES":
            return{...state, movies: [...state.movies], loading: true};
        case "ADD_MOVIE":
            let trivia= [];
            action.movie.included.map(x=>trivia.push(x.id))
            let newMovie = {
                id: action.movie.data.id,
                title: action.movie.data.attributes.title,
                image: action.movie.data.attributes.image,
                query: action.movie.data.attributes.query,
                year_released: action.movie.data.attributes.year_released,
                trivia_ids: trivia
            }
            return {
        ...state,
        movies: [...state.movies, newMovie], loading: false
    };
        default:
            return state;
    }
}
