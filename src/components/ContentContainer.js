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
        this.setState({
            title: movie.title,
            year_released: movie.year_released,
            image: movie.image
        })
        debugger
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
