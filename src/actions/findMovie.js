
export default function findMovie(input){
    return(dispatch)=>{
        dispatch({type: "START_ADDING_MOVIES"});
        fetch("http://localhost:3000/movies",{
        method: "POST",
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
    }).then(response => response.json()).then(movie =>{
        if(movie.data == null){
        dispatch({type: "SHOW_ERROR", movie})
        }
        else{
            dispatch({ type: 'ADD_MOVIE', movie })
    }
})
}
    }
