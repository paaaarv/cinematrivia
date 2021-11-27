import React from 'react';
import{ NavLink } from 'react-router-dom';
export default class Heading extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
            <div className="heading">
                <div className="box">
                <h1> Cinema Trivia </h1>
                </div>
                <br/>
            </div>
                <div className="navDiv">

                    <NavLink className="navigation" to="/search" exact> Search </NavLink>
                    <NavLink className="navigation" to="/history" exact> History </NavLink>
                </div>
            </div>
        )
    }







}
