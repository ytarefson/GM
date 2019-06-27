import React, { Component } from 'react';
import Router from 'next/router';
import Nav from './nav';
import Footer from './footer';
// import { Spring } from 'react-spring';
import * as gtag from '../lib/gtag';
import { YMInitializer } from 'react-yandex-metrika';
import ym from 'react-yandex-metrika';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class Layout extends Component {
  componentDidMount() {
    ym('hit', Router.router.asPath);
  }
  render() {
    return (
      <div>
        <Nav />
        <YMInitializer
          accounts={[51052037]}
          options={{
            defer: true,
            webvisor: true,
            clickmap: true,
            trackLinks: true,
            accurateTrackBounce: true,
            trackHash: true
          }}
          version="2"
        />
        {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
          {props => <div style={props}>{children}</div>}
        </Spring> */}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;

// export default ({ children }) => (
//   <div>
//     <Nav />
//     <YMInitializer
//       accounts={[51052037]}
//       options={{
//         defer: true,
//         webvisor: true,
//         clickmap: true,
//         trackLinks: true,
//         accurateTrackBounce: true,
//         trackHash: true
//       }}
//       version="2"
//     />
//     {/* <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
//       {props => <div style={props}>{children}</div>}
//     </Spring> */}
//     {children}
//     <Footer />
//   </div>
// );
