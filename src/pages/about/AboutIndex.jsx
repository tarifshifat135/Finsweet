import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'

const AboutIndex = () => {

    const [count, setCount] = useState(0)
    const url = "https://jsonplaceholder.typicode.com/posts"

    useEffect(() => {
            console.log("About page loaded")
    }, [])
    return (

        <div className='py-20'>
            <div className="mx-auto max-w-[1500px] px-6 md:px-10 lg:px-16">
                <h1>{count}</h1>
            </div>
        </div>

    )
}

export default AboutIndex