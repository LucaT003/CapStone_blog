import '../style/Settings.css'
import Sidebar from './Sidebar'
import React from 'react';
import c from '../img/Fprofilo.jpg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../redux/actions';

export default function Settings() {

    const navigate = useNavigate();
    const dispatch = useDispatch();

  
    
    const loggedUser = useSelector(state => state.loggedUser.state.username);
    const email = useSelector(state => state.loggedUser.state.email);
    
          const logout = () => {
              dispatch(logoutAction())
            };

    return (
        <>
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Il tuo Account</span>
                </div>
                <form className="settingsForm">
                    <label>Immagine Profilo</label>
                    <div className='settingsPP'>
                       <img 
                       src={c} 
                       alt="fotoprfl" 
                       /> 
                       <label htmlFor="fileInput">
                       <i className="settingsPPIcon fa-solid fa-images"></i>
                       </label>
                       <input type="file" id='fileInput' style={{display:"none"}} />
                    </div>
                    <label>Username</label>
                    <p className='setp'>{loggedUser}</p>
                    <label>Email</label>
                    <p className='setp'>{email}</p>
                    <button  className='logoutbutton' onClick={()=> {logout(); navigate('/')}} >Logout</button>
                </form>
                
            </div>
            <Sidebar/>
            
        </div>
        
        </>
    )
}



