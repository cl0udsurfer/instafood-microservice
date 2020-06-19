import React from 'react';
import { openModal } from '@redq/reuse-modal';

import { MenuBox } from './Menu.style';
import { AuthForm, Button, Navlink, HelpIcon } from 'components';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { AuthContext } from 'context/auth/auth.context';

const Menu = () => {
  const {
    authState: { isAuthenticated },
    authDispatch,
  } = React.useContext<any>(AuthContext);

  const handleJoin = () => {
    authDispatch({
      type: 'SIGNIN',
    });

    openModal({
      show: true,
      overlayClassName: 'quick-view-overlay',
      closeOnClickOutside: true,
      component: AuthForm,
      closeComponent: '',
      config: {
        enableResizing: false,
        disableDragging: true,
        className: 'quick-view-modal',
        width: 458,
        height: 'auto',
      },
    });
  };

  return (
    <>
      <MenuBox>
        <Navlink
          className='menu-item'
          label='Need Help'
          intlId='navlinkHelp'
          iconClass='menu-icon'
          icon={<HelpIcon />}
          style={{ marginTop: '15px', marginRight: '20px' }}
        />
        <LanguageSwitcher />
        <Button
          title={'Sign In'}
          intlButtonId='joinButton'
          onClick={handleJoin}
        />
      </MenuBox>
    </>
  );
};

export { Menu };
