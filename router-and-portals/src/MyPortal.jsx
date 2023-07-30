import React from 'react'
import ReactDOM from 'react-dom'

export default function MyPortal() {
  return ReactDOM.createPortal(<span>HEYYYYY</span>,document.getElementById('outside-div'))
}
