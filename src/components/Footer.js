import React from 'react'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious'
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import "../styles/Footer.css";
import { Grid, Slider } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from "@material-ui/icons/VolumeDown"

function Footer() {
    return (
        <div className="footer">
            {/* <h1> I am Footer</h1>   */}

            <div className="footer__left">
                <img 
                className='footer__ablumLogo'
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwy5qD2ytcbxkCkWkdz0V9ZNTEO1levGuFX4cgdjkCZ2MaTurDNR5GmRrlG3ReLjY5dok&usqp=CAU" alt="hh" />
                <div className='footer_songInfo'>
                    <h4>Vacation</h4>
                    <p>Dirty Heads</p>

                </div>
            </div>

            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon className="footer__icon large" />
                <SkipNextIcon clas sName='footer__icon' />
                <RepeatIcon className='footer__green' />

            </div>

            <div className="footer__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />

                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />

                    </Grid>
                    <Grid item>
                        <Slider aria-labelledby="continous-slide" />

                    </Grid>
                </Grid>


            </div>

        </div>

    )
}

export default Footer;
