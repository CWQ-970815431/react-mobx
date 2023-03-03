import React from "react"

import { connect } from "react-redux"


class Nav extends React.Component{

    render(){
        console.log(this.props)
        return  <div className="nav">
                     {this.props.count}
                </div>
    }

  
}

const mapStateToProps =(state)=>{
    console.log(state);
    return state
}

export default connect(mapStateToProps)(Nav)