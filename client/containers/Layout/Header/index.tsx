import React from 'react';

import { Menu } from './Menu';
import HeaderWrapper from './Header.style';

const Header = () => {
  return (
    <HeaderWrapper>
      <h1>Logo</h1>
      <Menu />
    </HeaderWrapper>
  );
};

export { Header };
