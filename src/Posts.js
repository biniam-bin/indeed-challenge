import React, { useState, useEffect } from 'react'
import { useParams, useLocation } from "react-router-dom"
const Posts = () => {
    const [posts, setPosts] = useState([])
    const loc = useLocation()

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${loc.pathname.slice(7)}`)
            .then(response => response.json())
            .then(json => setPosts(json))
    })
    // console.log()
    return (
        <div className="bg-[#fdfdfd] py-8 px-16 flex flex-wrap justify-center">
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, assumenda. */}
            {posts.map((post) => {
                return (
                    <div className="card bg-[#eee] bg-red-00 m-10 w-[500px] h-64 rounded-md p-4 shadow-2xl flex ustify-center text-center flex-col">
                        <div className="head top-2 mb-5 text-lg text-purple-900">
                            <p>{ post.title}</p>
                        </div>
                        <div className="body text-blue-600">
                            <p>{ post.body}</p>
                        </div>
                    </div>
                )
            })}



           
        </div>
    )
}

export default Posts