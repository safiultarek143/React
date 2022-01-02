import React, { Component } from 'react'

 class BindEvent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            message: "Welcome" 
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler() {
        this.setState({
            message : "good bye"
        })
        console.log(this)

    }
    render() {
        return (
            <div>
               <p>{this.state.message}</p>
               <button onClick={this.clickHandler} >Click Me</button>
            </div>
        )
    }
}

export default BindEvent
