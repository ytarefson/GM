import React from 'react';
import Router from 'next/router';
import Nav from './nav';
import Footer from './footer';

import * as gtag from '../lib/gtag';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default ({ children }) => (
  <div>
    <Nav />
    {children}
    <Footer />
  </div>
);
