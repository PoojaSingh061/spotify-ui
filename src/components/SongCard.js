import React from 'react';

import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";

import '../css/song_card.css';

function SongCard({list_name, image_url, details, song_link}) {

    return (
        <div className='songCard'>
            <div className='cardImage'>
                <img src={image_url} alt='album' />
                <a href={song_link} >
                    <PlayCircleFilledIcon className='playIcon'  />
                </a>
            </div>
            <div className='cardDetails'>
                <a href={song_link} >
                    <div>{list_name}</div>
                </a>
                <span>{details}</span>
            </div>

        </div>
    )
}

export default SongCard
