import React, { Component } from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import AskForm from '../components/form/AskForm';
import ym from 'react-yandex-metrika';

class Home extends Component {
  componentDidMount() {
    ym('hit', '/askForm');
  }
  render() {
    return (
      <div className="home">
        <Head
          title="Опросный лист - Газовые Машины"
          description="Опросный лист для заказа газовой электростанции (мини-ТЭЦ)"
        />
        <Layout>
          <AskForm />
        </Layout>
      </div>
    );
  }
}
export default Home;
