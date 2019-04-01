import React from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import AskForm from '../components/form/AskForm';

const Home = () => (
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

export default Home;
