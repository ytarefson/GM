import React from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';

const OptimalAgregates = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid">
      <div className="mycontainer documentation">
        <span className="subheading-services">
          Подбор агрегатов газовых электростанций
        </span>
        <div className="row m-0">
          <div className="col-12 col-md-8">
            <p className="text-common">
              Наша компания оказывает услуги по подбору оптимального состава
              оборудования для комплектования объекта собственной генерации.
            </p>
            <p className="text-common">
              Наши специалисты, при необходимости, проведут работы по
              мониторингу энергопотребления на объекте и подберут оптимальную по
              электрической мощности мини-ТЭС.{' '}
            </p>
            <p className="text-common">
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
        <p className="text-common">
          В зависимости от фактической потребности Заказчика, мы комплектуем
          мини-ТЭС вспомогательным оборудованием, для когенерации, тригенерации,
          производства пара, горячего воздуха, кондиционирования помещений,
          отопления, сушки, комплектное модульное РУ.{' '}
        </p>
      </div>
    </div>
  </Layout>
);

OptimalAgregates.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default OptimalAgregates;
