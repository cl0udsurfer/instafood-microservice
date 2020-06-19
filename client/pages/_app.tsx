import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';

import { theme } from 'theme';
import { GlobalStyle } from 'styled/global.style';
import { Layout } from 'containers/Layout';
import { LanguageProvider } from 'context/lang/language.provider';
import { AuthProvider } from 'context/auth/auth.provider';
import { parseCookie, useDeviceType } from 'helpers';

import localEn from 'data/translations/en.json';
import localDe from 'data/translations/de.json';

import 'rc-drawer/assets/index.css';

const messages = {
  en: localEn,
  de: localDe,
};

export default function ExtendedApp({
  Component,
  pageProps,
  locale,
  userAgent,
}) {
  const deviceType = useDeviceType(userAgent);

  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider messages={messages} initLocale={locale}>
        <AuthProvider>
          <>
            <Layout deviceType={deviceType}>
              <Component {...pageProps} deviceType={deviceType} />
            </Layout>
            <GlobalStyle />
          </>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

ExtendedApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  const { req } = appContext.ctx;
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  const { locale } = parseCookie(req);
  return { ...appProps, locale, userAgent };
};
