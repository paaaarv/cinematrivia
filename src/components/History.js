import React from 'react'
import MoviesContainer from './MoviesContainer.js'
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
            })

        })
    }

    render(){
        return(
            <div className="historyContainer">
                <MoviesContainer movies={this.state.movies}/>
            </div>
        )
    }

}
