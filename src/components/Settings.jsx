import '../style/Settings.css'
import Sidebar from './Sidebar'
import React , { Component}  from 'react';
import c from '../img/Fprofilo.jpg';

export default function Settings() {
    return (
        <div className='settings'>
            <div className='settingsWrapper'>
                <div className='settingsTitle'>
                    <span className='settingsUpdateTitle'>Aggiorna il tuo Account</span>
                    <span className='settingsDeleteTitle'>Elimina Account</span>
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
                    <label>Nome utente</label>
                    <input type="text" placeholder="Jim"/>
                    <label>Email</label>
                    <input type="email" placeholder="jim@gmail.com"/>
                    <label>Password</label>
                    <input type="password"/>
                    <button className='settingsSubmit'>Aggiorna</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}



