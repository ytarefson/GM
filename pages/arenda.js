import React, { Component } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import LizingList from '../components/arenda/LizingList';
import FormPage from '../components/form';
import news from '../components/tables/newsList';
import OtherNews from '../components/news/OtherNews';

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
                    src="/images/arenda/lizing-energetiki.jpg"
                    title="Аренда ГПЭС любой мощности"
                    alt="ГПЭС аренда"
                    className="arenda-img"
                  />
                  <img
                    src="/images/arenda/arenda-energeticheskogo.jpg"
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
              <OtherNews news={news} />
            </div>
          </section>
        </Layout>
        <style jsx global>{`
          .bg-img {
            margin-top: -15px;
            display: block;
            width: 100%;
            height: 350px;
            background: url('/images/potential-2.jpg') 50% 70% no-repeat;
            background-size: cover;
            box-shadow: inset 0 35px 10px -10px rgba(0, 0, 0, 0.15);
          }
          .arenda {
            margin-top: -35px;
            padding-top: 40px;
            background-color: #fafafa;
            border-radius: 40px 40px 0 0;
            box-shadow: 0 -40px 20px -30px rgba(0, 0, 0, 0.15);
            border-bottom: 15px solid #fff;
          }
          .arenda .arenda-promo .subheading {
            display: block;
            margin-bottom: 15px;
            line-height: 18px;
            font-size: 14px;
            color: #9b9b9b;
          }
          .arenda .arenda-promo .button-group {
            border-bottom: 1px solid rgb(199, 199, 199);
          }
          .arenda .arenda-promo .button-group .button-container-new {
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .arenda
            .arenda-promo
            .button-group
            .button-container-new
            .button-new {
            display: block;
            margin: 0 auto;
            width: 210px;
            height: 50px;
            border-radius: 2px;
            border: 3px solid var(--accent-red);
            text-align: center;
            color: var(--accent-red);
            font-size: 15px;
            font-weight: 700;
            line-height: 45px;
            transition: all 0.2s ease-out;
          }
          .arenda
            .arenda-promo
            .button-group
            .button-container-new
            .button-new:hover {
            box-shadow: var(--box-shadow);
          }
          .arenda .arenda-promo .button-group .arenda-text-min {
            display: block;
            margin-bottom: 15px;
            font-size: 12px;
            color: #9b9b9b;
          }
          .arenda .arenda-promo .header-razdel {
            margin-top: 15px;
          }
          .arenda .arenda-promo .grid-container {
            margin-top: 15px;
            margin-bottom: 15px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 120px 120px;
            grid-gap: 15px;
          }
          .arenda .arenda-promo .grid-container .grid-cell {
            border-radius: 3px;
            border: 2px solid #9b9b9b;
            color: #121212;
            padding: 15px;
            background-color: #fff;
            font-size: 12px;
            font-weight: 300;
          }
          .arenda .img-container {
            padding: 0;
            margin-top: 15px;
            display: block;
            width: 100%;
          }
          .arenda .img-container .arenda-img {
            display: block;
            width: 100%;
            height: auto;
            margin-bottom: 15px;
          }
          .arenda-oborud {
            margin-top: 30px;
          }
          .arenda-oborud .items-container {
            margin-top: 15px;
            margin-bottom: 15px;
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-gap: 5px;
            justify-items: center;
            align-items: center;
          }
          .arenda-oborud .items-container .item {
            cursor: pointer;
            padding: 10px;
            padding-top: 13px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            align-items: center;
            background-color: #fff;
            border-radius: 3px;
            height: 45px;
            width: 100%;
            max-width: 350px;
            box-shadow: var(--card-shadow);
            transition: box-shadow 0.2s ease-in;
          }
          .arenda-oborud .items-container .item:hover {
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
          }
          .arenda-oborud .items-container .item .item-title {
            font-family: var(--molot-font);
            color: var(--accent-red);
            display: block;
            line-height: 18px;
          }
          .arenda-oborud .items-container .item .item-props {
            text-align: right;
            color: var(--sub-color);
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }
          .arenda-oborud .items-container .item .item-props .item-engine {
            display: block;
            font-size: 11px;
            line-height: 10px;
          }
          .arenda-oborud .items-container .item .item-props .item-power {
            margin-top: 4px;
            display: block;
            font-size: 11px;
            line-height: 10px;
          }
          .arenda-oborud .items-container .button-lizing-catalog {
            font-family: var(--molot-font);
            color: var(--accent-grey);
            letter-spacing: 0.5px;
            padding: 10px;
            padding-top: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 3px;
            border: 3px solid var(--accent-grey);
            height: 45px;
            width: 100%;
            max-width: 350px;
            transition: all 0.2s ease-in;
          }
          .arenda-oborud .items-container .button-lizing-catalog:hover {
            background-color: #fff;
            box-shadow: var(--box-shadow);
          }
          .arenda-oborud .button-container {
            margin-bottom: 30px;
          }
          .jumbo-calc-min {
            margin-top: 30px;
            background: url('/images/textures/gplaypattern_@2X.png');
            padding-top: 30px;
            padding-bottom: 15px;
            border-top: 15px solid #ffffff;
            border-bottom: 15px solid #ffffff;
            box-shadow: 0 0px 30px rgba(0, 0, 0, 0.02);
            margin-bottom: 45px;
          }
          .jumbo-calc-min .text-container .calc-arenda-head {
            display: block;
            font-family: var(--molot-font);
            font-size: 17px;
            margin-bottom: 15px;
            color: #121212;
          }
          .jumbo-calc-min .text-container .calc-arenda-text {
            display: block;
            font-size: 12px;
            font-weight: 300;
            color: #9b9b9b;
          }
          .jumbo-calc-min .arenda-button-container {
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .jumbo-calc-min .arenda-button-container .calc-button-arenda {
            font-family: var(--molot-font);
            padding: 0;
            display: block;
            font-weight: 700;
            width: 170px;
            height: 40px;
            border-radius: 3px;
            background-image: var(--new-gradient);
            color: #ffffff;
            font-size: 15px;
            letter-spacing: 0.5px;
            line-height: 40px;
            margin: 0 auto;
            text-align: center;
            transform: skewX(-10deg);
            box-shadow: var(--box-shadow);
            transition: box-shadow 0.2s;
          }
          .jumbo-calc-min .arenda-button-container .calc-button-arenda:hover {
            text-decoration: none;
            cursor: pointer;
            color: #ffffff;
            box-shadow: var(--box-shadow-up);
          }
          .jumbo-calc-min .arenda-button-container .calc-button-arenda:active {
            box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.45);
          }
          .jumbo-calc-min .arenda-button-container .calc-button-arenda span {
            display: block;
            transform: skewX(10deg);
          }

          .lizing .header-razdel {
            display: block;
            margin-top: 15px;
          }
          .lizing .text {
            padding-top: 7px;
            padding-bottom: 7px;
          }
          .lizing .text-min {
            padding-top: 7px;
            padding-bottom: 7px;
          }
          .lizing .lizing-wrapper {
            background-color: #fff;
            padding: 15px;
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .lizing .lizing-wrapper .header-razdel {
            font-size: 16px;
            letter-spacing: 2px;
            line-height: 22px;
            margin-bottom: 0px;
            margin-top: 15px;
            display: block;
          }
          .lizing .lizing-wrapper .text {
            font-size: 14px;
            color: var(--accent-grey);
          }

          @media (min-width: 576px) {
            .arenda .arenda-promo .button-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
              grid-gap: 15px;
              align-items: center;
            }
            .arenda .arenda-promo .button-group .button-container-new {
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .arenda
              .arenda-promo
              .button-group
              .button-container-new
              .button-new {
              display: block;
              margin: 0;
            }
            .arenda .arenda-promo .button-group .arenda-text-min {
              display: block;
              margin-bottom: 0;
            }
            .arenda .arenda-promo .header-razdel {
              margin-top: 15px;
            }
            .arenda .arenda-promo .grid-container .grid-cell {
              padding: 30px;
              font-size: 15px;
              line-height: 20px;
            }
            .arenda .img-container {
              padding: 0;
              margin-top: 15px;
              margin-bottom: 15px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
              grid-gap: 15px;
              width: 100%;
            }
            .arenda .img-container .arenda-img {
              display: block;
              width: 100%;
              height: auto;
              margin-bottom: 15px;
            }
            .arenda-oborud {
              margin-top: 30px;
            }
            .arenda-oborud .items-container {
              grid-template-columns: 1fr 1fr;
              grid-gap: 5px 15px;
            }
            .jumbo-calc-min {
              background-color: #fff;
              padding-top: 30px;
              padding-bottom: 15px;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .jumbo-calc-min .text-container .calc-arenda-head {
              font-size: 23px;
              line-height: 26px;
              margin-bottom: 15px;
              color: var(--accent-grey);
            }
            .lizing .header-razdel {
              display: block;
              margin-top: 30px;
            }
            .lizing .text {
              padding-top: 7px;
              padding-bottom: 7px;
            }
            .lizing .text-min {
              padding-top: 7px;
              padding-bottom: 7px;
            }
            .lizing .lizing-wrapper {
              background-color: #fff;
              padding: 30px;
              padding-top: 15px;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .lizing .lizing-wrapper .header-razdel {
              font-weight: 300;
              letter-spacing: 1px;
              line-height: 22px;
              margin-bottom: 4px;
              color: var(--sub-color);
            }
            .lizing .lizing-wrapper .text {
              font-size: 14px;
              color: var(--accent-grey);
              padding: 0;
              margin-bottom: 4px;
              font-weight: 500;
            }
          }

          @media (min-width: 768px) {
            .bg-img {
              display: none;
            }
            .arenda {
              margin-top: 0px;
              padding-top: 40px;
              background-color: #fafafa;
              border-radius: 0;
              box-shadow: none;
            }
            .arenda .arenda-promo .subheading {
              line-height: 18px;
              font-size: 14px;
              letter-spacing: 0.2px;
              color: var(--accent-red);
            }
            .arenda .arenda-promo .button-group {
              display: grid;
              grid-template-columns: 2fr 3fr 1fr;
              grid-template-rows: auto;
              grid-gap: 30px;
              align-items: center;
              border-bottom: 1px solid rgb(199, 199, 199);
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .arenda .arenda-promo .button-group .button-container-new {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .arenda
              .arenda-promo
              .button-group
              .button-container-new
              .button-new {
              display: block;
              margin: 0 auto 0 0;
            }
            .arenda .arenda-promo .button-group .arenda-text-min {
              display: block;
              margin-bottom: 0px;
              font-size: 12px;
              letter-spacing: 0.2px;
              color: #9b9b9b;
            }
            .arenda .arenda-promo .header-razdel {
              margin-top: 15px;
              color: var(--accent-grey);
              font-weight: 300;
            }
            .arenda .arenda-promo .grid-container {
              margin-top: 15px;
              margin-bottom: 30px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 120px;
              grid-gap: 15px;
            }
            .arenda .arenda-promo .grid-container .grid-cell {
              border-radius: 3px;
              padding: 15px;
              font-size: 13px;
              font-weight: 300;
            }
            .arenda .img-container {
              padding: 0;
              margin-top: 15px;
              display: grid;
              grid-template: 1fr / auto auto;
              grid-gap: 15px;
              width: 100%;
            }
            .jumbo-calc-min {
              background-color: #fff;
              padding-top: 30px;
              padding-bottom: 15px;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .jumbo-calc-min .text-container .calc-arenda-head {
              font-size: 23px;
              line-height: 26px;
              text-align: center;
              margin-bottom: 10px;
              color: var(--accent-grey);
            }
            .jumbo-calc-min .text-container .calc-arenda-text {
              text-align: center;
              font-size: 13px;
            }
            .lizing .header-razdel {
              display: block;
              margin-top: 30px;
              font-weight: 300;
              color: var(--accent-grey);
            }
            .lizing .text {
              padding-top: 7px;
              padding-bottom: 7px;
            }
            .lizing .text-min {
              padding-top: 7px;
              padding-bottom: 7px;
            }
            .lizing .lizing-wrapper {
              background-color: #fff;
              padding: 30px;
              padding-top: 10px;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .lizing .lizing-wrapper .header-razdel {
              font-weight: 100;
              letter-spacing: 1px;
              font-size: 15px;
              line-height: 22px;
              margin-bottom: 5px;
              margin-top: 15px;
              color: var(--sub-color);
            }
            .lizing .lizing-wrapper .text {
              line-height: 16px;
              padding: 0;
              font-size: 14px;
              margin-bottom: 5px;
              font-weight: 500;
              color: var(--accent-grey);
            }
          }

          @media (min-width: 992px) {
            .arenda {
              padding-bottom: 30px;
            }
            .arenda .arenda-promo .grid-container {
              margin-top: 15px;
              margin-bottom: 0px;
            }
            .arenda .arenda-promo .grid-container .grid-cell {
              border-radius: 3px;
              padding: 15px;
              font-size: 12px;
              font-weight: 300;
            }
            .arenda .img-container {
              padding: 0;
              margin-top: 45px;
              margin-bottom: 0;
              display: grid;
              grid-template: 1fr 1fr / 1fr;
              grid-gap: 15px;
              width: 100%;
            }
            .arenda .img-container .arenda-img {
              margin-bottom: 0px;
            }
            .arenda-oborud {
              margin-top: 30px;
            }
            .arenda-oborud .items-container {
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 5px 15px;
            }
            .arenda-oborud .items-container .item {
              padding-left: 15px;
              padding-right: 15px;
            }
            .lizing .lizing-wrapper {
              padding: 30px;
              padding-top: 10px;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .lizing .lizing-wrapper .header-razdel {
              margin-bottom: 2px;
            }
            .lizing .lizing-wrapper .text {
              padding-top: 3px;
              font-size: 13px;
              margin-bottom: 5px;
            }
          }

          @media (min-width: 1200px) {
            .arenda {
              padding-top: 45px;
              padding-bottom: 45px;
              box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 0.2);
              background: linear-gradient(
                  to right,
                  rgba(205, 205, 205, 0.91) 0%,
                  rgba(205, 205, 205, 1) 40%,
                  rgba(205, 205, 205, 0.91) 100%
                ),
                url('/images/bg-promo-stripe-white.jpg') 50% 50% no-repeat;
            }
            .arenda .arenda-promo {
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .arenda .arenda-promo .arenda-top .header-min-colored {
              font-size: 42px;
              margin-bottom: 5px;
              letter-spacing: 0.4px;
              line-height: 48px;
              color: white;
              text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
            }
            .arenda .arenda-promo .arenda-top .subheading {
              font-weight: 900;
              font-size: 16px;
              margin-bottom: 30px;
            }
            .arenda .arenda-promo .arenda-top .text {
              color: var(--text);
            }
            .arenda .arenda-promo .arenda-top .button-group {
              border-bottom: 1px solid white;
            }
            .arenda
              .arenda-promo
              .arenda-top
              .button-group
              .button-container-new
              .button-new {
              background: rgba(255, 255, 255, 0.1);
            }
            .arenda
              .arenda-promo
              .arenda-top
              .button-group
              .button-container-new
              .button-new:hover {
              background: rgba(255, 255, 255, 0.95);
            }
            .arenda .arenda-promo .arenda-top .button-group .arenda-text-min {
              font-size: 13px;
              font-weight: 300;
              line-height: 19px;
              letter-spacing: 0.4px;
              color: white;
            }
            .arenda .arenda-promo .arenda-bottom .header-razdel {
              display: block;
              font-size: 28px;
              margin-top: 30px;
              margin-bottom: 30px;
              color: var(--text);
            }
            .arenda .arenda-promo .arenda-bottom .grid-container {
              margin-top: 15px;
              margin-bottom: 0px;
              align-items: end;
              grid-gap: 20px;
            }
            .arenda .arenda-promo .arenda-bottom .grid-container .grid-cell {
              font-size: 14px;
              font-weight: 300;
              letter-spacing: 0.3px;
              position: relative;
              border: none;
              background-color: #fff;
              padding-bottom: 30px;
            }
            .arenda
              .arenda-promo
              .arenda-bottom
              .grid-container
              .grid-cell:active {
              box-shadow: 0 -15px 30px rgba(0, 0, 0, 0.1);
            }
            .arenda
              .arenda-promo
              .arenda-bottom
              .grid-container
              .grid-cell::before {
              position: absolute;
              display: block;
              content: '';
              bottom: 18px;
              right: 10px;
              width: 18px;
              height: 2px;
              border-radius: 3px;
              background-color: var(--accent-red);
            }
            .arenda
              .arenda-promo
              .arenda-bottom
              .grid-container
              .grid-cell::after {
              position: absolute;
              display: block;
              content: '';
              bottom: 10px;
              right: 18px;
              width: 2px;
              height: 18px;
              border-radius: 3px;
              background-color: var(--accent-red);
            }
            .arenda .img-container {
              padding: 0;
              padding-left: 30px;
              margin-top: 0px;
              margin-bottom: 0;
              display: grid;
              grid-template: auto auto / 1fr;
              grid-gap: 15px;
              align-items: end;
              align-content: end;
              width: 100%;
            }
            .arenda .img-container .arenda-img {
              margin-bottom: 0px;
            }

            .arenda-oborud {
              margin-top: 60px;
            }
            .arenda-oborud .text {
              margin-bottom: 45px;
            }
            .arenda-oborud .items-container {
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 15px 15px;
            }
            .arenda-oborud .items-container .item {
              height: 55px;
              padding-top: 15px;
              padding-bottom: 10px;
              padding-left: 15px;
              padding-right: 15px;
            }
            .arenda-oborud .items-container .item .item-title {
              font-size: 17px;
            }
            .arenda-oborud .items-container .item .item-props .item-engine {
              font-size: 13px;
              font-weight: 500;
              letter-spacing: 0.4px;
            }
            .arenda-oborud .items-container .item .item-props .item-power {
              font-size: 13px;
              font-weight: 900;
            }
            .arenda-oborud .items-container .button-lizing-catalog {
              font-size: 15px;
              height: 55px;
            }

            .jumbo-calc-min {
              padding-top: 30px;
              padding-bottom: 30px;
              margin-top: 60px;
              margin-bottom: 60px;
            }
            .jumbo-calc-min .calc-flex {
              display: grid;
              grid-template: 1fr / 2fr 1fr;
              grid-gap: 30px;
              border-left: 8px solid var(--orange-color);
            }
            .jumbo-calc-min .calc-flex .text-container {
              display: block;
              padding-left: 15px;
            }
            .jumbo-calc-min .calc-flex .text-container .calc-arenda-head {
              font-size: 27px;
              line-height: 26px;
              text-align: left;
              margin-bottom: 10px;
              margin-top: 5px;
              color: var(--accent-grey);
            }
            .jumbo-calc-min .calc-flex .text-container .calc-arenda-text {
              text-align: left;
              font-weight: 500;
              font-size: 16px;
              color: var(--sub-color);
            }

            .lizing {
              margin-bottom: 45px;
            }
            .lizing .header-min-colored {
              margin-bottom: 15px;
            }
            .lizing .text {
              padding-bottom: 10px;
            }
            .lizing .header-razdel {
              font-size: 28px;
            }
            .lizing .text-min {
              padding-bottom: 10px;
            }
            .lizing .lizing-wrapper {
              padding: 30px;
              padding-top: 15px;
              padding-left: 45px;
              margin-top: 65px;
              margin-bottom: 30px;
            }
            .lizing .lizing-wrapper .header-razdel {
              margin-top: 20px;
              margin-bottom: 2px;
              color: var(--text);
              font-weight: 700;
            }
            .lizing .lizing-wrapper .text {
              padding-top: 3px;
              font-size: 14px;
              font-weight: 300;
              line-height: 20px;
              margin-bottom: 3px;
              color: var(--accent-grey);
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Arenda;
