import {myclientId} from '../secrets'
//zspotfity docs -setup 


// endpoints
export  const authEndpoint = "https://accounts.spotify.com/authorize/";

// redirect
const redirectUri = "http://localhost:3000/";

// add your spotify client id
const clientId = myclientId;

//scopes of spotify ( what you can do with the app)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];


// pull my access token
export const getTokenFromUrl = () =>{
    return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial, item) =>{
        let parts = item.split('=');
        initial[parts[0]]= decodeURIComponent(parts[1])

        return initial;

    }, {})

}

//http://localhost:3000/#access_token=BQB-5_B5aeNl9KJFZG9lAC6yVbfLOeZXchD6gDxmRivv6DDggPe6T2IEjISTXcU_39qg-QOI0hyxxj9atABg8ZFn1lYN4cH9G_f7WcsxzG_fN_HTkNBWW0KENf0TC8ETwTysp3jakMRtYexgz1FIcwB2I7U5MLkQ9VzBBLWWnszMpRwlGRGC&token_type=Bearer&expires_in=3600
export const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;