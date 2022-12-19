import '../style/NavBar.css'
import React from 'react';
import { Link } from 'react-router-dom';
import c from '../img/Fprofilo.jpg';
import { useSelector } from 'react-redux';

export default function NavBar() {

  const loggedUser = useSelector(state => state.loggedUser.state.username)

    return (
        <div className='top'>
            <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
            <i className="topIcon fa-brands fa-square-twitter"></i>
            </div>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'><Link className='linkNav' to='/'>HOME</Link> </li>
                    <li className='topListItem'><Link className='linkNav' to='/info'>INFO</Link></li>
                  {
                    loggedUser? (
                      <li className='topListItem'><Link className='linkNav' to='/scrivi'>SCRIVI</Link></li>
                    ) : null
                  }
                    


                    <li className='topListItem'><Link className='linkNav' to='/log'>LOGIN</Link></li>
                </ul>
            </div>
            {
              loggedUser ? (
              <div className='topRight'>
            <Link className='linkNav' to='/set'><img
                className='topImg'
                src={c} 
                alt='fotoprofilo' 
                /></Link>
            </div>) : null
            }
            
        </div>
    )
}