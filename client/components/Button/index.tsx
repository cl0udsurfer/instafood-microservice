import React from 'react';
import { FormattedMessage } from 'react-intl';

import ButtonStyle from './Button.style';

type ButtonProps = {
  title: string;
  intlButtonId?: string;
  onClick?: (e: any) => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  intlButtonId,
  onClick,
  disabled,
  loading,
}) => {
  return (
    <ButtonStyle onClick={onClick}>
      <span className='btn-text'>
        {loading ? (
          'Loading...'
        ) : (
          <FormattedMessage
            id={intlButtonId ? intlButtonId : 'intlButtonId'}
            defaultMessage={title}
          />
        )}
      </span>
    </ButtonStyle>
  );
};

Button.defaultProps = {
  disabled: false,
  loading: false,
};

export { Button };
