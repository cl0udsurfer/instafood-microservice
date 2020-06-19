import React from 'react';
import { FormattedMessage } from 'react-intl';

import {
  BannerWrapper,
  BannerHeading,
  BannerSubHeading,
  BannerComponent,
} from './Banner.style';

type BannerProps = {
  imageUrl: string;
  intlTitleId: string;
  intlDescriptionId: string;
};

const Banner: React.FC<BannerProps> = ({
  imageUrl,
  intlTitleId,
  intlDescriptionId,
}) => {
  return (
    <BannerWrapper
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <BannerComponent>
        <BannerHeading>
          <FormattedMessage
            id={intlTitleId}
            defaultMessage='Set Your Title Through Language File'
            values={{ minute: 90 }}
          />
        </BannerHeading>
        <BannerSubHeading>
          <FormattedMessage
            id={intlDescriptionId}
            defaultMessage='Set Your Description Through Language File'
          />
        </BannerSubHeading>
      </BannerComponent>
    </BannerWrapper>
  );
};

export { Banner };
