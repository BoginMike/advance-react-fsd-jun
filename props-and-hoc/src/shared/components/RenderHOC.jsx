import React, { useEffect } from 'react'

export default function RenderHOC({ children }) {
    useEffect(() => {
        console.log("checking already logged in or not")
    }, [])
    if(new Date().getHours() == 22){
        return children

    }else{
        return <div>Not a right time to see this component</div>
    }
}
