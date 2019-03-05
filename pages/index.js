import React from "react";
import "../scss/style.scss";
import Head from "../components/head";
import MainAdv from "../components/mainAdv";
import PortfolioLinks from "../components/portfolioLinks";
import EnergyDecisions from "../components/energyDecisions";
import CalcAdv from "../components/calcAdv";
import GeneralServices from "../components/generalServices";
import ProductsAdv from "../components/productsAdv";
import Layout from "../components/Layout";

const Home = () => (
  <div className="home">
    <Head
      title="Производство газовых электростанций - Газовые Машины"
      description='"Газовые машины" занимаются проектированием, производством и шефмонтажем  газопоршневых электростанций и мини ТЭЦ. Услуги по обслуживанию, пусконаладке и комплектации автономных энергоцентров.'
    />

    <Layout>
      <MainAdv />
      <PortfolioLinks />
      <EnergyDecisions />
      <CalcAdv />
      <ProductsAdv />
      <GeneralServices />
    </Layout>
  </div>
);

export default Home;
