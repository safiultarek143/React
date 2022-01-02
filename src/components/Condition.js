import React, { Component } from 'react'

 class Condition extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isUser : true
        }
    }
    
    render() {
      if(this.state.isUser){
          return(
            <div>Hello User</div>
          )
         
      }
      else{
          return(
              <div>Hello Guest</div>
          )
      }
    }
}

export default Condition
