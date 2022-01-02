import React, { Component } from 'react'

 class BindEvent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
            message: "Welcome" 
        }
    }
    clickHandler = () => {
        this.setState({
            message : "good bye"
        })

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
