import '../../../style/Home.css'
import Header from '../../Header'
import Posts from '../../Posts'
import Sidebar from '../../Sidebar'
import React from 'react';

export default function Home() {
    return (
        <div className='HomeH'>
            <Header/>
             <div className='home'>  
              <Posts/>
              <Sidebar/>
             </div>
        </div>
    )
} 