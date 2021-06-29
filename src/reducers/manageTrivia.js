

export default function triviaReducer(state={trivia:[], loading: true}, action){

    switch(action.type){
        case "START_ADDING_TRIVIA":
            return{...state}

        case "ADD_TRIVIA":
            state.trivia=[];
            for(let i=0; i<action.movie.data.length; i++){
            const triviaItem = {
                id: action.movie.data[i].id,
                info: action.movie.data[i].attributes.info
            }
            state.trivia.push(triviaItem)
        }
            return{...state, loading:false}


        default:
            return state;


    }


}
