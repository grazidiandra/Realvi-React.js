import React from 'react';
import { HeaderNav, ImgNav } from './style';

const Header = () => (
  <HeaderNav className="header"> 
    <ImgNav className="header-img" alt='githubimg' src='/img/github.png' />
    GitHub | My  repositories
  </HeaderNav>
)

export default Header;
