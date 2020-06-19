import React from 'react';

import { Header } from './Header';
import MobileHeader from './Header/MobileHeader';

import { LayoutWrapper } from './Layout.style';

type LayoutProps = {
  deviceType: {
    mobile: boolean;
    tablet: boolean;
    desktop: boolean;
  };
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutWrapper>
      <MobileHeader className='sticky desktop home' />
      <Header />
      {children}
    </LayoutWrapper>
  );
};

export { Layout };
