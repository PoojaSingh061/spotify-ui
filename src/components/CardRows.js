import React from 'react'

import SongCard from './SongCard'

import '../css/card_row.css'

function CardRows({cardHeading, tracks}) {
    return (
        <div>
            <div className='headings'>
                <a href='/' className='cardHeading'>{cardHeading}
                </a>
                <a href='/seeAll' className='seeAll'>see all</a>
            </div>
            <div className='cardsWrap'>
                {tracks?.items?.map((track) => (
                    track.album ?
                    <SongCard key={track.id} image_url={track.album.images[0].url} list_name={track.name} details={track.artists[0].name} song_link={track.preview_url} /> :
                    <SongCard key={track.id} image_url={track.images[0].url} list_name={track.name} details={track.artists? track.artists[0].name : track.description} />
                ))}
            </div>
        </div>
    )
}

export default CardRows
