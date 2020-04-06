import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class VspomOborud extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid vspom-oborud">
          <div className="container">
            <div className="row">
              <div className="col-12 otstup">
                <span className="header-min-colored">
                  Перечень{' '}
                  <span className="dark-color">профильного оборудования</span>
                </span>
                <p className="text pb-4">
                  Компания "Газовые машины" занимается поставкой профильного
                  оборудования для комплектации энергетических объектов
                  различной сложности. Благодаря многолетнему сотрудничеству с
                  ведущими отечественными и иностранными производителями, мы в
                  кратчайшие сроки и по выгодной цене поможем огранизовать
                  поставку необходимых вам агрегатов.
                </p>
                <div className="tools-list-2">
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-1.jpg"
                        alt="Котлы – утилизаторы тепла"
                        title="Котлы – утилизаторы тепла"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Котлы – утилизаторы тепла, в т.ч. паровые, производства
                        компании Aprovis (Германия)
                      </p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-2.jpg"
                        alt="Абсорбционные холодильные машины"
                        title="Абсорбционные холодильные машины"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Абсорбционные холодильные машины
                      </p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-3.jpg"
                        alt="Радиаторы охлаждения"
                        title="Радиаторы охлаждения"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">Радиаторы охлаждения</p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-4.jpg"
                        alt="Промышленные низкошумные глушители"
                        title="Промышленные низкошумные глушители"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Промышленные низкошумные глушители
                      </p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-5.jpg"
                        alt="Высокотемпературные дымовые трубы"
                        title="Высокотемпературные дымовые трубы"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Высокотемпературные дымовые трубы
                      </p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-6.jpg"
                        alt="Комплектные модульные РУ 0,4-6,3-10,5-35 кВ"
                        title="Комплектные модульные РУ 0,4-6,3-10,5-35 кВ"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Комплектные модульные РУ 0,4-6,3-10,5-35 кВ
                      </p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-1.jpg"
                        alt="Модульные газовые котельные"
                        title="Модульные газовые котельные"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">Модульные газовые котельные</p>
                    </div>
                  </div>
                  <div className="tool-card">
                    <div className="img-container-22">
                      <img
                        src="/images/services/vspom-1.jpg"
                        alt="оборудование модульных газовых котельных"
                        title="Оборудование для модульных газовых котельных"
                        className="tool-card-img"
                      />
                    </div>
                    <div className="tool-card-desc">
                      <p className="text-bold">
                        Оборудование для организации параллельной работы
                        электростанций с электрическими сетями.
                      </p>
                    </div>
                  </div>
                </div>
                <span className="cta mb-5">
                  Условия и сроки поставки уточняйте у наших менеджеров
                </span>
              </div>
            </div>
          </div>
        </div>
        <FormPage product={serviceName} />
        <style jsx>{`
          .vspomOborud {
            margin-top: 30px;
          }
          .vspomOborud .headers-container {
            padding-left: 0px;
            padding-right: 0px;
          }
          .vspomOborud .headers-container .header-min-colored {
            display: block;
            padding-bottom: 15px;
            line-height: 26px;
          }
          .documentation .orderlist .doc-point {
            margin: 15px 0px;
          }

          .vspom-oborud {
            padding-left: 0;
            padding-right: 0;
            padding-bottom: 0px;
          }
          .vspom-oborud .row {
            padding-left: 15px;
            padding-right: 15px;
          }
          .vspom-oborud .row .otstup {
            display: block;
            padding-left: 15px;
            padding-right: 15px;
          }
          .vspom-oborud .row .otstup .cta {
            display: block;
            text-align: center;
            font-weight: 700;
            line-height: 28px;
            font-size: 14px;
            margin-top: 30px;
          }
          .vspom-oborud .row .otstup .header-min-colored {
            display: block;
            margin-top: 45px;
            padding-bottom: 15px;
          }
          .vspom-oborud .row .otstup .tools-list-2 {
            display: block;
            padding: 0;
            margin-top: 15px;
          }
          .vspom-oborud .row .otstup .tools-list-2 .tool-card {
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            align-items: center;
            margin-top: 15px;
          }
          .vspom-oborud
            .row
            .otstup
            .tools-list-2
            .tool-card
            .img-container-22 {
            display: block;
            width: 150px;
            height: 100%;
            background-color: green;
            overflow: hidden;
          }
          .vspom-oborud
            .row
            .otstup
            .tools-list-2
            .tool-card
            .img-container-22
            .tool-card-img {
            display: block;
          }
          .vspom-oborud .row .otstup .tools-list-2 .tool-card .tool-card-desc {
            padding: 15px;
            width: 65%;
          }
          .vspom-oborud
            .row
            .otstup
            .tools-list-2
            .tool-card
            .tool-card-desc
            .text-bold {
            font-size: 12px;
            line-height: 14px;
            font-weight: 500;
          }
          .vspom-oborud .row .otstup .tools-list-2 .tool-card:nth-child(even) {
            background-color: rgb(231, 231, 231);
          }

          .documentation .orderlist .doc-point {
            margin: 15px;
          }
          .documentation .orderlist .doc-point .razdel {
            font-style: italic;
            text-transform: uppercase;
            font-size: 12px;
            line-height: 16px;
            color: grey;
          }
          .documentation .orderlist .doc-point .text-bold {
            font-size: 14px;
          }
          .documentation .orderlist .doc-point .razdel-list {
            margin-top: 15px;
            padding: 0;
            display: flex;
            flex-direction: column;
          }
          .documentation
            .orderlist
            .doc-point
            .razdel-list
            .razdel-li
            .text-min {
            font-size: 12px;
            line-height: 16px;
          }
          .tools-list {
            display: flex;
            flex-direction: column;
          }
          .tools-list .tool-card {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
          }
          .tools-list .tool-card .img-containeer {
            max-width: 20%;
            width: 100%;
          }

          .optimal-agregats {
            padding-bottom: 80px;
          }

          @media (min-width: 576px) {
            .vspomOborud .headers-container {
              padding-left: 0px;
              padding-right: 0px;
            }
            .vspomOborud .headers-container .header-min-colored {
              display: block;
              padding-bottom: 15px;
            }
            .vspomOborud .documentation .orderlist .doc-point {
              margin: 15px 0px;
            }
            .vspom-oborud .row {
              padding: 0;
            }
            .vspom-oborud
              .row
              .otstup
              .tools-list-2
              .tool-card
              .tool-card-desc
              .text-bold {
              font-size: 15px;
              line-height: 18px;
            }
          }

          @media (min-width: 768px) {
            .vspom-oborud .cta {
              font-size: 16px;
              margin-top: 50px;
            }
            .vspom-oborud .tools-list-2 {
              padding: 0;
            }
            .vspom-oborud .tools-list-2 .tool-card .tool-card-desc {
              padding: 15px;
              padding-left: 20px;
              width: 65%;
            }
            .vspom-oborud .tools-list-2 .tool-card .tool-card-desc .text-bold {
              font-size: 14px;
              line-height: 20px;
              font-weight: 700;
            }

            .documentation .orderlist .doc-point {
              margin: 30px 15px;
            }
            .documentation .orderlist .doc-point .razdel {
              font-style: italic;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 18px;
            }
            .documentation .orderlist .doc-point .text-bold {
              font-size: 16px;
              line-height: 22px;
            }
            .documentation .orderlist .doc-point .razdel-list {
              margin-top: 15px;
              padding-left: 20px;
              display: flex;
              flex-direction: column;
            }
            .documentation
              .orderlist
              .doc-point
              .razdel-list
              .razdel-li
              .text-min {
              font-size: 13px;
              line-height: 16px;
            }
          }

          @media (min-width: 992px) {
            .vspomOborud {
              margin-top: 45px;
            }

            .vspomOborud .headers-container .header-min-colored {
              padding-bottom: 15px;
              line-height: 34px;
            }

            .vspom-oborud
              .row
              .otstup
              .tools-list-2
              .tool-card
              .tool-card-desc
              .text-bold {
              font-size: 17px;
              line-height: 22px;
            }
          }

          @media (min-width: 1200px) {
            .vspom-oborud .cta {
              font-size: 18px;
              margin-top: 50px;
            }
            .vspom-oborud .tools-list-2 {
              padding: 0;
            }
            .vspom-oborud .tools-list-2 .tool-card .tool-card-desc {
              padding: 15px;
              padding-left: 30px;
              width: 65%;
            }
            .vspom-oborud .tools-list-2 .tool-card .tool-card-desc .text-bold {
              font-size: 16px;
              line-height: 24px;
              font-weight: 700;
            }

            .documentation .orderlist .doc-point {
              margin: 30px 15px;
            }
            .documentation .orderlist .doc-point .razdel {
              font-style: italic;
              text-transform: uppercase;
              font-size: 14px;
              line-height: 20px;
            }
            .documentation .orderlist .doc-point .text-bold {
              font-size: 18px;
              line-height: 30px;
            }
            .documentation .orderlist .doc-point .razdel-list {
              margin-top: 15px;
              padding-left: 20px;
              display: flex;
              flex-direction: column;
            }
            .documentation
              .orderlist
              .doc-point
              .razdel-list
              .razdel-li
              .text-min {
              font-size: 16px;
              line-height: 24px;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

VspomOborud.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  console.log(typeof serviceName);
  console.log(serviceName);
  return { serviceName };
};

export default VspomOborud;
