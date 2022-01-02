import React, { Component } from 'react'
import Child from './Child'
 class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             message: "user"
        }
        this.gretting = this.gretting.bind(this)
    }
    gretting(){
        alert("Hello"+this.state.message)
    }
    
    render() {
        return (
            <div>
                <Child grettingMethod={this.gretting}/>
            </div>
        )
    }
}

export default Parent
