import React from 'react'
import { connect } from 'react-redux'

class ContentContainer extends React.Component{


    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={this.content}></div>
        )
    }
}


function mapStateToProps(state){
  return {movies: state.movies}
}

export default connect(
    mapStateToProps,
    null)(ContentContainer)
