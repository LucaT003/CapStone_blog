import '../style/Header.css'
import React , { Component}  from 'react';

export default function Header() {
    return (
        <div className="header">
            <div className='headerTitles'>
                <span className='headerTitleSm'>Luca Trimboli</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img className='headerImg' src="https://miro.medium.com/max/1400/0*2fEjB3ED3atXFJbH" alt="" />
        </div>
    )
}