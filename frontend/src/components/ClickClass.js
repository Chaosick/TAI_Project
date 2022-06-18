import React, { Component } from 'react'

class ClickClass extends Component {

    clickHandler(){
        console.log('BANG BANG MF!')
    }
  render() {
    return (
        <div>
            <button onClick={this.clickHandler}>CLICK MF!</button>
        </div>
    )
  }
}

export default ClickClass