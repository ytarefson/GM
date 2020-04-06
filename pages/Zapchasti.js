import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

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
        <style jsx>{`
          .zapchasti {
            padding: 0;
            padding-bottom: 80px;
          }
          .zapchasti .text {
            padding: 5px 0px 5px 25px;

            position: relative;
          }
          .zapchasti .text::before {
            display: block;
            content: '';
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: var(--accent-red);
            border-radius: 10px;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            box-shadow: var(--box-shadow);
          }
          .zapchasti .text-grey {
            margin-top: 45px;
            padding-left: 15px;
            padding-right: 15px;
            display: block;
            font-size: 14px;
            color: #cb4828;
            text-align: center;
          }

          @media (min-width: 576px) {
            .zapchasti .col-12 {
              padding-left: 0;
              padding-right: 0;
            }
            .zapchasti .col-12 .text-grey {
              font-weight: 700;
              font-size: 16px;
              color: #cb4828;
            }
          }

          @media (min-width: 768px) {
            .zapchasti .text-grey {
              font-weight: 700;
              font-size: 20px;
              color: #cb4828;
            }
          }

          @media (min-width: 1200px) {
            .zapchasti {
              padding-top: 30px;
            }
            .zapchasti .text {
              padding: 8px 0px 8px 35px;
            }
            .zapchasti .text-grey {
              font-weight: 700;
              font-size: 24px;
              color: rgb(66, 66, 66);
            }
          }
        `}</style>
      </Layout>
    );
  }
}

Zapchasti.getInitialProps = async function (context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default Zapchasti;
