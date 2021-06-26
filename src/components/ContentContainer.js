import React from 'react'


export default class ContentContainer extends React.Component{


    constructor(props){
        super(props);
        this.content= props.content
    }

    render(){
        console.log(this.content)
        return(
            <div className={this.content}></div>
        )
    }
}
