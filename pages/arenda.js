import React, { Component } from 'react';
import '../scss/arenda.scss';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import LizingList from '../components/arenda/LizingList';
import OtherNews from '../components/news/OtherNews';
import FormPage from '../components/form';

class Arenda extends Component {
  render() {
    return (
      <div>
        <Head
          title="Аренда газопоршневых электростанций. Лизинг мини-ТЭЦ и ГПЭС"
          description="Всё наше оборудование вы можете взять в аренду или приобрести по программе лизинга энергетического оборудования"
        />
        <Layout>
          <div className="container-fluid bg-img" />
          <section className="container-fluid arenda">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8">
                  <div className="arenda-promo">
                    <div className="arenda-top">
                      <h1 className="header-min-colored">
                        Аренда газопоршневых электростанций
                      </h1>
                      <span className="subheading">
                        Снижение стоимости кВт*ч без капитальных затрат
                      </span>
                      <p className="text">
                        Компания “ГАЗОВЫЕ МАШИНЫ” предлагает в аренду и лизинг
                        газопоршневые и дизельные электростанции в
                        блок-модульном исполнении мощностью от 0,1 до 2&nbsp;мВт
                        на выгодных условиях.
                      </p>
                      <div className="button-group">
                        <div className="button-container-new">
                          <a
                            href="https://gmenergo.bitrix24.ru/pub/form/4_uznayte_vse_podrobnosti_i_usloviya_sotrudnichestva/c1mwzy/"
                            className="button-new"
                          >
                            Узнайте подробности
                          </a>
                        </div>
                        <p className="arenda-text-min">
                          Оставьте контактную информацию и наши специалисты
                          подробно расскажут об условиях сотрудничества.
                        </p>
                      </div>
                    </div>
                    <div className="arenda-bottom">
                      <div className="header-razdel">Преимущества аренды:</div>
                      <div className="grid-container">
                        <div className="grid-cell">
                          Срок аренды от 12 месяцев
                        </div>
                        <div className="grid-cell">
                          Аренда оборудования или энергокомплекса "под ключ"
                        </div>
                        <div className="grid-cell">
                          Гибкие формы и условия оплаты
                        </div>
                        <div className="grid-cell">
                          Помощь в эксплуатации энергетического оборудования
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 img-container">
                  <img
                    src="../static/images/arenda/lizing-energetiki.jpg"
                    title="Аренда ГПЭС любой мощности"
                    alt="ГПЭС аренда"
                    className="arenda-img"
                  />
                  <img
                    src="../static/images/arenda/arenda-energeticheskogo.jpg"
                    title="Лизинг ГПЭС любой мощности"
                    alt="ГПЭС лизинг"
                    className="arenda-img"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid arenda-oborud">
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2 className="header-min-colored">
                    Оборудование для аренды и лизинга
                  </h2>
                  <span className="text">
                    Вы можете выбрать любое наше оборудование и взять его в
                    лизинг или аренду.
                  </span>
                  <LizingList
                    idlist={[20, 21, 22, 23, 2, 4, 5, 27, 13, 42, 44]}
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid jumbo-calc-min">
            <div className="container">
              <div className="row">
                <div className="col-12 calc-flex">
                  <div className="text-container">
                    <span className="calc-arenda-head">
                      Хотите узнать сколько мы для вас экономим?
                    </span>
                    <span className="calc-arenda-text">
                      Воспользуйтесь автоматической формой, введите исходные
                      данные и узнайте результат.
                    </span>
                  </div>
                  <div className="arenda-button-container">
                    <Link href="/calculator" as="/calculator">
                      <a className="calc-button-arenda">
                        <span>Калькулятор</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid lizing">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 pr-xl-5">
                  <h2 className="header-min-colored">
                    Лизинг энергетического оборудования
                  </h2>
                  <div className="text">
                    В рамках поддержки производственных предприятий по
                    Центральному и Северо-западному федеральному округу, создан
                    новый формат взаимодействия на базе предоставления льготного
                    лизинга энергетического оборудования.
                  </div>
                  <p className="text">
                    АО «Региональная лизинговая компания Ярославской области»
                    предлагает Вам воспользоваться программой льготного лизинга
                    на приобретение нового оборудования для субъектов
                    индивидуального и малого предпринимательства.
                  </p>
                  <h3 className="header-razdel">Предмет лизинга:</h3>
                  <p className="text-min">
                    - Высокотехнологичное и инновационное оборудование
                    <br />- Промышленное оборудование
                    <br />- Оборудование в сфере переработки и хранения с/х
                    продукции
                  </p>
                  <p className="text-min">
                    С более детальной информацией о нашей компании и
                    предоставляемых услугах Вы можете ознакомиться в ООО
                    «Газовые машины», либо позвонить по телефону:
                    8&nbsp;(4852)&nbsp;58-80-84.
                  </p>
                </div>
                <div className="col-12 col-md-8 col-lg-4">
                  <div className="lizing-wrapper bg-container">
                    <span className="header-razdel">Процентная ставка:</span>
                    <span className="text">
                      6% годовых - для российского оборудования
                    </span>
                    <span className="text">
                      8% годовых - для иностранного оборудования
                    </span>
                    <span className="header-razdel">Авансовый платёж:</span>
                    <span className="text">
                      от 15% от стоимости предмета лизинга
                    </span>
                    <span className="header-razdel">Сумма фининсирования:</span>
                    <span className="text">
                      от 5 млн. рублей до 200 млн. рублей
                    </span>
                    <span className="header-razdel">Срок фининсирования:</span>
                    <span className="text">от 13 месяцев до 5 лет</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <FormPage />
          <section className="container-fluid news-anons">
            <div className="container">
              {/* <div className="row">
            <div className="col"> */}
              <OtherNews />
              {/* </div>
          </div> */}
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default Arenda;
