import React, { useContext } from 'react';
import { openModal } from '@redq/reuse-modal';
import { Scrollbars } from 'react-custom-scrollbars';

import { AuthForm, Drawer, Button, Navlink, CloseIcon } from 'components';
import { DrawerContext } from 'context/drawer/drawer.context';
import {
  HamburgerIcon,
  DrawerContentWrapper,
  DrawerClose,
  DrawerProfile,
  LogoutView,
  DrawerMenu,
  DrawerMenuItem,
} from './Header.style';

const DrawerMenuItems = [
  {
    id: 1,
    intlLabelId: 'navLinkHome',
    label: 'Home',
    href: '/',
  },
  {
    id: 2,
    intlLabelId: 'navlinkCheckout',
    label: 'Checkout',
    href: '/',
  },
  {
    id: 3,
    label: 'Checkout Second',
    intlLabelId: 'alternativeCheckout',
    href: '/',
  },
  {
    id: 4,
    intlLabelId: 'navlinkProfile',
    label: 'Profile',
    href: '/',
  },
  {
    id: 5,
    intlLabelId: 'sidebarYourOrder',
    label: 'Order',
    href: '/',
  },
  {
    id: 6,
    intlLabelId: 'navlinkOrderReceived',
    label: 'Received',
    href: '/',
  },
  {
    id: 7,
    intlLabelId: 'navlinkHelp',
    label: 'Help',
    href: '/',
  },
  {
    id: 8,
    intlLabelId: 'navlinkOffer',
    label: 'Offer',
    href: '/',
  },
];

const MobileDrawer: React.FC = () => {
  const { state, dispatch } = useContext<any>(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: 'TOGGLE',
    });
  }, [dispatch]);

  return (
    <Drawer
      width='316px'
      drawerHandler={
        <HamburgerIcon>
          <span />
          <span />
          <span />
        </HamburgerIcon>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      closeButton={
        <DrawerClose>
          <CloseIcon />
        </DrawerClose>
      }
    >
      <DrawerContentWrapper>
        <DrawerProfile>
          <LogoutView>
            <Button intlButtonId='mobileSignInButtonText' title='Join In' />
          </LogoutView>
        </DrawerProfile>

        <DrawerMenu>
          {DrawerMenuItems.map((item) => (
            <DrawerMenuItem key={item.id}>
              <Navlink
                onClick={toggleHandler}
                href={item.href}
                label={item.label}
                intlId={item.intlLabelId}
                className='drawer_menu_item'
              />
            </DrawerMenuItem>
          ))}
        </DrawerMenu>
      </DrawerContentWrapper>{' '}
    </Drawer>
  );
};

export default MobileDrawer;
