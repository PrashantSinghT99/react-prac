import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  const expensiveCalculation = (num) => {
    console.log("CALCULATING");
    for (let i = 0; i < 1000000000; i++) {}
    return num;
  };
  const calculation=useMemo(()=>
  {
    expensiveCalculation(count)
  },[count])

  // expensiveCalculation(count)

  const onclick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const onChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <button onClick={onclick}>INCREMENT</button>
      <p>Count: {count}</p>

      <input type="text" value={name} onChange={onChange} />

      <p>My name is : {name}</p>
    </div>
  );
};

export default UseMemo;
