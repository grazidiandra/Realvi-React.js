import React from 'react';
import './style.css'

const Search = ({ value, method, placeholder}) => (
        <div className='components-searchBar'>
          <input type="text" placeholder={placeholder} value={value} onChange={method}/>
        </div>
    );

export default Search;