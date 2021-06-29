import React from 'react'
import { connect } from 'react-redux'
import getTrivia from '../actions/getTrivia.js'
import Trivia from './Trivia.js'
import Movie from './Movie.js'
import Loading from './Loading.js'


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
        return <Movie key={movie.id} id= {movie.id} title={movie.title} year={movie.year_released} image={movie.image}/>
    }

    render(){
        return(
            <div className={this.content}>
                {this.props.loading? <Loading/> : this.handleUpdate()}

            </div>
        )
    }
}


function mapStateToProps(state){
  return {movie: state.movie.findMovie,
          loading: state.movie.loading,
          trivia: state.trivia.trivia,
          triviaLoading: state.trivia.loading
  }
}

export default connect(
    mapStateToProps,
    null)(ContentContainer)
