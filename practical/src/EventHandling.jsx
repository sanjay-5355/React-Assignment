// Create a button in a React component that, when clicked, changes the text from
// "Not Clicked" to "Clicked!" using event handling.

import { useState } from "react";

// Create a form with an input field in React. Display the value of the input field
// dynamically as the user types in it

const Eventhandling = () =>{
    const[status , setStatus] = useState("Not Clicked!")
    const[input , setInput] =useState("")
    const handleClick = () =>{
        setStatus("Clicked")
    }

    const handleChange = (e) =>{
    setInput(e.target.value);
    }
    return(
       <div style={{padding:"20px"}}>
       <h2>{status}</h2>
       <button onClick={handleClick}>Click Me</button>
       <hr></hr>
       <input type="text" placeholder="Type Something..." value={input} onChange={handleChange} />
       <h3>You Typed: {input}</h3>
       </div>
    )
}

export default Eventhandling;