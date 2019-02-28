import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";
import CalcPlate from "../components/calcPlate";

const Calculator = () => (
  <div>
    <Head
      title="Расчёт энергетической эффективности - Газовые Машины"
      description="Калькулятор расчёта выгоды при переходе на газопоршневые электростанции"
    />
    <Layout>
      <div className="container-fluid calculator">
        <span className="bg-calc">Калькулятор</span>
        <div className="container">
          <h1 className="header-min-colored mt-3">
            <b className="dark-color">Калькулятор</b>
            <br />
            <b>энергетической</b>
            <br />
            эффективности
          </h1>
          <span className="calc-text-2">
            Узнайте сколько мы для вас экономим ...
          </span>
        </div>
        <CalcPlate />
      </div>
    </Layout>
  </div>
);

export default Calculator;
