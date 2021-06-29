import React from 'react';
import Image from './Image.js'
import { connect } from 'react-redux'
import getTrivia from '../actions/getTrivia.js'
import Loading from './Loading.js'
class Movie extends React.Component{

    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(){
        this.props.getTrivia(this.props.id);
        while(this.props.loading == true){
            return <Loading/>
        }
        this.showTrivia()


    }

    showTrivia(){
        debugger

    }
    render(){
        return(
            <div className="movie">
                <Image image={this.props.image}/>
                <h2> {this.props.title} </h2>
                <p> {this.props.year}</p>
                <button onClick={this.handleClick}> click for trivia! </button>
            </div>
        )
    }


}
function mapStateToProps(state){
    return{
        trivia: state.trivia.trivia,
        loading: state.trivia.loading
    }
}

 function mapDispatchToProps(dispatch){
     return {getTrivia: (id) => dispatch(getTrivia(id))}
 }



 export default connect(mapStateToProps,mapDispatchToProps)(Movie)
