

export default function movieReducer(state={movies: [], findMovie: [], loading: false}, action){
    switch(action.type){
        case "START_ADDING_MOVIES":
            return{...state, findMovie:[], loading: true};
        case "ADD_MOVIE":
            let trivia= [];
         if (action.movie.included.length == true){
                action.movie.included.map(x=>trivia.push(x.id))
            }
            const newMovie = {
                id: action.movie.data.id,
                title: action.movie.data.attributes.title,
                image: action.movie.data.attributes.image,
                query: action.movie.data.attributes.query,
                year_released: action.movie.data.attributes.year_released,
                trivia_ids: trivia
            }
            return {
        ...state,
        findMovie: [newMovie], loading: false
    };
        case "SHOW_ERROR":
            return{...state,loading:false}
        case "START_GETTING_MOVIES":
            return{...state, loading: true};

        case "GET_MOVIES":
            state.movies = [];
            const triviaArray = []
            debugger
            for (let i=0; i<action.movie.data.length; i++){
                if (action.movie.data[i].relationships.trivia.data.length > 0){
                    action.movie.data[i].relationships.trivia.data.map(x=>triviaArray.push(x.id))
                }
                const movieInstance= {
                    id: action.movie.data[i].id,
                    title: action.movie.data[i].attributes.title,
                    image: action.movie.data[i].attributes.image,
                    query: action.movie.data[i].attributes.query,
                    year_released: action.movie.data[i].attributes.year_released,
                    trivia_ids: triviaArray
                }
                state.movies.push(movieInstance)
            }
            return{
                ...state,loading:false
            }
         case "GET_MOVIE":
            let movie = state.movies.filter(x=> x.title==action.payload)
            debugger
            let foundMovie = {
                id: movie[0].id,
                title: movie[0].title,
                image: movie[0].image,
                query: movie[0].query,
                year_released: movie[0].year_released,
                trivia_ids: movie[0].trivia_ids

            }
            return {...state, findMovie: foundMovie}
        default:
            return state;
    }
}
