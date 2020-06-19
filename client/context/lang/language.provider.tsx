import React, { useState, createContext, useContext } from 'react';

import { IntlProvider } from 'react-intl';
import Cookie from 'js-cookie';

const LanguageContext = createContext({} as any);

export const LanguageProvider = ({ children, messages, initLocale }) => {
  const [locale, setLocale] = useState(initLocale ?? 'en');
  const changeLanguage = (newLocale): void => {
    setLocale(newLocale);
    document.documentElement.lang = newLocale;
    Cookie.set('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLocale = () => useContext(LanguageContext);
