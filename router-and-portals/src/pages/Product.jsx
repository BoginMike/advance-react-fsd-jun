import React from 'react'
import { useParams } from 'react-router-dom'

export default function Product() {
    const { name } = useParams()

    return (
        <div>
            Product Page

            <hr />

            your are looking at {name} product

        </div>
    )
}
