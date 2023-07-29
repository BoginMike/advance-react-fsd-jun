import React from 'react'
import { useContext } from 'react'
import MyDataContext from './data.js'

export default function ComponentB() {
    const { name, setName } = useContext(MyDataContext);
    function change() {
        setName('Amit')
    }
    return (
        <div onClick={change}>
            ComponentB
            <br />
            {name}
        </div>
    )
}
