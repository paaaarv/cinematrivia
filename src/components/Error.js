import React from 'react'

// need to make a alert popup instead for error messages, stay on the same component

export default class Error extends React.Component{
    render(){
        return(
            <div>
            <h3>sorry! we couldn't find your movie, please hit search and try again!</h3>
            </div>
        )
    }
}
