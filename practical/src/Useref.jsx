// o Create react app to avoid re-renders in react application by useRef ?

import { useRef, useState } from "react";

const Useref = () => {
  const [count, setCount] = useState(0); // causes re-render
  const renderCount = useRef(0);

  renderCount.current++;

  return (
    <div>
      <h2>useRef Example</h2>

      <p>Count (state): {count}</p>
      <p>Render Count (useRef): {renderCount.current}</p>

      <button onClick={() => setCount(count + 1)}>Increase Count</button>
    </div>
  );
};

export default Useref;
