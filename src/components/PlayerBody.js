import React from 'react'

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import SongList from './SongList';

import '../css/player_body.css'

function PlayerBody({spotify, itemList}) {

    return (
        <div className="body">
            <div className='bodyInfo'>
                <img src={itemList?.images[0].url} alt="itemList" />
                <div className='bodyInfoText'>
                    <span><strong>{itemList?.type.toUpperCase()}</strong></span>
                    <h2>{itemList?.name}</h2>
                    <span>{itemList?.description}</span>
                </div>
            </div>
            <div className='icons'>
                <PlayCircleFilledIcon className='shuffleIcon'/>
                <FavoriteBorderIcon fontSize='large' />
                <MoreHorizIcon />
            </div>
            <SongList spotify={spotify} itemList={itemList}/>
        </div>
    )
}

export default PlayerBody
