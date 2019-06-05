import React from "react";
import "../scss/arenda.scss";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";
import LizingList from "../components/arenda/LizingList";

const Arenda = () => (
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
            <div className="col-12">
              <div className="arenda-promo">
                <h1 className="header-min-colored">
                  Аренда газопоршневых электростанций
                </h1>
                <span className="subheading">
                  Снижение стоимости кВт*ч без капитальных затрат
                </span>
                <p className="text">
                  Компания “ГАЗОВЫЕ МАШИНЫ” предлагает в аренду и лизинг
                  газопоршневые и дизельные электростанции в блок-модульном
                  исполнении мощностью от 0,1 до 2 мВт на выгодных условиях.
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
                    Оставьте контактную информацию и наши специалисты подробно
                    расскажут об условиях сотрудничества.
                  </p>
                </div>
                <div className="header-razdel">Условия аренды:</div>
                <div className="grid-container">
                  <div className="grid-cell">Срок аренды от 12 месяцев</div>
                  <div className="grid-cell">
                    Аренда оборудования или энергокомплекса "под ключ"
                  </div>
                  <div className="grid-cell">Гибкие формы и условия оплаты</div>
                  <div className="grid-cell">
                    Помощь в эксплуатации энергетического оборудования
                  </div>
                </div>
              </div>
              <div className="col-12 img-container">
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
                Вы можете выбрать любое наше оборудование и взять его в лизинг
                или аренду.
              </span>
              <LizingList idlist={[20, 21, 22, 23, 2, 4, 5, 27, 13, 42, 44]} />
              <div className="button-container">
                <div className="button-products">
                  Перейти в каталог продукции
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container-fluid jumbo-calc-min">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-container">
                <span className="calc-arenda-head">
                  Хотите узнать сколько мы для вас экономим?
                </span>
                <span className="calc-arenda-text">
                  Воспользуйтесь автоматической формой, введите исходные данные
                  и узнайте результат.
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
    </Layout>
  </div>
);

export default Arenda;
