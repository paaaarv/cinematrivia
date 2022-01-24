import React from 'react';


export default function Image(props){
    const img = props.image
    return(
        <img className="movieImage" src={img}/>
    )
}
