import React from 'react';
import Image from './Image.js'
export default class Movie extends React.Component{

    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick(){
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
