import React, {Component} from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome back, Tarnished'
        }
    }

    changeMessage(){
        this.setState({
            message:'Ember restored'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.changeMessage()}>Rest</button>
            </div>
        )
    }
}

export default Message