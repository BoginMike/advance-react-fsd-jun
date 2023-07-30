import { useEffect, useState } from "react";

export function useLocalStorage(start, castFunction) {


    const [value, setValue] = useState(start);

    useEffect(() => {
        //onload
        let v = localStorage.getItem('my-local-value')
        if (castFunction) {
            let convertedValue = castFunction(v)
            setValue(convertedValue)
        } else {
            setValue(v)
        }
    }, [])

    useEffect(() => {
        //on update
        localStorage.setItem('my-local-value', value)
    }, [value])

    function setInLocalValue(newValue) {
        setValue(newValue)
    }



    return [value, setInLocalValue]
}