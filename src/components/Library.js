import React from 'react';

import CardRows from './CardRows';
import { useDataLayerValue } from './DataLayer';

import '../css/home_page.css';

export default function Library() {
    const [{playlists, featuredPlaylists}, dispatch] = useDataLayerValue();

    return (
        <div className='homeBody'>
            <CardRows cardHeading='Playlists' tracks={playlists} />
            <CardRows tracks={featuredPlaylists.playlists} cardHeading="Editor's Picks" />
        </div>
    )
}
