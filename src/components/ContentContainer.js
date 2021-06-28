import React from 'react'
import { connect } from 'react-redux'
import getMovie from '../actions/getMovie.js'
import Movie from './Movie.js'
class ContentContainer extends React.Component{


    constructor(props){
        super(props);
        this.state={
            title: "",
            year_released: "",
            image: "",

        }
    }

    handleUpdate(){
        const movie= this.props.movie[this.props.movie.length-1]
        return <Movie title={movie.title} year={movie.year_released} image={movie.image}/>
    }

    render(){
        return(
            <div className={this.content}>
                {this.props.loading? <div> LOading!</div>  : this.handleUpdate()}

            </div>
        )
    }
}


function mapStateToProps(state){
  return {movie: state.movie.movies,
          loading: state.movie.loading
  }
}

export default connect(
    mapStateToProps,
    null)(ContentContainer)
