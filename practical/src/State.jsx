// Create a Counter component with a button that increments a count value using
// Reactstate. Display the current count on the screen.

import { useState } from "react";

const State = () =>{
const [count,setCount] =useState(0)

const increment = () =>{
    setCount(count+1)
}
    return (
        <>
        <h2>Count : {count}</h2>
        <button onClick={increment} >Increment</button>
        </>
    )
}

export default State;