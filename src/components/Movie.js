import React from 'react';

export default class Movie extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className="movie">
                <img height="300px" src={this.props.image}/>
                <h2> {this.props.title} </h2>
                <p> {this.props.year}</p>
            </div>
        )
    }


}
