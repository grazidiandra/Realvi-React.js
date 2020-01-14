import React from 'react';
import { InputSearch, ContainerRepository } from './style';
import PropTypes from 'prop-types';

const SearchProfile = ({ input, method, placeholder, submitHandler}) => (
        <ContainerRepository >
          <form onSubmit={submitHandler} >
          <InputSearch type="text" placeholder={placeholder} value={input} onChange={method} />
          </form>
        </ContainerRepository>
);

SearchProfile.propTypes = {
  input: PropTypes.string,
  method: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  submitHandler: PropTypes.func.isRequired
}

export default SearchProfile;
