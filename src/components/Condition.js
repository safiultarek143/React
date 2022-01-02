import React, { Component } from 'react'

 class Condition extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isUser : false
        }
    }
    
    render() {
    //     let msg;

    //   if(this.state.isUser){
    //       msg = <div>Hello User</div> 
    //   }
    //   else{
    //      msg = <div>Hello Guest</div>
    //   }
    //   return <div>{msg}</div>
    return this.state.isUser ? <div>Hello User</div> : <div>Hello Guest</div>
    }
   
}

export default Condition
