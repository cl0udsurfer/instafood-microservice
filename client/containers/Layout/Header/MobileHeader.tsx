import React from 'react';
import { DrawerProvider } from 'context/drawer/drawer.provider';
import MobileDrawer from './MobileDrawer';
import {
  MobileHeaderWrapper,
  MobileHeaderInnerWrapper,
  DrawerWrapper,
  LogoWrapper,
  SearchWrapper,
} from './Header.style';

import { SearchIcon } from 'components';
import { LanguageSwitcher } from './LanguageSwitcher';

type MobileHeaderProps = {
  className?: string;
};

const MobileHeader: React.FC<MobileHeaderProps> = ({ className }) => {
  return (
    <DrawerProvider>
      <MobileHeaderWrapper>
        <MobileHeaderInnerWrapper className={className}>
          <DrawerWrapper>
            <MobileDrawer />
          </DrawerWrapper>

          <LogoWrapper>
            <h3>Logo</h3>
          </LogoWrapper>

          <LanguageSwitcher />

          <SearchWrapper className='searchIconWrapper'>
            <SearchIcon />
          </SearchWrapper>
        </MobileHeaderInnerWrapper>
      </MobileHeaderWrapper>
    </DrawerProvider>
  );
};

export default MobileHeader;
