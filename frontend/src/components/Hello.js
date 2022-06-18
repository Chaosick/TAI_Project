import React from "react";


const Hello = () =>{
    // return (
    //     <div className = 'dummyClass'> 
    //         <h1> Hello cunt</h1>
    //     </div>
    // )

    return React.createElement(
        'div',
        {id:'ayy', className: 'dummyClass'},
        React.createElement('h1',null,'Hello Chaosick'))
}
export default Hello