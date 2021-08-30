import React from 'react';
import { connect } from 'react-redux';
import findMovie from '../actions/findMovie.js'


class Form extends React.Component{

    constructor(props){
        super()
        this.state={
            input: ""
        }
    }

    handleClick = (event)=>{
        event.preventDefault();
        this.props.findMovie(this.state.input)
        this.props.history.push(`/trivia/${this.state.input}`)
    }

    handleChange = (event) =>{
        this.setState({
            input: event.target.value
                })
    }


    render(){
        return(
            <div className="searchForm">

                <form onSubmit={this.handleClick}>
                    <input type="text" className="movieSearch" onChange={this.handleChange} value={this.state.input}/>
                    <button id="button-addon2" type="submit"> search </button>

                </form>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
  return { findMovie: (input) => dispatch(findMovie(input)) }
}



export default connect(
    null,
    mapDispatchToProps)(Form)
