import React from 'react'

import CardRows from './CardRows'
import { useDataLayerValue } from './DataLayer';

import '../css/home_page.css'

function HomePage() {
    const [{tracks, newReleases, featuredPlaylists}, dispatch] = useDataLayerValue();

    return (
        <div className='homeBody'>
            <CardRows tracks={tracks} cardHeading='Recently Played' />
            <CardRows tracks={newReleases.albums} cardHeading='New Releases' />
            <CardRows tracks={featuredPlaylists.playlists} cardHeading='Featured Playlists' />
        </div>
    )
}

export default HomePage
