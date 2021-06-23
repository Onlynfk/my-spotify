import React from 'react';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import {useDataLayerValue} from "./Datalayer";


function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue()
    return (
        <div className="sidebar">
        <img className="sidebar__logo" src="http://getheavy.com/wp-content/
        uploads/2019/12/spotify2019-830x350.jpg
        " alt="spotify logo" />

        <SidebarOptions Icon={HomeIcon} option="Home" />
        <SidebarOptions Icon={SearchIcon} option="Search" />
        <SidebarOptions Icon={LibraryMusicIcon} option="Your Library" />

        <strong className="sidebar__title">PlayLists</strong>
        <hr/>
        
        {playlists?.items?.map(playlist=>{
          <SidebarOptions title={playlist.name}/>
        })}
        
    


        </div>
    )
}

export default Sidebar;
