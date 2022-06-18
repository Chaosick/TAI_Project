import React from 'react'

function Click() {
    function clickHandler(){
        console.log('Click click MF')
    }
  return (
    <div>
        <button onClick={clickHandler}>+1</button>
    </div>
  )
}

export default Click