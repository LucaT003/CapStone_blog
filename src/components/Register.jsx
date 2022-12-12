import '../style/Register.css'
import React , { useState}  from 'react';
import { Link } from 'react-router-dom';

export default function Register() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            
        }

        fetch(`http://localhost:8080/users/?username=${username}&email=${email}&password=${pass}`, options)
        .then(res => res.json())
        .then(res => console.log(res))
}
    return (
        <div className='register'>
            <span className='registerTitle'>Register</span>
            <form onSubmit={handleSubmit} className='registerForm'>
                <label>Username</label>
                <input 
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                type="text" 
                className='registerInput' 
                placeholder='Inserisci nome utente...'
                />
                <label>Email</label>
                <input 
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                type="text" 
                className='registerInput' 
                placeholder='Inserisci la tua email...'
                />
                <label>Password</label>
                <input 
                onChange={(e)=> setPass(e.target.value)}
                value={pass}
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
