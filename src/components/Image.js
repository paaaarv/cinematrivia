import React from 'react';


export default function Image(props){
    const img = props.image

    return(
        <div className="movieImage">
            <img src={img}/>
        </div>
    )
}
