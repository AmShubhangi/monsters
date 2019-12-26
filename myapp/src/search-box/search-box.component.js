import React from 'react';
import '../search-box/search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => {
    return (<div>
        <input type="search" className='search' onChange={handleChange}
            placeholder={placeholder} />
    </div>)
}