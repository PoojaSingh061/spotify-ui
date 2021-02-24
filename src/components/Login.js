import React from 'react';

import { loginURL } from '../spotify';

import logo from '../images/black_logo.png';
import '../css/login.css';

function Login() {
    return (
        <div className="login">
            <img src={logo} alt="spotify_logo"/>
            <a href={loginURL}><h5>LOGIN WITH SPOTIFY</h5></a>
        </div>
    )
}

export default Login
