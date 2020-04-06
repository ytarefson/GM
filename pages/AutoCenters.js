import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class AutoCenters extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid vspomOborud">
          <div className="mycontainer section-plate headers">
            <div className="headers-container">
              <span className="header-min-colored">
                Стандартный состав комплекта{' '}
                <span className="dark-color">
                  проектной и рабочей документации:
                </span>
              </span>
              <p className="text">
                При необходимости проводятся инженерные изыскания:
                геодезические, геологические, экологические. Разработка
                проектной документации осуществляется в соответствии с
                постановлением Правительства РФ от 16.02.2008 г. №87 «О составе
                разделов проектной документации и требованиях к их содержанию».
              </p>
            </div>
          </div>
          <div className="container documentation">
            <div className="row">
              <div className="col-12">
                <div className="orderlist">
                  <div className="doc-point">
                    <span className="razdel">Раздел 1</span>
                    <p className="text-bold">«Пояснительная записка»</p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 2</span>
                    <p className="text-bold">
                      «Схема планировочной организации земельного участка»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 3</span>
                    <p className="text-bold">«Архитектурные решения»</p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 4 </span>
                    <p className="text-bold">
                      «Конструктивные и объемно-планировочные решения»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 5 </span>
                    <p className="text-bold">
                      «Сведения об инженерном оборудовании, о сетях
                      инженерно-технического обеспечения, перечень
                      инженерно-технических мероприятий, содержание
                      технологических решений»:
                    </p>
                    <ul className="razdel-list">
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          1. Технологическая часть
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          2. Газоснабжение.{' '}
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          3. Отопление, вентиляция и кондиционирование, тепловые
                          сети.
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          4. Водоснабжение и водоотведение.{' '}
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          5. Электроснабжение 0,4 кВ (внутренние сети)
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          6. Электроснабжение 10 кВ (внутренние и наружные сети)
                        </span>
                      </li>
                      <li className="razdel-li">
                        <span className="text-min text-black">
                          7. Автоматизация (АСУ ТП, учет э/э, тепла, газа и
                          воды)
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 6 </span>
                    <p className="text-bold">
                      «Проект организации строительства»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 7 </span>
                    <p className="text-bold">
                      «Проект организации работ по сносу или демонтажу объектов
                      капитального строительства»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 8 </span>
                    <p className="text-bold">
                      «Мероприятия по охране окружающей среды»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 9 </span>
                    <p className="text-bold">
                      «Мероприятия по обеспечению пожарной безопасности»
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 10</span>
                    <p className="text-bold">
                      Мероприятия по обеспечению соблюдения требований
                      энергетической эффективности и требований оснащенности
                      зданий, строений, сооружений приборами учета используемых
                      энергетических ресурсов.
                    </p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 11 </span>
                    <p className="text-bold">«Смета на строительство»</p>
                  </div>
                  <div className="doc-point">
                    <span className="razdel">Раздел 12 </span>
                    <p className="text-bold">
                      «Иная документация в случаях, предусмотренных федеральными
                      законами»
                    </p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">Охрана труда</p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">
                      Требования к обеспечению безопасной эксплуатации объекта
                      капитального строительства.
                    </p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">Рабочая документация.</p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">
                      Заказные спецификации на оборудование и материалы;
                    </p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">Компоновочные чертежи</p>
                  </div>
                  <div className="doc-point">
                    <p className="text-bold">Установочные чертежи.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormPage product={this.props.serviceName} />
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

AutoCenters.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;

  return { serviceName };
};

export default AutoCenters;
