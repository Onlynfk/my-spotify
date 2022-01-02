import React from 'react'
import "../styles/Player.css";
import Sidebar from "./Sidebar.js"
import Footer from "./Footer.js"
import Body from "./Body.js"


function Player({spotify}) {
    return (
        <div className="player">
            <div className= "player__body">
            <Sidebar/>
            <Body spotify={spotify}/>
            </div>   
        <Footer/>
        </div>
    )
}

export default Player;
