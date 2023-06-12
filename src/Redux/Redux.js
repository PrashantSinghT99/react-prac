import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {actions} from '../Store/index'

const Redux = () => {
  const counter = useSelector((state) => state.counter);
const dispatch=useDispatch();

/**
 * 
 * click on the button dispatches an action which calls the reducer that updates 
 * the slice of the store to read it we use a selector(hook)
 * 
 * cart component subscribe to the store (cart in sync with store) using selector
 */
//   const increment=()=>
//   {
//     dispatch({ type: "INCREMENT" });
//   }
  const increment=()=>
  {
    console.log("incrementing");
    dispatch(actions.increment());
  }
  
  
//   const decrement=()=>
//   {
//     dispatch({ type: "DECREMENT" });
//   }
//   const addBy=()=>
//   {
//     dispatch({ type: "ADDBY",payload :10 });
//   }
  const decrement=()=>
  {
    console.log("decrementing");
    dispatch(actions.decrement());
  }
  const addBy=()=>
  {
    console.log("incrementing by 10");
    dispatch(actions.addBy(10));
  }



  return (
    <div>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>INCREMENT</button>
    <button onClick={decrement}>DECREMENT</button>
    <button onClick={addBy}>ADD BY 10</button>
    </div>
  );
};

export default Redux;
