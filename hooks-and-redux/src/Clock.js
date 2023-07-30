import React, { useEffect, useRef, useState } from 'react'

export default function Clock() {

    const [value, setValue] = useState(0);
    const intervalObj = useRef(null) /// creates a mutable object instance

    useEffect(() => {
        intervalObj.current = setInterval(() => {
            setValue(v => v + 1)
        }, 1000)

        return () => {
            clearInterval(intervalObj.current)
        }
    }, [])


    function stop() {
        clearInterval(intervalObj.current)
    }

    return (
        <div>
            Clock value
            {value}

            <button onClick={stop}>STOP</button>
        </div>
    )
}
