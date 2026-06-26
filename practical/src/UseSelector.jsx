// o Create react app with use of useSelector & useDispatch. 


import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./ReduxStore/store";

const UseSelector = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Counter - UseSelector and useDispatch</h2>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span> {count} </span>

      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};

export default UseSelector;
