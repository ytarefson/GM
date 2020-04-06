import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class OptimalAgregates extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />

        <div className="container-fluid">
          <div className="mycontainer optimal-agregats">
            <div className="row m-0">
              <div className="col-12">
                <span className="header-min-colored">
                  Подбор агрегатов{' '}
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
                  мониторингу энергопотребления на объекте и подберут
                  оптимальную по электрической мощности мини-ТЭС.{' '}
                </p>
                <p className="text">
                  Исходя из индивидуальных особенностей каждого объекта
                  предложим мини-ТЭС с высоким напряжением генератора, либо с
                  повышающим трансформатором.
                </p>
              </div>
              <div className="col-12 col-md-4 offset-md-1">
                <div className="img-container">
                  <img
                    src="/images/services/agregates-1.jpg"
                    alt="Силовой агрегат газовой электростанции"
                    title="Силовой агрегат газопоршневой электростанции"
                  />
                </div>
              </div>
            </div>
            <div className="row m-0">
              <div className="col-12">
                <p className="text">
                  В зависимости от фактической потребности Заказчика, мы
                  комплектуем мини-ТЭС вспомогательным оборудованием, для
                  когенерации, тригенерации, производства пара, горячего
                  воздуха, кондиционирования помещений, отопления, сушки,
                  комплектное модульное РУ.{' '}
                </p>
              </div>
            </div>
          </div>
        </div>
        <FormPage product={serviceName} />
        <style jsx>{`
          .optimal-agregats {
            padding-top: 30px;
            padding-bottom: 80px;
          }
          .optimal-agregats .header-red {
            padding-left: 15px;
          }
          .optimal-agregats .text {
            margin-bottom: 15px;
            margin-top: 15px;
          }
          .optimal-agregats .img-container {
            margin-top: 15px;
            margin-bottom: 15px;
            overflow: hidden;
            display: flex;
            justify-content: center;
          }
          .optimal-agregats .img-container img {
            box-shadow: var(--box-shadow);
          }

          @media (min-width: 576px) {
            .optimal-agregats .row .col-12 {
              padding: 0;
            }
          }

          @media (min-width: 1200px) {
            .forma {
              margin-left: 0;
              margin-right: 0;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

OptimalAgregates.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default OptimalAgregates;
