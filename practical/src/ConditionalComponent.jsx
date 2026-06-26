// o Create a component that conditionally displays a login or logout button based on
// the user’s login status.

// o Implement a component that displays a message like "You are eligible to vote" if the
// user is over 18, otherwise display "You are not eligible to vote."

import { useState } from "react";

const ConditionalComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [age, setAge] = useState("");
  return (
    <div>
      <h3>User Status</h3>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
      
      <hr></hr>
      <input
        type="number"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        placeholder="Enter your age.."
      ></input>

      <h3>
        {age
          ? age >= 18
            ? "You are eligible for Vote"
            : "You are Not eligible for Vote"
          : ""}
      </h3>
    </div>
  );
};

export default ConditionalComponent;
