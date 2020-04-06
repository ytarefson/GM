import App from 'next/app';
import React from 'react';
import globalStyles from '../style/global';
// import '../styles/style.scss';

class MyApp extends App {
  componentDidMount() {
    // Service Worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful');
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message);
        });
    }
  }
  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Component {...pageProps} />
        <style jsx global>
          {globalStyles}
        </style>
      </>
    );
  }
}

export default MyApp;
