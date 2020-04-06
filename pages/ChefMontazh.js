import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class ChefMontazh extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid montazh">
          <div className="mycontainer section-plate">
            <div className="row p-0">
              <div className="col-12">
                <h2 className="header-min-colored">
                  Шеф-монтаж{' '}
                  <span className="dark-color">
                    газопоршневых электростанций и мини ТЭЦ
                  </span>
                </h2>
                <p className="text pb-4">
                  Специалисты нашей компании прошли обучение на предприятиях
                  MAN, Liebherr и ЯМЗ и обладают компетенцией для проведения
                  наладки оборудования производства этих компаний. Стандартная
                  программа шеф-монтажных и пусконаладочных работ включает в
                  себя.
                </p>
                <h3 className="header-min-colored">1. Монтаж и сборка</h3>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text">
                      1.1. Проверка правильности крепления агрегата к
                      фундаментной плите.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.2. Проверка наличия заземляющего контура.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.3. Проверка подвода газа, контроль давления на входе.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.4. Проверка правильности подключения электрических
                      кабелей.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.5. Проверка подключения выхлопного трубопровода с
                      последующим контролем сопротивления на выпуске.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.6. Проверка правильности подключения теплового контура.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text">
                      1.7. Оформление акта передачи для пусковых и
                      режимно-наладочных работ.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <FormPage product={serviceName} />
        </div>
        <style jsx>{`
          .montazh {
            padding-bottom: 80px;
            padding: 0;
          }
          .montazh .section-plate {
            padding: 30px;
          }
          .montazh .section-plate .text {
            display: block;
            margin-top: 0px;
            margin-bottom: 20px;
          }
          .montazh .section-plate .header-min-colored {
            margin-top: 30px;
            margin-bottom: 15px;
          }
          .montazh .section-plate .razdel-list .razdel-li .text-min {
            margin: 0;
            padding: 0;
            font-size: 14px;
            padding-bottom: 15px;
            line-height: 20px;
          }
          .montazh .section-plate .razdel-list .razdel-li .razdel-list-ul {
            padding: 0;
            font-size: 13px;
            line-height: 18px;
            display: block;
          }

          @media (min-width: 576px) {
            .montazh {
              padding-bottom: 80px;
              padding: 0;
            }
            .montazh .section-plate {
              padding: 15px;
            }
            .montazh .section-plate .header-min-colored {
              margin-top: 30px;
            }
            .montazh .section-plate .razdel-list .razdel-li .text-min {
              margin: 0;
              padding: 0;
              font-size: 16px;
              padding-bottom: 15px;
              line-height: 20px;
            }
            .montazh .section-plate .razdel-list .razdel-li .razdel-list-ul {
              padding: 0;
              font-size: 13px;
              line-height: 18px;
              display: block;
            }
          }

          @media (min-width: 1200px) {
            .montazh .section-plate .header-red {
              margin-top: 30px;
            }
            .montazh .section-plate .razdel-list .razdel-li .text-min {
              margin: 0;
              padding: 0;
              font-size: 16px;
              padding-bottom: 15px;
              padding-left: 27px;
              line-height: 24px;
            }
            .montazh .section-plate .razdel-list .razdel-li .razdel-list-ul {
              padding: 0;
              padding-left: 46px;
              font-size: 15px;
              line-height: 18px;
              display: block;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

ChefMontazh.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default ChefMontazh;
