import React from 'react';
import { InputSearch, ContainerRepository } from './style'

const SearchRepository = ({ input, method, placeholder, submitHandler}) => (
        <ContainerRepository >
          <form onSubmit={submitHandler} >
          <InputSearch type="text" placeholder={placeholder} value={input} onChange={method} />
          </form>
        </ContainerRepository>
    );

export default SearchRepository;
