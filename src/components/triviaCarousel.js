import React from 'react'
import Trivia from './Trivia.js'


export default class TriviaCarousel extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.trivia)
        
    }

    render(){
        return(
            <div class='triviaCarousel'>

            </div>
        )
    }
}
