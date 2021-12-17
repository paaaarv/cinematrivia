import React from 'react'
import Trivia from './Trivia.js'


export default class TriviaCarousel extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }


    render(){
        return(
            <div class='triviaCarousel'>
            </div>
        )
    }
}
