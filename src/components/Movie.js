import React from 'react';

export default class Movie extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2> {this.props.title} </h2>
                <p> {this.props.year_released}</p>
            </div>
        )
    }


}
