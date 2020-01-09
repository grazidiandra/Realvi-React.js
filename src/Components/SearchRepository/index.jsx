import React from 'react';
import { InputSearch, ContainerRepository } from './style'

const SearchRepository = ({ value, method, placeholder, submitHandler}) => (
        <ContainerRepository >
          <form onSubmit={submitHandler} >
          <InputSearch type="text" placeholder={placeholder} value={value} onChange={method} />
          </form>
        </ContainerRepository>
    );

export default SearchRepository;
