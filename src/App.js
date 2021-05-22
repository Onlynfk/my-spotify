import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import { getTokenFromUrl } from './components/spotify';

function App() {
  const [token, setToken] = useState(null);
  // useffect runs code base on a given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";
    
    const _token = hash.access_token;

    if(_token){
      setToken(_token)
    }
    console.log('I have a token  >> 👀', token);


  }, []);


  return (
    <div className="app">
      {token ? <h1> Logged in </h1> :  <Login/> }
     
    </div>
  )
}

export default App;
