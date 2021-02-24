import React from 'react';

import '../css/song_row.css';

function SongRow({track, playSong}) {
    return (
        <div className='songRow' onClick={() => playSong(track.id)}>
            <div className='songInfo'>
            <img src={track.album.images[0].url} alt='track_album' />
            <div className="songRowInfo">
                <h1>{track.name}</h1>
                <span>{track.artists.map((artist) => artist.name).join(", ")}</span>
            </div>
            </div>
            <div className='album'>
            <span>{track.album.name}</span>
            </div>
        </div>
    )
}

export default SongRow
