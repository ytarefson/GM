import React from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import YoutubeVideo from '../YoutubeVideo';

const YV = () => (
  <div>
    <Head
      title="Распределенная генерация"
      description="Распределенная генерация - новая современная технология!"
    />

    <Layout>
      <YoutubeVideo />
    </Layout>
  </div>
);

export default YV;
