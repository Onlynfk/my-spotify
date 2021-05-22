import React from 'react'
import './Login.css';
import { LoginUrl } from './spotify';

function Login() {
    return (
        <div className="login">
            
            <img alt="spotify" src="https://www.pngkey.com/png/full/788-7885953_we-distribute-playlist-for-spotify-logo-on-black.png"/>
            
            <a href={LoginUrl}> Login with Spotify</a>
        </div>
    )
}

export default Login;
