import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import FormPage from "../components/form";
import "../scss/services/pusko-naladka.scss";

const PuskoNalad = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid pusko-naladka">
      <div className="mycontainer documentation section-plate">
        <p className="text-min">
          Специалисты нашей компании прошли обучение на предприятиях MAN,
          Liebherr и ЯМЗ и обладают компетенцией для проведения наладки
          оборудования производства этих компаний. Стандартная программа
          шеф-монтажных и пусконаладочных работ включает в себя.
        </p>
        <h2 className="header-red">1. Электростанция</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min">2.1. Электростанция:</p>
            <ul className="razdel-list-ul">
              <li className="razdel-ul-li">
                <p className="text-italic">
                  Проверка функционирования основных систем.
                </p>
              </li>
              <li className="razdel-ul-li">
                <p className="text-italic">
                  Проверка наличия охлаждающей смеси в контурах электростанций.
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
                  Проверка подключения напряжения собственных нужд 220/380 В.
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
            <p className="text-min">1.2. Проверка работы:</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">1.2.1. Ручной пуск.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">1.2.2. Ручной останов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">1.2.3. Проверка силовых шкафов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">1.2.4. Проверка управления шкафов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              1.2.5. Проверка срабатывания защит мотора.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">Проверка работы мотора без нагрузки.</p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">Проверка работы мотора под нагрузкой.</p>
          </div>
        </div>

        <h2 className="header-red">1. Система газоснабжения:</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min">
              2.1. Проверка работы центрального электромагнитного клапана.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              2.2. Проверка и настройка работы регуляторов давления.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              2.3. Проверка и настройка работы сбросного устройства.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">2.4. Проверка на утечки в газопроводе.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              2.5. Проверка подключения выхлопного трубопровода с последующим
              контролем сопротивления на выпуске.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              2.6. Проверка работы измерителя давления газа.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">
              Проверка работы технического учета газа.
            </p>
          </div>
        </div>

        <h2 className="header-red">4. Система утилизации тепла </h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min">
              3.1. Проверка герметичности трубопроводов
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">4.2. Настройка работы моторных приводов</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              3.3. Настройка уставок включения и выключения байпасных линий
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">4.4. Настройка аварийных установок</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              3.5. Контроль автоматической работы при различных нагрузках
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">3.6. Имитация аварийных ситуаций</p>
          </div>
        </div>
        <h2 className="header-red">4. Система охлаждения установок:</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min">4.1. Проверка герметичности.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              4.2. Настройка моментов включения вентиляторов.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              4.3. Настройка разницы температур прямого и обратного
              трубопроводов.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              4.4. Контроль работы расширительного бака.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              4.5. Измерение давления в системе охлаждения.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              4.6. Измерение температуры в системе охлаждения.
            </p>
          </div>
        </div>

        <h2 className="header-red">5. Система управления КГПУ:</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min">5.1. Проверка работы контроллеров.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              5.2. Проверка работы системы запрета выдачи мощности в сеть.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              5.3. Настройка параметров параллельной работы станции с внешней
              сетью.
            </p>
          </div>
        </div>
        <h2 className="header-red">
          6. Техническое обслуживание после обкатки 72 часа:
        </h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-min"> 6.1. Замена моторного масла.</p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              6.2. Промывка фильтра центробежной очистки масла.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              6.3. Проверка, регулировка угла опережения зажигания стробоскопом.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              6.4 Протяжка внешних резьбовых соединения.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-min">
              6.5. Проверка, регулировка зазоров клапанного механизма.
            </p>
          </div>
        </div>
      </div>
      <div className="mycontainer section-plate mt-4 p-0">
        <FormPage product={serviceName} />
      </div>
    </div>
  </Layout>
);

PuskoNalad.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default PuskoNalad;
