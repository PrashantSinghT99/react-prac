import React, { useContext, useEffect } from 'react'
import myContext from '../Context/context'

const UseContextForState = () => {

  const a = useContext(myContext);

  useEffect(() => {
    a.updatestate()
  }, [])

  // const styling={
  //   color:"red"
  // }
  return (
    <div >
      {a.state.name} {a.state.age}
    </div>
  )
}

export default UseContextForState