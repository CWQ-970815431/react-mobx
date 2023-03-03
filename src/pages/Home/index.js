
import React from "react";
import {  Link } from 'react-router-dom'
import { connect } from "react-redux"

class Home  extends React.Component{
    

    
    handleClick = ()=>{
        this.props.sendAction()
    }

    render(){

      return  <div>
                <Link to='/mobx'>mobx</Link>
                <button onClick={this.handleClick}>+</button>
             </div> 
    } 
    
}
    


const mapDispatchProps = (dispatch)=>{
    return {
        sendAction:() => {
            console.log(1);
            dispatch({
                type:'send_type'
            })
        }
    }
}


export default  connect(null,mapDispatchProps)(Home)