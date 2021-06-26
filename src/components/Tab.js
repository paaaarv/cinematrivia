import React from 'react';
import ContentContainer from "./ContentContainer.js"


export default class Tab extends React.Component{


    constructor(props){
        super(props);
        this.attribute = props.attribute
        this.section = props.section
    }


    render(){

        return(
            <div>
            <div className="button">
                <button onClick={this.handleClick} className={this.attribute}> {this.attribute}</button>
            </div>
            </div>
        )
    }

}
