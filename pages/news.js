import React, { Component } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import newsList from '../components/tables/newsList';
import Layout from '../components/Layout';
import NewsMain from '../components/news/newsMain';
import NewsListPlate from '../components/news/newsListPlate';

class News extends Component {
  render() {
    return (
      <div>
        <Head
          title="Новости малой энергетики - Газвые машины"
          description="Отраслевые достижения и новинки в области малой энергетики. Кредитные программы, события, достижения компании Газовые машины."
        />
        <Layout>
          <div className="container-fluid bg-color">
            <div className="mycontainer">
              <span className="subheading-red-top pl-3">
                Новостная лента “Газовые машины”.
              </span>
              <h1 className="header-min-colored pl-3">
                Новости малой энергетики
              </h1>
            </div>
          </div>
          <div className="container-fluid news">
            <div className="mycontainer">
              <span className="razdel-name">Последние новости:</span>
              <NewsMain />
              <span className="razdel-name">Список новостей:</span>
              <NewsListPlate />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

export default News;
