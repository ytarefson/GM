import React from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';

const Zapchasti = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid">
      <div className="mycontainer documentation">
        <span className="subheading-services">
          Номенклатурный перечень запчастей для оперативной поставки:
        </span>
        <span className="text-grey">
          Всю эту номенклатуру Вы можете приобрести в нашей компании по
          доступной цене.
        </span>
        <div className="row m-0">
          <div className="col-12 col-md-6">
            <p className="text-bold">- Фильтра масляные</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Фильтра воздушные</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Прокладки клапанной крышки ДВС</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Прокладки головки блока ДВС</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Свечи зажигания</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Катушки зажигания</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Свечные наконечники</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Фильтра картерных газов</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Фильтра газовые</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Регуляторы напряжения генератора</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">
              - Блоки управления газовоздушным смесителем
            </p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Блоки управления зажиганием</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Контроллеры управления ГПУ</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Моторное масло</p>
          </div>
          <div className="col-12 col-md-6">
            <p className="text-bold">- Антифриз</p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

Zapchasti.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default Zapchasti;
