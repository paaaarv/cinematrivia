import React from 'react';
import{ NavLink } from 'react-router-dom';

export default class Heading extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div className="heading">
                <h1> Cinema Trivia </h1>
                <p> an app designed for you to look up trivia about your favorite movies!</p>
                <br/>
                <div>
                    <NavLink className="navigation" to="/search" exact> Search </NavLink>
                    <NavLink className="navigation" to="/history" exact> History </NavLink>
                </div>
            </div>
        )
    }







}
