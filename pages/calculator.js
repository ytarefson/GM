import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";
import CalcPlate from "../components/calcPlate";

const Calculator = () => (
  <div>
    <Head
      title="Расчёт энергетической эффективности - Газовые Машины"
      description="Калькулятор расчёта выгоды при переходе на газовые мини-ТЭЦ"
    />
    <Layout>
      <div className="container-fluid calculator">
        <span className="bg-calc">Калькулятор</span>
        <div className="mycontainer">
          <h1 className="header-razdel mt-3">
            Калькулятор
            <br />
            <b>энергетической</b>
            <br />
            эффективности
          </h1>
          <span className="calc-text-2">
            Узнайте сколько мы для вас экономим ...
          </span>

          <CalcPlate />
        </div>
      </div>
    </Layout>
  </div>
);

export default Calculator;