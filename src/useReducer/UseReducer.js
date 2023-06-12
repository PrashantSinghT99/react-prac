import React, { useReducer } from "react";
// import { useState } from "react";
// import { Reducer } from "react";

const UseReducer = () => {
  //   const [count, setCount] = useState(0);

  function reducer(state, action) {
    switch (action.type) {
      case "INCREMENT":
        return { count: state.count + 1 };
        break;
      case "DECREMENT":
        return { count: state.count - 1 };
        break;
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increment = () => {
    // setCount((prevCount) => prevCount + 1);

    dispatch({ type: "INCREMENT" });
  };

  const decrement = () => {
    // setCount((prevCount) => prevCount - 1);
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div id="red">
      <button id="red" onClick={increment}>
        +
      </button>
      {/* <h2>{count}</h2> */}
      <h2>{state.count}</h2>
      <button id="red" onClick={decrement}>
        -
      </button>
    </div>
  );
};

export default UseReducer;
