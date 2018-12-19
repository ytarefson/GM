import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import FormPage from "../components/form";
import "../scss/services/zapchasti.scss";

const Zapchasti = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid zapchasti">
      <div className="mycontainer">
        <span className="header-red">
          Категорийный перечень запчастей для <b>оперативной</b> поставки:
        </span>
        <div className="row m-0">
          <div className="col-12 col-md-6">
            <p className="text-bold">Фильтра масляные</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Фильтра воздушные</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Прокладки клапанной крышки ДВС</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Прокладки головки блока ДВС</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Свечи зажигания</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Катушки зажигания</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Свечные наконечники</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Фильтра картерных газов</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Фильтра газовые</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Регуляторы напряжения генератора</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">
              Блоки управления газовоздушным смесителем
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Блоки управления зажиганием</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Контроллеры управления ГПУ</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Моторное масло</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">Антифриз</p>
          </div>
        </div>
        <span className="text-grey">
          Всю эту номенклатуру Вы можете оперативно приобрести в нашей компании.
        </span>
      </div>
      <div className="mycontainer section-plate mt-5 p-0">
        <FormPage product={serviceName} />
      </div>
    </div>
  </Layout>
);

Zapchasti.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default Zapchasti;
