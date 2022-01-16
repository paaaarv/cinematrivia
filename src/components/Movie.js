import React from 'react';
import Image from './Image.js'
import TriviaCarousel from './TriviaCarousel.js'
export default class Movie extends React.Component{

    constructor(props){
        super(props)

    }



    render(){
        return(
            <div className="movie">
                <Image image={this.props.image}/>
                <h2> {this.props.title} </h2>
                <p> {this.props.year}</p>
                <TriviaCarousel trivia={this.props.trivia}/>
            </div>
        )
    }


}
