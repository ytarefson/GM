import React from 'react';
import Head from '../components/head';
import MainAdv from '../components/mainAdv';
import PortfolioLinks from '../components/portfolioLinks';
import EnergyDecisions from '../components/energyDecisions';
import CalcAdv from '../components/calcAdv';
import GeneralServices from '../components/generalServices';
import ProductsAdv from '../components/productsAdv';
import Layout from '../components/Layout';
import FormPage from '../components/form';
import TextBlock from '../components/textBlock';
import NewsAdv from '../components/newsAdv';
import JumboAskForm from '../components/JumboAskForm';

function Home() {
  return (
    <>
      <Head url="https://gmenergo.ru" ogImage="/images/favicon.ico" />
      <Layout>
        <MainAdv />
        <JumboAskForm />
        <ProductsAdv />
        <PortfolioLinks />
        <TextBlock />
        <GeneralServices />
        <NewsAdv />
        <EnergyDecisions />
        <FormPage />
        <CalcAdv />
      </Layout>
    </>
  );
}

export default Home;
