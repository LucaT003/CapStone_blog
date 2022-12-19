import '../style/Login.css'
import { Link, useNavigate } from 'react-router-dom';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { loginAction } from '../redux/actions';

const Login = () => {

    const navigate= useNavigate()
    const dispatch= useDispatch()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: username, password: password, email: email})
        }

        fetch("http://localhost:8080/auth/login", options)
        .then(res => res.json())
        .then(res => {console.log(res);dispatch(loginAction({username:username, password:password, email:email}))})
        .then(res => navigate('/set'))
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Accedi</span>
            <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                <label>Username</label>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className='loginInput' placeholder='Inserisci la tua Username...'/>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='loginInput' placeholder='Inserisci la tua email...'/>
                <label>Password</label>
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='loginInput' placeholder='Inserisci la tua password...'/>
                <button className='loginButton'>Login</button>        
            </form>
            <Link to='/reg' ><button className='loginRegisterButton'>Register</button></Link>
        </div>
    )
}

export default Login;