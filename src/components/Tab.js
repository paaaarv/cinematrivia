import React from 'react';
import ContentContainer from "./ContentContainer.js"


export default class Tab extends React.Component{


    constructor(props){
        super(props);
    }


    render(){

        return(
            <div>
            <div className="button">
                <button onClick={this.handleClick} className={this.props.attribute}> {this.props.attribute}</button>
            </div>
            </div>
        )
    }

}
