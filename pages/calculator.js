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
        {/* <span className="bg-calc">Калькулятор</span> */}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="calc-header mt-3">
                Калькулятор энергетической эффективности
              </h1>
              <span className="calc-text-2">
                Узнайте сколько мы для вас экономим ...
              </span>
            </div>
          </div>
        </div>
        <CalcPlate />
      </div>
    </Layout>
  </div>
);

export default Calculator;
