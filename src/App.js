import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Login from './components/Login';
import SpotifyWebApi from "spotify-web-api-js";
import { getTokenFromUrl } from './utilites/spotify';
import { userActions } from './features/userSlice';
import Player from './components/Player';



function App() {
  const dispatch = useDispatch()
  const spotify = new SpotifyWebApi();
  const { user, token, playlists } = useSelector((state) => state.data)
  console.log(user, "user info")

  useEffect(() => {
    // code...
    const hash = getTokenFromUrl();
    window.location.hash = "";

    const _token = hash.access_token;

    if (_token) {
      // setToken(_token);

      dispatch(userActions.setToken(_token));

      spotify.setAccessToken(_token);

      // asynchornous  call
      spotify.getMe().then(user => {
        dispatch(userActions.setUser(user));
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch(userActions.setPlaylists(playlists));

      })

      spotify.getPlaylist('37i9dQZEVXcNhwHJY5GeBW').then((response) => {
        dispatch(userActions.setDisoverWeekly(response));
      })
    }

  }, []);

  console.log(token)
  console.log(user)
  console.log(playlists)


  return (
    <div className="App">
      {token ? <Player /> : <Login />}
    </div>
  );
}

export default App;
