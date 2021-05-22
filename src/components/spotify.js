import {myclientId} from '../secrets'
//zspotfity docs -setup 


// endpoints
export  const authEndpoint = "https://accounts.spotify.com/authorize/";

// redirect
const redirectUri = "http://localhost:3000/";

// my id
const clientId = myclientId;

//scopes of spotify ( what you can do with the app)
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];

export const LoginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;