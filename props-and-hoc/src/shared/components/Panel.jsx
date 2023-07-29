import React from 'react'

export default function Panel({ heading, content }) {
    
    return (
        <div className='panel-container'>
            <h1>{heading}</h1>
            <p>{content}</p>
        </div>
    )
}
