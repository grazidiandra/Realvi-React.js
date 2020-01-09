import React from 'react';
import { InpuSearch } from './style.js';

const Search = ({ value, method, placeholder}) => (
        <div>
          <InpuSearch type="text" placeholder={placeholder} value={value} onChange={method}/>
        </div>
    );

export default Search;
