// Create a functional component with a counter using the useState() hook. Include
// buttons to increment and decrement the counter

import { useState } from "react";

const Usestate = () =>{
    const[count, setCount] = useState(0)
    return(
        <div>
         <h2>Counter (useState)</h2>
         <button onClick={() => setCount(count-1)}>Decrement</button>  
         <span>{count}</span>
         <button onClick={() => setCount(count+1)}>Increment</button>      
        </div>
    )
}

export default Usestate;