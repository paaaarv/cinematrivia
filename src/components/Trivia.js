
import React from 'react';

export default class Trivia extends React.Component{

    constructor(props){
        super(props)

    }


    render(){
        return(
            <div>
            <div className="trivia">
                <p> {this.props.info}</p>
            </div>
            </div>
        )
    }

}
