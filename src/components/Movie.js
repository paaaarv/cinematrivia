import React from 'react';
import Image from './Image.js'
export default class Movie extends React.Component{

    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className="movie">
                <Image style={{display: 'block',
    margin: '0 auto'}} image={this.props.image}/>
                <h2> {this.props.title} </h2>
                <p> {this.props.year}</p>
            </div>
        )
    }


}
