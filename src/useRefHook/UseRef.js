// import React, { useEffect, useRef } from 'react'
// import { useState } from 'react'

// const UseRef = () => {

// const [name,setName]=useState('');

// const [renderCount,setRenderCount]=useState('0');

// const renderCount=useRef(0);

// const inputRef=useRef();

// const prevName=useRef('')
// useEffect(()=>
// {
//     // setRenderCount((prevRenderCount)=>prevRenderCount+1);
//     // renderCount.current=renderCount.current+1;
//     prevName.current=name;
// },[name])

// const handleChange=(e)=>
// {
//   setName(e.target.value);
// }

// // const onfocus=()=>
// // {
// //     inputRef.current.focus();
// // }

//   return (
//     <div>
//         <input  type="text" onChange={handleChange}  value={name}/>
//         <p>HI MY NAME IS {name} it used to be {prevName.current}</p>
//         {/* <p>Render times {renderCount.current}</p> */}
//         {/* <button onClick={onfocus}>FOCUS</button> */}
//     </div>
//   )
// }

// export default UseRef

//do not cause re render

//use it as a reference to an element

//use to track prev State

import React, { useState, useEffect, useRef } from 'react'

const UseRef = () => {
  const [name, setName] = useState('');
  // const count=useRef(0);
//  const inputRef=useRef();

const prevName=useRef();


  useEffect(() => {
    // setCount((prevCount) => prevCount + 1);

    // count.current=count.current+1;

  prevName.current=name;
    
  },[name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  // const handleButton=(e)=>
  // {
  //   inputRef.current.focus();

  // }

  return (
    <div>
      <input type="text" onChange={handleChange} value={name} />
      <p>Hi my name {name} and previous state {prevName.current}</p>
      {/* <p>The render count is: {count.current}</p> */}

      {/* <button onClick={handleButton}>FOCUS</button> */}
    </div>
  );
};

export default UseRef;
