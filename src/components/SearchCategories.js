import React from 'react';

import { useDataLayerValue } from './DataLayer';

import '../css/home_page.css';
import '../css/search_categories.css';

function SearchCategories() {
    const [{categories}, dispatch] = useDataLayerValue();

  return (
    <div className='homeBody'>
    <div className='extra'>
        {categories?.categories?.items?.map((category) => (
            <div key={category.id} className='tabs'>
                <h3 className='heading'>{category.name}</h3>
                <img src={category.icons[0].url} alt='' className='image'/>
            </div>        
        ))}                   
    </div>
    </div>
  );
}

export default SearchCategories
