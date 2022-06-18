import React from 'react'

const Greet = (props) => {
    const{name,game} = props
    return (
        <div>
        <h1>Hello {name} gra w {game}</h1>
        {props.children}
        </div>
    )
}
export default Greet;