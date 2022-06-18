import React, {Component} from "react";

class Welcome extends Component{
    render(){
        const{name,game} = this.props
        // const{state1, state2} = this.state
        return<h1> Welcome {name} gra w {game}</h1>
    }
}

export default Welcome