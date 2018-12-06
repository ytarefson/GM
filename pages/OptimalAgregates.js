import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import "../scss/services/optimal-agregats.scss";

const OptimalAgregates = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid">
      <div className="mycontainer optimal-agregats">
        <span className="header-red">
          Подбор агрегатов газовых электростанций
        </span>
        <div className="row m-0">
          <div className="col-12 col-md-8">
            <p className="text-min">
              Наша компания оказывает услуги по подбору оптимального состава
              оборудования для комплектования объекта собственной генерации.
            </p>
            <p className="text-min">
              Наши специалисты, при необходимости, проведут работы по
              мониторингу энергопотребления на объекте и подберут оптимальную по
              электрической мощности мини-ТЭС.{" "}
            </p>
            <p className="text-min">
              Исходя из индивидуальных особенностей каждого объекта предложим
              мини-ТЭС с высоким напряжением генератора, либо с повышающим
              трансформатором.
            </p>
          </div>
          <div className="col-12 col-md-4">
            <div className="img-container">
              <img src="../static/images/services/agregates-1.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="row m-0">
          <div className="col-12">
            <p className="text-min">
              В зависимости от фактической потребности Заказчика, мы комплектуем
              мини-ТЭС вспомогательным оборудованием, для когенерации,
              тригенерации, производства пара, горячего воздуха,
              кондиционирования помещений, отопления, сушки, комплектное
              модульное РУ.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

OptimalAgregates.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default OptimalAgregates;
