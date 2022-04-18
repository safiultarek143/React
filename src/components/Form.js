import React, { Component} from 'react'

class Form extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: "",
            comment: ""
        }
        this.namechangeHandler = this.namechangeHandler.bind(this)
        this.commentchangeHandler = this.commentchangeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    namechangeHandler(event){
        this.setState({
            name:event.target.value
        })
    }
    commentchangeHandler(){
        this.setState({
            comment: event.target.value
        })
    }
    submitHandler(){
        alert('${this.state.name} ${this.state.comment}')
    }
    render(){
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <lebel>Name</lebel>
                        <input type="text" value={this.state.name} onChange={this.namechangeHandler}/>
                    </div>
                    <div>
                        <lebel>Comments</lebel>
                        <textarea  value={this.state.comment} onChange={this.commentchangeHandler}></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;