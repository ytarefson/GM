import React from 'react';
import Head from '../components/head';
import '../scss/style.scss';
import MainAdv from '../components/mainAdv';
import EnergyDecisions from '../components/energyDecisions';
import CalcAdv from '../components/calcAdv';
import GeneralServices from '../components/generalServices';
import Geo from '../components/geo';
import OurExp from '../components/ourExp';
import Layout from '../components/Layout';

const Home = () => (
  <div className="home">
    <Head
      title="Газовые машины!"
      description="Газовые машины - современная компания с собственным производством!"
    />

    <Layout>
      <MainAdv />
      <EnergyDecisions />
      <CalcAdv />
      <GeneralServices />
      <Geo />
      <OurExp />
    </Layout>
  </div>
);

export default Home;
