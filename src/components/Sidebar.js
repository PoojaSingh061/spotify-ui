import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom';

import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';

import { useDataLayerValue } from './DataLayer';
import SidebarOption from './SidebarOption'

import logo from '../images/white_logo.png'
import '../css/sidebar.css'

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    
    return (
        <div className="sidebar">
            <img src={logo} alt="spotify_logo" />
            <Router>
                <Link to='/' className='sidebarOptionWithIcon'><SidebarOption title='Home' Icon={HomeOutlinedIcon}/></Link>
                <Link to='/search' className='sidebarOptionWithIcon'><SidebarOption title='Search' Icon={SearchIcon}/></Link>
                <Link to='/discover_weekly' className='sidebarOptionWithIcon'><SidebarOption title='Your Library' Icon={LibraryMusicIcon}/></Link>
                <br />
                <strong className='sidebarTitle'>PLAYLISTS</strong>
                <hr />
                {playlists?.items?.map((playlist) => (
                    <SidebarOption key={playlist.id} title={playlist.name} />
                ))}
            </Router>
        </div>
    )
}

export default Sidebar
