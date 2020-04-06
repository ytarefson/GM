import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const defaultDescription =
  'Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.';
const defaultOGURL = 'https://gmenergo.ru';
const defaultOGImage = '/images/favicon.ico';

const Head = props => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title ||
        'Производство газопоршневых электростанций - Газовые Машины'}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
    <link rel="icon" href="/images/favicon.ico" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/images/favicon-16x16.png"
    />
    <link rel="manifest" href="/images/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/images/safari-pinned-tab.svg"
      color="#5bbad5"
    />

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
