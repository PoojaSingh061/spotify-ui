import React from 'react';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Avatar } from '@material-ui/core';

import { useDataLayerValue } from './DataLayer';
import SearchBar from './SearchBar';

import '../css/header.css';

function Header() {
    const [{user}, dispatch] = useDataLayerValue();
    return (
        <div className='header'>
            <div className='headerLeft'>
                <ArrowBackIosIcon fontSize='small' className='back'/>
                <ArrowForwardIosIcon fontSize='small' className='next'/>
            </div>
            <div className='headerRight'>
                <div className='userAvatar'>
                    <Avatar src={user?.images[0]?.url} alt={user?.display_name}/>
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
        </div>
    )
}

export default Header
