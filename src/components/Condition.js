import React, { Component } from 'react'

 class Condition extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isUser : false
        }
    }
    //start if else mettod conditional rendering
    // render() {

    //   if(this.state.isUser){
    //     return (
    //         <div>Hello User</div> 
    //     )
          
    //   }
    //   else{
    //     return (
    //         <div>Hello Guest</div> 
    //     )
    //   }
    // }
    // end if else conditonal rendering
   // Element Variable condtional rendering
    // render() {


    //     let msg;

    //   if(this.state.isUser){
    //       msg = <div>Hello User</div> 
    //   }
    //   else{
    //      msg = <div>Hello Guest</div>
    //   }
    //   return <div>{msg}</div>

    // }
    // Element variable end
    //turnary operation
    // render(){
    // return this.state.isUser ? <div>Hello User</div>: <div> Hello Guest</div>
    // End turnary operator
    // short circuit method(if only true we show something otherwise nothing will be show. In that case we should use this method)
    render(){
    return this.state.isUser && <div>Hello User</div>
}
}

export default Condition
