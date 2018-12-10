import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import '../scss/style.scss';
import MainAdv from '../components/mainAdv';
import EnergyDecisions from '../components/energyDecisions';
import CalcAdv from '../components/calcAdv';
import GeneralServices from '../components/generalServices';
import Geo from '../components/geo';
import OurExp from '../components/ourExp';
import Layout from '../components/Layout';
import { Spring } from 'react-spring';

const Home = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
    {props => (
      <div className="home" style={props}>
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
    )}
  </Spring>
);

export default Home;
