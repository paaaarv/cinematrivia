import React from 'react';
import Image from './Image.js'
export default class Movie extends React.Component{

    constructor(props){
        super(props)
        this.handleClick= this.handleClick.bind(this)
    }

    render(){
        return(
            <div className="movie">
                <Image image={this.props.image}/>
                <h2> {this.props.title} </h2>
                <p> {this.props.year}</p>
            </div>
        )
    }


}
