import React from 'react'
import { connect } from 'react-redux'
import getTrivia from '../actions/getTrivia.js'
import getMovie from '../actions/getMovie.js'
import Movie from './Movie.js'
import Loading from './Loading.js'
import Error from './Error.js'
import TriviaCarousel from './triviaCarousel.js'
class ContentContainer extends React.Component{


    constructor(props){
        super(props);
        this.state={
            title: "",
            year_released: "",
            image: "",

        }
    }

    handleUpdate=()=>{
        if(this.props.movie.length <1){
            return <Error/>
            ///this.props.getMovie(this.props.match.params.movieId)
            ///this.props.getTrivia(this.props.movie.id)
            ///return (<div>
            ///        <Movie key={this.props.movie.id} id= {this.props.movie.id} title={this.props.movie.title} year={this.props.movie.year_released} image={this.props.movie.image}/>
        ///            {this.props.triviaLoading? null : this.props.trivia.map(trivium => <Trivia key={trivium.id} info={trivium.info}/>)}
        ///        </div>
        ///)
        }else{
            let movie= this.props.movie[0]
            this.props.getTrivia(movie.id)
            if(this.props.triviaLoading == false){
            return (
                <div className="singleMovie">
                <Movie key={movie.id} id= {movie.id} title={movie.title} year={movie.year_released} image={movie.image} trivia={this.props.trivia}/>
                </div>
            );
        }}
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
function mapDispatchToProps(dispatch){
    return{
        getTrivia: (id)=>{dispatch(getTrivia(id))},
        getMovie: (id) => {dispatch(getMovie(id))}
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(ContentContainer)
