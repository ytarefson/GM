import React, { Component } from 'react';
import Link from 'next/link';
import newsList from '../components/tables/newsList';
import Layout from '../components/Layout';
import NewsUnitPlate from '../components/news/NewsUnitPlate';

class NewsUnit extends Component {
  render() {
    const { data } = this.props;
    return (
      <Layout>
        <div className="container-fluid news pt-3">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs ml-0">
                  <Link href="/">
                    <a className="crambs">Главная > </a>
                  </Link>
                  <Link href={{ pathname: '/news' }} as="/novosti">
                    <a className="crambs">Новости > </a>
                  </Link>
                  <span className="crambs cramb-main">{data.label}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <NewsUnitPlate data={data} />
          </div>
        </div>
      </Layout>
    );
  }
}
NewsUnit.getInitialProps = async function(context) {
  const { id } = context.query;
  //const data = newsList.filter(item => item.id === id);
  const data = newsList[id];
  return { data };
};

export default NewsUnit;
