import React from 'react';



export default class Form extends React.Component{

    constructor(props){
        super()
        this.state={
            input: ""
        }
    }

    handleClick = (event)=>{
        event.preventDefault();
        debugger
        console.log(event)
    }

    handleChange = (event) =>{
        this.setState({
            input: event.target.value
                })
    }


    render(){
        return(
            <div className="searchForm">
                <h2> Search for a movie! </h2>
                <form onSubmit={this.handleClick}>
                    <input type="text" className="movieSearch" onChange={this.handleChange} value={this.state.input}/>
                    <button type="submit" value="search!"/>

                </form>
            </div>
        )
    }




}
