import React from 'react'
import ComponentB from './ComponentB'
import { useContext } from 'react'
import MyDataContext from './data.js'

export default function ComponentA() {

  const {name} = useContext(MyDataContext)
 
  return (
    <div>ComponentA
        {name}

        <hr/>
          <ComponentB/>
    </div>
  )
}
