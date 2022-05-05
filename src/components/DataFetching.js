import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [posts, setPosts] = useState({})
    const [id, setId] = useState(1)

    useEffect(() => {
        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            console.log(response)
            setPosts(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    },[id])
    return (
        <div>
            <input type='text'value={id} onChange={e => setId(e.target.value)} />
            <div>{posts.title}</div>
            {/* <ul>
                {
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                    ))
                }
            </ul> */}
        </div>
    );
}

export default DataFetching;