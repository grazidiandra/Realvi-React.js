import React from 'react';
import { InpuSearch } from './style.js';
import PropTypes from 'prop-types';

const Search = ({ value, method, placeholder}) => (
        <div>
          <InpuSearch type="text" placeholder={placeholder} value={value} onChange={method}/>
        </div>
);

Search.propTypes = {
  value: PropTypes.string,
  method: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

export default Search;
