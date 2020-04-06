import React, { Component } from 'react';
import Head from '../components/head';

import Layout from '../components/Layout';
import Lightbox from 'react-image-lightbox';
// Yandex Maps
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const images = [
  '/images/about-1.jpg',
  '/images/about-2.jpg',
  '/images/about-3.jpg'
];

export class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div>
        <Head
          title="Контакты - Газовые машины. Официальный сайт"
          description='Подбробная информация о деятельности компании ООО "Газовые машины"'
        />
        <Layout>
          <div className="container-fluid about">
            <div className="mycontainer">
              <div className="row m-0">
                <div className="col-12 col-md-12 col-xl-9 p-0">
                  <span className="subheading-red-top pl-3 mt-5">
                    О компании
                  </span>
                  <h1 className="header-razdel pl-3">ООО "Газовые машины"</h1>
                  <p className="subheading-common-2 mt-4">
                    Компания «Газовые машины» образована 10 октября 2006 г. В
                    течение 12 лет основным профилем деятельности компании
                    является производство и поставка "под ключ" автономных
                    энергетических центров на базе газопоршневых электростанций
                    с технологиями когенерации и тригенерации, сервисное
                    обслуживание газопоршневых электростанций, поставка запасных
                    частей и расходных материалов для эксплуатации газовых
                    генераторов.
                  </p>
                </div>
              </div>
              <div className="row m-0 mt-5 mb-5">
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="/images/about-1.jpg"
                      onClick={() =>
                        this.setState({ isOpen: true, photoIndex: 0 })
                      }
                      alt="Малая энергетика"
                      title="Малая энергетика"
                      className="about-pic"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="/images/about-2.jpg"
                      onClick={() =>
                        this.setState({ isOpen: true, photoIndex: 1 })
                      }
                      alt="Газовый энергоцентр"
                      title="Газовый энергоцентр"
                      className="about-pic"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="/images/about-3.jpg"
                      onClick={() =>
                        this.setState({ isOpen: true, photoIndex: 2 })
                      }
                      alt="Сборочный цех Газовые машины"
                      title="Сборочный цех Газовые машины"
                      className="about-pic"
                    />
                  </div>
                  {isOpen && (
                    <Lightbox
                      mainSrc={`${images[photoIndex]}`}
                      nextSrc={images[(photoIndex + 1) % images.length]}
                      prevSrc={
                        images[(photoIndex + images.length - 1) % images.length]
                      }
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      onMovePrevRequest={() =>
                        this.setState({
                          photoIndex:
                            (photoIndex + images.length - 1) % images.length
                        })
                      }
                      onMoveNextRequest={() =>
                        this.setState({
                          photoIndex: (photoIndex + 1) % images.length
                        })
                      }
                    />
                  )}
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12 col-xl-9 p-0 pl-3 pr-3">
                  <p className="text-min mb-4">
                    С 2006 г. до настоящего времени компанией выпущено
                    <b>
                      {' '}
                      75 электростанций суммарной мощностью более 21 МВт.
                    </b>{' '}
                    В производственной линейке газовые электростанции MAN,
                    Liebherr, Jenbacher, MTU, MWM и ЯМЗ единичной мощностью до
                    10 МВт и напряжением до 10,5 кВ, работающие на природном,
                    сжиженном газе, пропан-бутановой смеси, попутном нефтяном
                    газе. Компания является официальным сервисным партнером MAN,
                    Liebherr, Motortech, Comap.
                  </p>
                  <p className="text-min mb-4">
                    Производственные площади комании 1 900 кв.м. расположены в
                    г. Ярославле. Производство сертифицировано концерном MAN и
                    компанией Motortech, что подтверждает высокое качество
                    выпускаемой продукции. Число сотрудников компании составляет
                    40 человек. 80 % составляет инженерный персонал с высшим
                    образованием, прошедший обучение в концернах MAN и Liebherr.
                    Технические руководители компании имеют ученую степень
                    кандидатов технических наук.
                  </p>
                  <p className="text-min mb-3">
                    <b>
                      Приглашаем посетить наше производство, где Вы, в удобное
                      для Вас время, сможете ознакомится с образцами продукции.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid contacts mt-5 mb-5">
            <div className="row m-0">
              <div className="col-12 col-md-4 order-md-2">
                <div className="contacts-content">
                  <div className="adres-list">
                    <span className="contacts-heading">Контакты:</span>
                    <a
                      href="https://yandex.ru/maps/-/CBFyIKsQPB"
                      className="adres-map-link"
                    >
                      150062,&nbsp;Россия, г.&nbsp;Ярославль,
                      пр.&nbsp;Авиаторов,&nbsp;155
                    </a>
                    <div className="adres-phones">
                      <a href="callto:+74852260368" className="phone-link">
                        +7 (4852) 26-03-68
                      </a>
                      <a href="callto:+74852267960" className="phone-link">
                        +7 (4852) 26-79-60
                      </a>
                    </div>
                    <a href="mailto:market@gmenergo.ru" className="adres-email">
                      market@gmenergo.ru
                    </a>
                    <span className="link-1">График работы:</span>
                    <span className="link-1 link-11">пн-пт: 9:00-18:00</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-8 map-container order-md-1 p-0">
                <div
                  className="myMap"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'relative'
                  }}
                >
                  <YMaps>
                    <Map
                      width="100%"
                      height="458px"
                      defaultState={{
                        center: [57.659441, 39.949507],
                        zoom: 16
                      }}
                    >
                      <Placemark defaultGeometry={[57.66, 39.9505]} />
                    </Map>
                  </YMaps>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid pt-3">
            <div className="mycontainer pl-3 pr-3">
              <h2 className="header-sections pl-0">Сертификаты</h2>
              <div className="certs">
                <a
                  className="d-flex certs-card"
                  href="/docs/sert-mbk.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/sert-mbk.jpg"
                      alt="сертификат"
                      title="Сертификат МВК"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/dungs.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/dungs.jpg"
                      alt="сертификат"
                      title="Сертификат DUNGS"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/сканирован0642.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/сканирован0642.jpg"
                      alt="сертификат"
                      title="Сертификат с выставки Собственная генерация"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/liebherr.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/liebherr.jpg"
                      alt="сертификат"
                      title="Сертификат Liebherr"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/motortech.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/motortech.jpg"
                      alt="сертификат"
                      title="Сертификат Motortech"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/sert.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/sert.jpg"
                      alt="сертификат"
                      title="Сертификат соответствия ГОСТ"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/comap.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/comap.jpg"
                      alt="сертификат"
                      title="Сертификат ComAp"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/man.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="/images/docs/man.jpg"
                      alt="сертификат"
                      title="Сертификат MAN"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="/docs/сканирован0643.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-2"
                      src="/images/docs/nagrada2.jpg"
                      alt="сертификат"
                      title="Партнёрский сертификат MAN"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="container-fluid napravleniya">
            <div className="mycontainer">
              <div className="row m-0">
                <div className="col-12 col-xl-9">
                  <h2 className="header-sections pl-0 pb-3">Направления</h2>

                  <p className="text-min pb-3">
                    Кроме производства мини-ТЭС мы осуществляем поставку,
                    трансформаторных подстанций, КРУ, и прочего вспомогательного
                    оборудования и обеспечиваем поставку запасных частей.
                    Предлагаем весь спектр услуг по созданию Вашего автономного
                    энергоцентра "под ключ": проектные, строительно-монатжные
                    работы, пуско-наладочные работы, сопровождение объекта с
                    первого дня до ввода в эксплуатацию, обучение
                    эксплуатирующего персонала, сервисное обслуживание.
                  </p>

                  <p className="text-min pb-3">
                    В нашей компетенции "готовые решения" по организации
                    автономного энергоснабжения для: промышленных предприятий,
                    объектов нефтегазовой сферы, объектов газотранспортной
                    системы, животноводческих комплексов,
                    торгово-развлекательных центров, ледовых дворцов спорта и
                    прочих спортивных объектов, гостиниц, санаториев, больниц и
                    лечебных учреждений, баз отдыха.
                  </p>

                  <p className="text-min pb-3">
                    Спектр поставляемого оборудования позволяет осуществлять
                    полную модернизацию энергетического хозяйства предприятий,
                    от замены устаревшего котельного оборудования, до
                    организации полностью автономных систем. Наша компания имеет
                    опыт поставок оборудования по всей территории Российской
                    Федерации и странам СНГ.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .about .logo-container {
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .about .logo-container .logo-very-big {
            display: block;
            width: 50%;
            height: auto;
          }
          .about .img-container {
            margin-bottom: 15px;
            box-shadow: var(--box-shadow);
            overflow: hidden;
            border-radius: var(--border-radius);
          }
          .about .img-container .about-pic {
            width: 100%;
          }
          .contacts {
            background-image: #fff;
          }
          .contacts .map-container {
            border-radius: var(--border-radius);
          }
          .contacts .map-container .myMap {
            width: 100%;
            height: 300px;
            position: relative;
            overflow: hidden;
          }

          .contacts .adres-list {
            margin-bottom: 30px;
            padding: 30px;
            display: flex;
            flex-direction: column;
            color: var(--accent-grey);
            border: 3px solid var(--accent-grey);
            border-radius: 3px;
            background-color: #fff;
            box-shadow: var(--box-shadow-up);
          }

          .contacts .adres-list .map-container {
            width: 100%;
            padding-bottom: 15px !important;
          }
          .contacts .adres-list .contacts-heading {
            font-family: var(--molot-font);
            text-align: center;
            font-size: 21px;
            color: var(--accent-grey);
            display: block;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 20px;
          }
          .contacts .adres-list .adres-map-link {
            width: 100%;
            color: var(--accent-grey);
            font-size: 14px;
            font-weight: 300;
            line-height: 20px;
            font-family: var(--noto-font);
            letter-spacing: 0.5px;
            text-align: center;
            margin-bottom: 15px;
          }
          .contacts .adres-list .adres-phones {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
          }
          .contacts .adres-list .adres-phones .phone-link {
            text-align: left;
            display: block;
            font-weight: 400;
            font-size: 14px;
            color: var(--accent-grey);
          }
          .contacts .adres-list .adres-email {
            margin-top: 15px;
            margin-bottom: 15px;
            text-align: center;
            color: var(--accent-grey);
            width: 100%;
            font-style: italic;
            font-size: 16px;
            font-weight: 700;
            letter-spacing: 1px;
          }
          .contacts .adres-list .link-1 {
            font-size: 14px;
            display: block;
            font-weight: 300;
            color: var(--accent-grey);
          }
          .contacts .adres-list .link-11 {
            font-size: 14px;
            display: block;
            font-weight: 700;
            color: var(--accent-grey);
          }

          .napravleniya {
            padding: 30px 0 50px 0;
          }
          .napravleniya .header-sections {
            text-align: left;
          }
          .certs {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-around;
          }
          .certs .certs-card {
            padding: 15px;
            width: 50%;
            cursor: pointer;
          }
          .certs .certs-card .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .certs .certs-card .img-container .certs-img-1 {
            width: 100%;
            transition: all 0.2s ease-in;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
            box-shadow: var(--box-shadow);
          }
          .certs .certs-card .img-container:hover {
            box-shadow: 0 5px 40px -15px rgba(0, 0, 0, 0.55);
          }
          .certs .certs-card .img-container .certs-img-2 {
            width: 100%;
          }

          @media (min-width: 768px) {
            .about .logo-container {
              height: 100%;
              display: flex;
              justify-content: flex-end;
              align-items: flex-end;
            }
            .about .logo-container .logo-very-big {
              display: block;
              margin-bottom: 30px;
              width: 70%;
              height: auto;
            }
            .about .img-container .about-pic {
              max-width: 100%;
              box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);
            }

            .contacts .map-container {
              transform: translateX(-15px);
              padding-bottom: 0 !important;
            }

            .contacts .adres-list {
              margin-bottom: 30px;
              padding: 30px;
              display: flex;
              flex-direction: column;
              color: var(--accent-grey);
              border: 3px solid var(--accent-grey);
            }
            .contacts .adres-list .map-container {
              width: 100%;
              padding-bottom: 15px !important;
            }
            .contacts .adres-list .contacts-heading {
              font-family: var(--molot-font);
              text-align: center;
              font-size: 21px;
              color: var(--accent-grey);
              display: block;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 20px;
            }
            .contacts .adres-list .adres-map-link {
              width: 100%;
              color: var(--accent-grey);
              font-size: 14px;
              font-weight: 300;
              line-height: 20px;
              font-family: var(--noto-font);
              letter-spacing: 0.5px;
              text-align: center;
              margin-bottom: 15px;
            }
            .contacts .adres-list .adres-phones {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              align-content: center;
            }
            .contacts .adres-list .adres-phones .phone-link {
              text-align: left;
              display: block;
              font-weight: 400;
              font-size: 14px;
              color: var(--accent-grey);
            }
            .contacts .adres-list .adres-email {
              margin-top: 15px;
              margin-bottom: 15px;
              text-align: center;
              color: var(--accent-grey);
              width: 100%;
              font-style: italic;
              font-size: 16px;
              font-weight: 700;
              letter-spacing: 1px;
            }
            .contacts .adres-list .link-1 {
              font-size: 14px;
              display: block;
              font-weight: 300;
              color: var(--accent-grey);
            }
            .contacts .adres-list .link-11 {
              font-size: 14px;
              display: block;
              font-weight: 700;
              color: var(--accent-grey);
            }
            .contacts .link-map .link-map-header {
              padding-left: 8px;
              text-align: left;
            }
            .contacts .link-map .link-map-list {
              margin-top: 10px;
              padding-left: 0;
              display: flex;
              flex-direction: column;
            }
            .contacts .link-map .link-map-list .link-map-item {
              padding: 0px 8px;
            }
            .contacts .link-map .link-map-list .link-map-item .link-map-link {
              display: block;
              color: #ffffff;
              width: 100%;
              text-align: left;
              font-size: 16px;
              font-weight: 400;
              line-height: 28px;
            }
            .certs {
              margin-top: 10px;
              width: 100%;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
              align-items: center;
              justify-content: space-around;
            }
            .certs .certs-card {
              padding: 15px;
              width: 32%;
            }
          }

          @media (min-width: 992px) {
            .certs {
              flex-wrap: nowrap;
            }
          }

          @media (min-width: 1200px) {
            .contacts {
              padding-top: 0;
            }
            .contacts .adres-list {
              height: 100%;
              box-shadow: var(--box-shadow);
              border-radius: var(--border-radius);
              border: none;
              padding-left: 45px;
            }
            .contacts .adres-list .contacts-heading {
              font-family: var(--molot-font);
              text-align: left;
              font-size: 27px;
              color: var(--accent-grey);
              display: block;
              text-transform: uppercase;
              letter-spacing: 1px;
              margin-bottom: 20px;
            }
            .contacts .adres-list .adres-map-link {
              width: 100%;
              color: var(--accent-grey);
              font-size: 22px;
              font-weight: 300;
              line-height: 28px;
              font-family: var(--noto-font);
              letter-spacing: 0.5px;
              text-align: left;
              margin-bottom: 30px;
            }
            .contacts .adres-list .adres-phones {
              width: 100%;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              align-content: center;
            }
            .contacts .adres-list .adres-phones .phone-link {
              text-align: left;
              display: block;
              font-weight: 700;
              font-size: 19px;
              color: var(--accent-grey);
            }
            .contacts .adres-list .adres-email {
              margin-top: 15px;
              margin-bottom: 15px;
              text-align: left;
              color: var(--accent-red);
              width: 100%;
              font-style: italic;
              font-size: 16px;
              font-weight: 500;
              letter-spacing: 3px;
            }
            .contacts .adres-list .link-1 {
              font-size: 16px;
              display: block;
              font-weight: 300;
              color: var(--accent-grey);
              line-height: 22px;
            }
            .contacts .adres-list .link-11 {
              font-size: 17px;
              display: block;
              font-weight: 700;
              color: var(--accent-grey);
            }
            .contacts .map-container {
              height: 458px;
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default About;
