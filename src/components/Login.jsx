import '../style/Login.css'
import { Link } from 'react-router-dom';
import {React, useState} from 'react';

const Login = (props) => {

    const [pass, setPass] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
      
        e.preventDefault();
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: email, password: pass})
        }

        fetch("http://localhost:8080/auth/login", options)
        .then(res => res.json())
        .then(res => console.log(res))
    }

    return (
        <div className='login'>
            <span className='loginTitle'>Accedi</span>
            <form className='loginForm' onSubmit={(e) => handleSubmit(e)}>
                <label>Email</label>
                <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" className='loginInput' placeholder='Inserisci la tua email...'/>
                <label>Password</label>
                <input onChange={(e) => setPass(e.target.value)} value={pass} type="password" className='loginInput' placeholder='Inserisci la tua password...'/>
                <button className='loginButton'>Login</button>        
            </form>
            <Link to='/reg' ><button className='loginRegisterButton'  onClick={() => props.onFormSwitch('signup')}>Register</button></Link>
        </div>
    )
}

export default Login;