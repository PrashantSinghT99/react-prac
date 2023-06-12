import React from 'react'

import { useState } from 'react'
import myContext from './context'

const ContextState = (props) => {

   const myState = {
        name: "prashant",
        age: "23"
    }

    const [state, setState] = useState(myState);

        const updatestate = () => {
            setTimeout(() => {
                setState({
                    "name": "jod",
                    "age": "19"
                }
                )
            }, 3000)
        }
    return (
        
        <div>     
            <myContext.Provider value={{ state, updatestate }}>
            {props.children}
        </myContext.Provider></div>
    )
}

export default ContextState