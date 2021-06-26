import React from 'react';



export default class Tab extends React.Component{


    constructor(props){
        super(props);
        this.attribute = props.attribute
    }

    render(){

        return(
            <div>
                <h2 className={this.attribute}> {this.attribute}</h2> 
            </div>
        )
    }

}
