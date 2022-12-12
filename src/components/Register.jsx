import '../style/Register.css'
import React , { Component}  from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form className='registerForm'>
                <label>Username</label>
                <input 
                type="text" 
                className='registerInput' 
                placeholder='Inserisci nome utente...'
                />
                <label>Email</label>
                <input 
                type="text" 
                className='registerInput' 
                placeholder='Inserisci la tua email...'
                />
                <label>Password</label>
                <input 
                type="password" 
                className='registerInput' 
                placeholder='Inserisci password...'
                />
                <button className='registerButton'>Register</button>        
            </form>
            <Link to='/log'><button className='registerLoginButton'>Login</button></Link>
        </div>
    )
}
