import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import './App.css'
import { getTokenFromUrl } from './components/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import {useDataLayerValue} from "./Datalayer";
import Player from './Player';

function App() {
  // const [token, setToken] = useState(null);
  const [{user, token}, dispatch] = useDataLayerValue();

  // useffect runs code base on a given condition
  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";
    
    const _token = hash.access_token;

    if(_token){
      // setToken(_token);

      dispatch({
        type:'SET_TOKEN',
        token:_token,
      })

      spotify.setAccessToken(_token);

      // asynchornous  call
      spotify.getMe().then(user =>{

        dispatch({
          type:'SET_USER',
          user:user
        });
      }) ; 
      
      soptify.getUserPlaylists().then((playlists) =>{
        dispatch({
          type: 'SET_PLAYLISTS',
          playlists:playlists
      })
      })
    }

  }, []); 
  console.log('I have a token  >> 👀', token);
  console.log('hey', user);
  console.log('hey token', token);



  return (
    <div className="app">
      {token ? <Player spotify={spotify}/>:  <Login/> }
     
    </div>
  )
}

export default App;
