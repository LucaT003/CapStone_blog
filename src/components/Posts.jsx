import Post from '../components/Post'
import '../style/Posts.css'
import React from 'react';

export default function Posts() {
    return (
        <div className='posts'>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}