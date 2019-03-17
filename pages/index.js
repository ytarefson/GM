import React from "react";
import "../scss/style.scss";
import Head from "../components/head";
import MainAdv from "../components/mainAdv";
import PortfolioLinks from "../components/portfolioLinks";
import TextBlock from "../components/textBlock";
import NewsAdv from "../components/newsAdv";
import EnergyDecisions from "../components/energyDecisions";
import CalcAdv from "../components/calcAdv";
import GeneralServices from "../components/generalServices";
import ProductsAdv from "../components/productsAdv";
import Layout from "../components/Layout";

const Home = () => (
  <div className="home">
    <Head
      title="Производство газопоршневых электростанций - Газовые Машины"
      description="Проектирование, производство и шефмонтаж газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров."
    />
    <Layout>
      <MainAdv />
      <PortfolioLinks />
      <TextBlock />
      <NewsAdv />
      <EnergyDecisions />
      <CalcAdv />
      <ProductsAdv />
      <GeneralServices />
    </Layout>
  </div>
);

export default Home;
