import React from 'react'
import Movie from './Movie.js'
export default class History extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            movies:[]
        }

    }

    componentDidMount(){
        fetch("http://localhost:3000/movies").then(response =>response.json()).then(json=>{
            json.data.map(x=>{
                this.setState({
                    movies: [...this.state.movies,x]
                })
                debugger
            })

        })
    }

    render(){
        return(
            <div className="historyContainer">
            </div>
        )
    }

}
