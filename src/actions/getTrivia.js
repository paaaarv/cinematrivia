export default function getTrivia(id){
    return(dispatch)=>{
        dispatch({type: "START_ADDING_TRIVIA"});
        fetch(`http://localhost:3000/movies/${id}/trivia`,{
        method: "GET",
        headers:  {
          "Content-Type": "application/json",
          "Accept": "application/json"
      }
    }).then(response => response.json()).then(movie => dispatch({ type: 'ADD_TRIVIA', movie }))
}
    }
