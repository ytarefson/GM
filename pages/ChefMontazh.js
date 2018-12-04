import React from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';

const ChefMontazh = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid">
      <div className="mycontainer documentation">
        <p className="text-common">
          Специалисты нашей компании прошли обучение на предприятиях MAN,
          Liebherr и ЯМЗ и обладают компетенцией для проведения наладки
          оборудования производства этих компаний. Стандартная программа
          шеф-монтажных и пусконаладочных работ включает в себя.
        </p>
        <h2 className="subheading-services">1. Монтаж и сборка</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">
              1.1. Проверка правильности крепления агрегата к фундаментной
              плите.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.2. Проверка наличия заземляющего контура.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.3. Проверка подвода газа, контроль давления на входе.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.4. Проверка правильности подключения электрических кабелей.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.5. Проверка подключения выхлопного трубопровода с последующим
              контролем сопротивления на выпуске.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.6. Проверка правильности подключения теплового контура.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.7. Оформление акта передачи для пусковых и режимно-наладочных
              работ.
            </p>
          </div>
        </div>
        <h2 className="subheading-services">2. Электростанция</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">2.1. Электростанция:</p>
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
            <p className="text-common">2.2. Проверка работы:</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">2.2.1. Ручной пуск.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">2.2.2. Ручной останов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">2.2.3. Проверка силовых шкафов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">2.2.4. Проверка управления шкафов.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              2.2.5. Проверка срабатывания защит мотора.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">Проверка работы мотора без нагрузки.</p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">Проверка работы мотора под нагрузкой.</p>
          </div>
        </div>

        <h2 className="subheading-services">3. Система газоснабжения:</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">
              3.1. Проверка работы центрального электромагнитного клапана.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              3.2. Проверка и настройка работы регуляторов давления.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              3.3. Проверка и настройка работы сбросного устройства.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              3.4. Проверка на утечки в газопроводе.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              1.5. Проверка подключения выхлопного трубопровода с последующим
              контролем сопротивления на выпуске.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              3.5. Проверка работы измерителя давления газа.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-italic">
              Проверка работы технического учета газа.
            </p>
          </div>
        </div>

        <h2 className="subheading-services">4. Система утилизации тепла </h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">
              4.1. Проверка герметичности трубопроводов
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              4.2. Настройка работы моторных приводов
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              4.3. Настройка уставок включения и выключения байпасных линий
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">4.4. Настройка аварийных установок</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              4.5. Контроль автоматической работы при различных нагрузках
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">4.6. Имитация аварийных ситуаций</p>
          </div>
        </div>

        <h2 className="subheading-services">
          5. Система охлаждения установок:
        </h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">5.1. Проверка герметичности.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              5.2. Настройка моментов включения вентиляторов.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              5.3. Настройка разницы температур прямого и обратного
              трубопроводов.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              5.4. Контроль работы расширительного бака.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              5.5. Измерение давления в системе охлаждения.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              5.6. Измерение температуры в системе охлаждения.
            </p>
          </div>
        </div>

        <h2 className="subheading-services">6. Система управления КГПУ:</h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common">6.1. Проверка работы контроллеров.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              6.2. Проверка работы системы запрета выдачи мощности в сеть.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              6.3. Настройка параметров параллельной работы станции с внешней
              сетью.
            </p>
          </div>
        </div>
        <h2 className="subheading-services">
          7. Техническое обслуживание после обкатки 72 часа:
        </h2>
        <div className="razdel-list">
          <div className="razdel-li">
            <p className="text-common"> 7.1. Замена моторного масла.</p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              7.2. Промывка фильтра центробежной очистки масла.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              7.3. Проверка, регулировка угла опережения зажигания стробоскопом.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              7.4 Протяжка внешних резьбовых соединения.
            </p>
          </div>
          <div className="razdel-li">
            <p className="text-common">
              7.5. Проверка, регулировка зазоров клапанного механизма.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

ChefMontazh.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default ChefMontazh;
