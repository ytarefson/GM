import React from 'react';
import Link from 'next/link';

import newsList from '../components/tables/newsList';
import Layout from '../components/Layout';
import NewsUnitPlate from '../components/news/NewsUnitPlate';

const NewsUnit = data => (
  <Layout>
    <div className="container-fluid news">
      <div className="mycontainer">
        <span className="subheading-red-top">
          Новостная лента “Газовые машины”.
        </span>
        <h2 className="header-razdel">
          Наука, технологии, события, достижения...
        </h2>
        <NewsUnitPlate data={data} />
      </div>
    </div>
  </Layout>
);

NewsUnit.getInitialProps = async function(context) {
  const { id } = context.query;
  const data = newsList[id];
  console.log(data);
  return { data };
};

export default NewsUnit;
