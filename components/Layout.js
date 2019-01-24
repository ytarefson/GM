import React from 'react';
import Router from 'next/router';
import Nav from './nav';
import Footer from './footer';
import { Spring } from 'react-spring';
import * as gtag from '../lib/gtag';
import { YMInitializer } from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

export default ({ children }) => (
  <div>
    <Nav />
    <YMInitializer accounts={[51052037]} />
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {props => <div style={props}>{children}</div>}
    </Spring>
    <Footer />
  </div>
);
