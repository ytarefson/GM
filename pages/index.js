import React, { Component } from 'react';
import '../scss/style.scss';
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

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Head
          title="Производство газопоршневых электростанций - Газовые Машины"
          description="Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров."
        />
        <Layout>
          <MainAdv />
          <ProductsAdv />
          <PortfolioLinks />
          <TextBlock />
          <NewsAdv />
          <EnergyDecisions />
          <CalcAdv />
          <GeneralServices />
          <FormPage />
        </Layout>
      </div>
    );
  }
}

export default Home;
