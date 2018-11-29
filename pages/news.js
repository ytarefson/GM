import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import newsList from '../components/tables/newsList';
import Layout from '../components/Layout';
import NewsMain from '../components/news/newsMain';
import NewsListPlate from '../components/news/newsListPlate';

const News = () => (
  <div>
    <Head
      title="Новости - Газовые Машины"
      description='Подбробная информация о деятельности компании ООО "Газовые машины"'
    />
    <Layout>
      <div className="container-fluid news">
        <div className="mycontainer">
          <span className="subheading-red-top">
            Новостная лента “Газовые машины”.
          </span>
          <h2 className="header-razdel">
            Наука, технологии, события, достижения...
          </h2>

          <NewsMain />
          <NewsListPlate />
        </div>
      </div>
    </Layout>
  </div>
);

export default News;
