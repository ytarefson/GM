import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import FormPage from "../components/form";
import "../scss/services/optimal-agregats.scss";

const OptimalAgregates = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div>
      <div className="container-fluid">
        <div className="mycontainer optimal-agregats">
          <div className="row m-0">
            <div className="col-12">
              <span className="header-min-colored">
                Подбор агрегатов{" "}
                <span className="dark-color">газовых электростанций</span>
              </span>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12 col-md-7">
              <p className="text">
                Наша компания оказывает услуги по подбору оптимального состава
                оборудования для комплектования объекта собственной генерации.
              </p>
              <p className="text">
                Наши специалисты, при необходимости, проведут работы по
                мониторингу энергопотребления на объекте и подберут оптимальную
                по электрической мощности мини-ТЭС.{" "}
              </p>
              <p className="text">
                Исходя из индивидуальных особенностей каждого объекта предложим
                мини-ТЭС с высоким напряжением генератора, либо с повышающим
                трансформатором.
              </p>
            </div>
            <div className="col-12 col-md-4 offset-md-1">
              <div className="img-container">
                <img
                  src="../static/images/services/agregates-1.jpg"
                  alt="Силовой агрегат газовой электростанции"
                />
              </div>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-12">
              <p className="text">
                В зависимости от фактической потребности Заказчика, мы
                комплектуем мини-ТЭС вспомогательным оборудованием, для
                когенерации, тригенерации, производства пара, горячего воздуха,
                кондиционирования помещений, отопления, сушки, комплектное
                модульное РУ.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <FormPage product={serviceName} />
    </div>
  </Layout>
);

OptimalAgregates.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default OptimalAgregates;
