import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription = '';
const defaultOGURL = 'https://gmenergo.ru';
const defaultOGImage = 'https://gmenergo.ru/static/images/banner.jpg';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{props.title || ''}</title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    {/* <link rel="icon" sizes="192x192" href="/static/touch-icon.png" />
    <link rel="apple-touch-icon" href="/static/touch-icon.png" /> */}
    {/* <link rel="mask-icon" href="/static/favicon-mask.svg" color="#49B882" /> */}
    <link
      rel="icon"
      href="https://gmenergo.ru/static/images/favicon/favicon.ico"
    />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="https://gmenergo.ru/static/images/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="https://gmenergo.ru/static/images/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="https://gmenergo.ru/static/images/favicon/favicon-16x16.png"
    />
    <link
      rel="manifest"
      href="https://gmenergo.ru/static/images/favicon/site.webmanifest"
    />
    <link
      rel="mask-icon"
      href="https://gmenergo.ru/static/images/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta property="og:type" content={props.url || defaultOGURL} />
    <meta property="og:url" content={props.url || defaultOGURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <meta name="twitter:site" content={props.url || defaultOGURL} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image" content={props.ogImage || defaultOGImage} />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  </NextHead>
);

Head.propTypes = {
  title: string,
  description: string,
  url: string,
  ogImage: string
};

export default Head;
