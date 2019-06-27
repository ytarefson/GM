import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';
import '../scss/services/zapchasti.scss';

class Zapchasti extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid zapchasti">
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 pt-4 pb-4">
                <span className="header-min-colored">
                  Категорийный перечень запчастей{' '}
                  <span className="dark-color">для оперативной поставки:</span>
                </span>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Фильтра масляные</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Фильтра воздушные</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Прокладки клапанной крышки ДВС</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Прокладки головки блока ДВС</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Свечи зажигания</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Катушки зажигания</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Свечные наконечники</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Фильтра картерных газов</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Фильтра газовые</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Регуляторы напряжения генератора</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">
                  Блоки управления газовоздушным смесителем
                </p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Блоки управления зажиганием</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Контроллеры управления ГПУ</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Моторное масло</p>
              </div>
              <div className="col-12 col-md-6">
                <p className="text">Антифриз</p>
              </div>
            </div>
            <span className="text-grey">
              Эту номенклатуру Вы можете оперативно приобрести в нашей компании.
            </span>
          </div>
          <div className="mycontainer section-plate mt-5 p-0">
            <FormPage product={serviceName} />
          </div>
        </div>
      </Layout>
    );
  }
}

Zapchasti.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default Zapchasti;
