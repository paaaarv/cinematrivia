export default function getMovies(){
    return(dispatch)=>{
    dispatch({type: "START_GETTING_MOVIES"});
    fetch("http://localhost:3000/movies",{
    method: "GET",
    headers:  {
      "Content-Type": "application/json",
      "Accept": "application/json"
    }
}).then(response => response.json()).then(movie => dispatch({ type: 'GET_MOVIES', movie }))
}
}
