import React from 'react'
import Trivia from './Trivia.js'


export default class TriviaCarousel extends React.Component{
    constructor(props){
        super(props);

        this.handleTrivia=this.handleTrivia.bind(this)
    }



 handleTrivia(){
        console.log(this.props.trivia)
        //this.props.trivia.map(t=>{
             //<Trivia info={t}/>
        //})
    }

    render(){
        return(
            <div class='triviaCarousel'>
            </div>
        )
    }
}
