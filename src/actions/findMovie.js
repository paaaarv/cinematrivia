
export default function findMovie(input){
    return(dispatch)=>{
        dispatch({type: "START_ADDING_MOVIES"});
        fetch("http://localhost:3000/movies",{
        method: "POST",
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(input)
    }).then(response => response.json()).then(movie =>{
        if(movie.data == null){
        console.log(movie.data)
        }
        else{
            dispatch({ type: 'ADD_MOVIE', movie })
    }
})
}
    }
