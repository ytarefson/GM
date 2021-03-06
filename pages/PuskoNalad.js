import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class PuskoNalad extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid pusko-naladka">
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 pt-2 pb-4">
                <p className="text">
                  Специалисты нашей компании прошли обучение на предприятиях
                  MAN, Liebherr и ЯМЗ и обладают компетенцией для проведения
                  наладки оборудования производства этих компаний. Стандартная
                  программа шеф-монтажных и пусконаладочных работ включает в
                  себя.
                </p>
                <h2 className="header-min-colored">1. Электростанция</h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big">1.1. Электростанция:</p>
                    <ul className="razdel-list-ul">
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка функционирования основных систем.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка наличия охлаждающей смеси в контурах
                          электростанций.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">Проверка наличия масла.</p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка подключения управляющего напряжения 24 В.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка подключения напряжения собственных нужд
                          220/380 В.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка функционирования зарядного устройства АКБ.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка функционирования хода водяных насосов.
                        </p>
                      </li>
                      <li className="razdel-ul-li">
                        <p className="text-italic">
                          Проверка питания розеток 230 В в шкафах.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big text-black">1.2. Проверка работы:</p>
                  </div>
                  <div className="razdel-li">
                    <p className="text text-black">1.2.1. Ручной пуск.</p>
                  </div>
                  <div className="razdel-li">
                    <p className="text text-black">1.2.2. Ручной останов.</p>
                  </div>
                  <div className="razdel-li">
                    <p className="text text-black">
                      1.2.3. Проверка силовых шкафов.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text text-black">
                      1.2.4. Проверка управления шкафов.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text text-black">
                      1.2.5. Проверка срабатывания защит мотора.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-italic pb-2">
                      Проверка работы мотора без нагрузки.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-italic">
                      Проверка работы мотора под нагрузкой.
                    </p>
                  </div>
                </div>

                <h2 className="header-min-colored">
                  2. Система газоснабжения:
                </h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big">
                      2.1. Проверка работы центрального электромагнитного
                      клапана.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      2.2. Проверка и настройка работы регуляторов давления.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      2.3. Проверка и настройка работы сбросного устройства.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      2.4. Проверка на утечки в газопроводе.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      2.5. Проверка подключения выхлопного трубопровода с
                      последующим контролем сопротивления на выпуске.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      2.6. Проверка работы измерителя давления газа.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-italic">
                      Проверка работы технического учета газа.
                    </p>
                  </div>
                </div>

                <h2 className="header-min-colored">
                  3. Система утилизации тепла{' '}
                </h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big">
                      3.1. Проверка герметичности трубопроводов
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      3.2. Настройка работы моторных приводов
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      3.3. Настройка уставок включения и выключения байпасных
                      линий
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      3.4. Настройка аварийных установок
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      3.5. Контроль автоматической работы при различных
                      нагрузках
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">3.6. Имитация аварийных ситуаций</p>
                  </div>
                </div>
                <h2 className="header-min-colored">
                  4. Система охлаждения установок:
                </h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big">4.1. Проверка герметичности.</p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      4.2. Настройка моментов включения вентиляторов.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      4.3. Настройка разницы температур прямого и обратного
                      трубопроводов.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      4.4. Контроль работы расширительного бака.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      4.5. Измерение давления в системе охлаждения.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      4.6. Измерение температуры в системе охлаждения.
                    </p>
                  </div>
                </div>

                <h2 className="header-min-colored">
                  5. Система управления КГПУ:
                </h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big">
                      5.1. Проверка работы контроллеров.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      5.2. Проверка работы системы запрета выдачи мощности в
                      сеть.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      5.3. Настройка параметров параллельной работы станции с
                      внешней сетью.
                    </p>
                  </div>
                </div>
                <h2 className="header-min-colored">
                  6. Техническое обслуживание после обкатки 72 часа:
                </h2>
                <div className="razdel-list">
                  <div className="razdel-li">
                    <p className="text-big"> 6.1. Замена моторного масла.</p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      6.2. Промывка фильтра центробежной очистки масла.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      6.3. Проверка, регулировка угла опережения зажигания
                      стробоскопом.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      6.4 Протяжка внешних резьбовых соединения.
                    </p>
                  </div>
                  <div className="razdel-li">
                    <p className="text-big">
                      6.5. Проверка, регулировка зазоров клапанного механизма.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormPage product={serviceName} />
        <style jsx>{`
          .pusko-naladka {
            margin: 0;
            padding: 0;
            padding-bottom: 30px;
          }
          .pusko-naladka .section-plate {
            padding: 30px;
          }
          .pusko-naladka .section-plate .row .col-12 {
            padding: 0;
          }
          .pusko-naladka .section-plate .row .col-12 .header-min-colored {
            margin-top: 30px;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .text-big {
            padding-bottom: 7px;
            line-height: 22px;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .text {
            padding-bottom: 7px;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .razdel-list-ul {
            padding: 0;
            font-size: 13px;
            line-height: 18px;
            display: block;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .razdel-list-ul
            .razdel-ul-li {
            padding: 0;
            padding-bottom: 10px;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .razdel-list-ul
            .razdel-ul-li
            .text-italic {
            display: block;
            position: relative;
            padding-left: 25px;
          }
          .pusko-naladka
            .section-plate
            .row
            .col-12
            .razdel-list
            .razdel-li
            .razdel-list-ul
            .razdel-ul-li
            .text-italic::before {
            display: block;
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            background-color: var(--accent-red);
            border-top-left-radius: 10px;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
          }

          @media (min-width: 576px) {
            .pusko-naladka .section-plate {
              padding: 15px;
            }
          }

          @media (min-width: 992px) {
            .pusko-naladka .section-plate .row .col-12 {
              padding: 0;
            }
            .pusko-naladka .section-plate .row .col-12 .header-min-colored {
              margin-top: 30px;
            }
            .pusko-naladka
              .section-plate
              .row
              .col-12
              .razdel-list
              .razdel-li
              .text-big {
              padding-bottom: 7px;
              font-size: 20px;
              line-height: 26px;
            }

            .pusko-naladka
              .section-plate
              .row
              .col-12
              .razdel-list
              .razdel-li
              .razdel-list-ul
              .razdel-ul-li
              .text-italic {
              display: block;
              position: relative;
              padding-left: 25px;
              line-height: 26px;
            }
          }

          @media (min-width: 1200px) {
            .pusko-naladka .section-plate {
              padding: 15px;
            }
            .pusko-naladka .section-plate .header-red {
              margin-top: 30px;
            }
            .pusko-naladka .section-plate .razdel-list .razdel-li .text-min {
              margin: 0;
              padding: 0;
              font-size: 16px;
              padding-bottom: 15px;
              padding-left: 27px;
              line-height: 24px;
            }
            .pusko-naladka
              .section-plate
              .razdel-list
              .razdel-li
              .razdel-list-ul {
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

PuskoNalad.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default PuskoNalad;
