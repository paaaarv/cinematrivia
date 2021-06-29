import React from 'react';
import { connect } from 'react-redux';
import getMovies from '../actions/getMovies.js'
import Loading from './Loading.js'
import Movie from './Movie.js'
class MoviesContainer extends React.Component{

    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.getMovies()
    }

    handleUpdate(){
        return this.props.movies.map(movie=> <Movie id = {movie.id} key={movie.id} title={movie.title} image={movie.image} year = {movie.year_released}/>
        )
    }


    render(){
        return(
            <div className="moviesContainer">{this.props.loading? <Loading/> : this.handleUpdate() }</div>
        )
    }
}


function mapDispatchToProps(dispatch){
  return { getMovies: () => dispatch(getMovies()) }
}

function mapStateToProps(state){
    return{movies: state.movie.movies,
    loading: state.movie.loading}
}


export default connect(mapStateToProps,mapDispatchToProps)(MoviesContainer)
