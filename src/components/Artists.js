import React from 'react';

import CardRows from './CardRows';
import { useDataLayerValue } from './DataLayer';

import '../css/home_page.css';


function Artists() {
    const [{top_artists}, dispatch] = useDataLayerValue();

    return (
        <div className='homeBody'>
            <CardRows cardHeading='Artists' tracks={top_artists} />
        </div>
    )
}

export default Artists
