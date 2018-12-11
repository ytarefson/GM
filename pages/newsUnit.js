import React from 'react';
import Link from 'next/link';

import newsList from '../components/tables/newsList';
import Layout from '../components/Layout';
import NewsUnitPlate from '../components/news/NewsUnitPlate';

const NewsUnit = data => (
  <Layout>
    <div className="container-fluid news">
      <div className="section-plate mb-3">
        <div className="breadcrumbs">
          <Link href="/">
            <a className="crambs">Главная > </a>
          </Link>
          <Link href="/products">
            <a className="crambs">Новости > </a>
          </Link>
          <span className="crambs cramb-main">{data.data.label}</span>
        </div>
      </div>
      <div className="mycontainer">
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
