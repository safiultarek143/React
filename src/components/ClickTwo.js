import React, { Component } from 'react'

 class ClickTwo extends Component {

    clickHandler =() =>{
        console.log("YOu clicked me")
    }
    render() {
        return (
            <div>
            <button onClick={() => this.clickHandler()}>CLick Me!</button>    
            </div>
        )
    }
}

export default ClickTwo

