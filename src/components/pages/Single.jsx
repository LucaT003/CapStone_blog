import '../../style/Single.css'
import Sidebar from '../Sidebar'
import SinglePost from '../SinglePost'
import React , { Component}  from 'react';

export default function Single() {
    return (
        <div className='single'>
            <SinglePost/>
            <Sidebar/>
        </div>
    )
}