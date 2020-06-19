import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

type NavlinkProps = {
  label: string;
  icon?: React.ReactNode;
  iconClass?: string;
  className?: string;
  style?: any;
  intlId: string;
  onClick?: (e: any) => void;
  href?: string;
};

const Icon = styled.span`
  min-width: 16px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navlink: React.FC<NavlinkProps> = ({
  label,
  icon,
  iconClass,
  className,
  style,
  intlId,
  onClick,
  href,
}) => {
  return (
    <div onClick={onClick} className={className ? className : ''} style={style}>
      <Link href='/'>
        <a style={{ display: 'flex', alignItems: 'center' }}>
          {icon ? <Icon className={iconClass}>{icon}</Icon> : ''}

          <span className='label'>
            <FormattedMessage id={intlId} defaultMessage={label} />
          </span>
        </a>
      </Link>
    </div>
  );
};

export { Navlink };
