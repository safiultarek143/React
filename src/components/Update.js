import React, { Component} from 'react'

export class Update extends Component{
    
    constructor(props){
        super(props)
        this.state = {
            value: 0
        }
    }
    componentDidMount(){
        setInterval(() -> {
            this.setState({
                value:0
            })
        }, 2000)
    }
    render(){
        return(){
            <div>
value: {this.state.value}
            </div>
        }
    }
}
const Update = () => {
  return (
    <div>Update</div>
  )
}

export default Update