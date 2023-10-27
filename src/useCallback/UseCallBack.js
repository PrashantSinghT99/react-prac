import React from "react";
import { useState } from "react";
import List from "./List";

import { useCallback } from "react";
const UseCallBack = () => {
  const [number, setNumber] = useState(0);

  const [dark, setDark] = useState(false);

  function handleChange(e) {
    setNumber(e.target.value);
  }


  // const getItems=()=>
  // {
  //   return [Number(number),Number(number)+1,Number(number)+2];
  // }
  const getItems=useCallback(()=>
  {
    return [Number(number),Number(number)+1,Number(number)+2];
  },[number])
 

  const themeChange = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };
  return (
    <div id="cb" style={themeChange}>
      <input type="text" value={number} onChange={handleChange} />
      <br />
      <button onClick={() => setDark((prevDark) => !prevDark)}>Toggle</button>
      <List getItems={getItems}></List>
    </div>
  );
};

export default UseCallBack;
