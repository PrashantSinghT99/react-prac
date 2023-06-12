import React, { useEffect } from 'react'
import { useState } from 'react'

const List = ({ getItems }) => {

    const [items, setItems] = useState([])

    useEffect(() => {
        setItems(getItems())

        console.log("UPDATING ITEMS");
    }, [getItems])

    return (

        items.map((item) => <div key={item}>{item}</div>)
    )
}

export default List