import React from 'react';
import SearchIcon from "@material-ui/icons/Search";

import '../css/search_bar.css'

function SearchBar() {
    return (
        <div className='searchBar'>
            <SearchIcon />
            <input
            placeholder="Search for Artists, Songs, or Podcasts "
            type="text"
            />
        </div>
    )
}

export default SearchBar
