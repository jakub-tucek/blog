import type { FC, ReactNode } from 'react';
import React from 'react';
import { Navigation } from './Navigation';
import { Footer } from './Footer';

import '../../styles/_main.scss';
import { Helmet } from 'react-helmet';
import CookieConsent from 'react-cookie-consent';

interface Props {
  wrapperClass?: string;
  children: ReactNode;
  pageHeader: ReactNode;
}

export const Layout: FC<Props> = ({ wrapperClass, children, pageHeader }) => {
  return (
    <div className={wrapperClass}>
      <Helmet title="Jakub Tucek Blogga" defer={false}>
        <meta charSet="utf-8" />
      </Helmet>
      <Navigation />
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        cookieName="gatsby-plugin-google-gtag"
        containerClasses="cookieBanner px-5"
        style={{ alignItems: 'center', background: '#558fee' }}
        buttonStyle={{ color: '#2f2f2f', background: '#fff', borderRadius: '5px', padding: '0px 10px' }}
      >
        <p className="semi-bold mb-0">Cookies</p>
        <p className="small d-inline">
          Cookies are used to analyze traffic.
        </p>
      </CookieConsent>
      <div className="header d-flex align-items-center justify-content-center">{pageHeader}</div>
      {children}
      <Footer />
    </div>
  );
};
