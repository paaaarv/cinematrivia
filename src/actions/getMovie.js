

export default function getMovie(id){
    return(dispatch)=>{
    dispatch({type: "GET_MOVIE", payload: id});
}
}
