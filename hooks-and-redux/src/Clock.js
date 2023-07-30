import React, { useEffect, useRef, useState } from 'react'
import { useLocalStorage } from './useLocalStorage';

export default function Clock() {

    const [value, setValue] = useLocalStorage(0, x => JSON.parse(x));
    const intervalObj = useRef(null) /// creates a mutable object instance

    useEffect(() => {
        intervalObj.current = setInterval(() => {

            setValue(prev => prev + 1)
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
