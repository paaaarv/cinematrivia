import React from 'react';



export default class Form extends React.Component{

    constructor(props){
        super()
    }

    render(){
        return(
            <form>
                <input type="text" className="movieSearch" value="search for a movie"> </input> 
            </form>
        )
    }




}
