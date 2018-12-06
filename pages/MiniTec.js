import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import "../scss/services/minitec.scss";

const MiniTec = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid minitec">
      <div className="mycontainer">
        <p className="text-min">
          Наша компания является производителем оборудования Мини-ТЭС единичной
          электрической мощностью <b>от 30 до 2000 кВт.</b> На производственных
          площадях компании в г. Ярославле осуществляется крупноузловая сборка
          мини-ТЭС с применением комплектующих ведущих мировых производителей.
        </p>
        <p className="text-min">
          Наше производство находится под постоянным контролем технических
          специалистов концернов MAN и Liebherr, что подтверждается
          сертификатами этих компаний, выдаваемыми по результатам аудита
          производственной системы.
        </p>
        <p className="text-min">
          Нашими поставщиками являются концерны:
          <b>
            {" "}
            MAN, Liebherr, Leroy Somer, General Electric, ABB, Alfa Laval, Karl
            Dungs Gmbh, Motortech Gmbh, Grundfos, Aprovis Gmbh.
          </b>
        </p>
      </div>
      <div className="mycontainer img-wrapper">
        <div className="img-container">
          <img
            src="../static/images/services/minitec-1.jpg"
            alt=""
            className="minitec-img"
          />
        </div>
        <div className="img-container">
          <img
            src="../static/images/services/minitec-2.jpg"
            alt=""
            className="minitec-img"
          />
        </div>
      </div>
      <div className="mycontainer">
        <p className="text-min">
          В настоящее время в производственной линейке нашей компании мини – ТЭС
          на базе двигателей MAN, Liebherr и ЯМЗ. Мини-ТЭС на базе двигателей
          MAN и Liebherr отличаются высочайшей надежностью и низкими удельными
          затратами на эксплуатацию.
        </p>
        <p className="text-min">
          Мини-ТЭС на базе двигателей ЯМЗ более доступны по цене, но являются
          более требовательными к сервисному обслуживанию.
        </p>
        <p className="text-min text-bold">
          Гарантия на выпускаемые мини-ТЭС составляет 24 месяца.
        </p>
      </div>
    </div>
  </Layout>
);

MiniTec.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default MiniTec;
