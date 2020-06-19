import React from 'react';
import { FormattedMessage } from 'react-intl';

import { useLocale } from 'context/lang/language.provider';
import { Box, SelectedItem, Flag, MenuItem } from './LanguageSwitcher.style';
import { Popover, DEFlag, USFlag } from 'components';

const LANGUAGES = [
  { id: 'en', label: 'English', intlLangName: 'intlEnglish', icon: <USFlag /> },
  { id: 'de', label: 'German', intlLangName: 'intlGerman', icon: <DEFlag /> },
];

const LanguageMenu = ({ changeLanguage }) => {
  return (
    <>
      {LANGUAGES.map((item) => {
        return (
          <MenuItem
            onClick={() => changeLanguage(item.id)}
            key={item.id}
            value={item.id}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </MenuItem>
        );
      })}
    </>
  );
};

const LanguageSwitcher: React.FC = () => {
  const { locale, changeLanguage } = useLocale();
  const selectedLanguage = LANGUAGES.find((lang) => lang.id === locale);

  return (
    <Box>
      <Popover
        className='right'
        handler={
          <SelectedItem>
            <Flag>{selectedLanguage?.icon}</Flag>
            <span>
              <FormattedMessage
                id={selectedLanguage?.intlLangName}
                defaultMessage={selectedLanguage?.label}
              />
            </span>
          </SelectedItem>
        }
        content={<LanguageMenu changeLanguage={changeLanguage} />}
      />
    </Box>
  );
};

export { LanguageSwitcher };
