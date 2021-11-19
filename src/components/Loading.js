import React from 'react'
import Loader from 'react-loader-spinner';

export default class Loading extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div class="loading">
                <Loader
type="Oval"  color="#00BFFF" height={150} width={150}                     />
            </div>
        )
    }

}
