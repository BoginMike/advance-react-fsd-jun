import React, { useEffect, useState } from 'react'

export default function FunctionalCounter() {

    const [value, setValue] = useState(0)// hook for rendering componenet on state change
    function increment() {
        setValue(value + 1)
    }
    useEffect(() => {
        // 
        console.log("mounted")


        return () => {
            //
            console.log("destorying")
        }
    }, [])
    useEffect(() => {
        // 
        console.log("updated")
    }, [value])

    return (
        <div>
            <button onClick={() => increment()}>+</button>
            <span>{value}</span>
        </div>
    )
}