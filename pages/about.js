import React, { Component } from "react";
import Head from "../components/head";

import "../scss/about.scss";
import Layout from "../components/Layout";
import Lightbox from "react-image-lightbox";
// Yandex Maps
import { YMaps, Map, Placemark } from "react-yandex-maps";

const images = [
  "../static/images/about-1.jpg",
  "../static/images/about-2.jpg",
  "../static/images/about-3.jpg"
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
                <div className="col-12 col-md-12 p-0">
                  <span className="subheading-red-top pl-3">О компании</span>
                  <h1 className="header-razdel pl-3">ООО "Газовые машины"</h1>
                  <p className="subheading-common-2">
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
                {/* <div className="col-12 col-md-4 p-0">
                  <div className="logo-container">
                    <img
                      src="../static/images/logo-very-big.png"
                      alt="Логотип Газовые Машины"
                      className="logo-very-big"
                    />
                  </div>
                </div> */}
              </div>
              <div className="row m-0 mt-3 mb-3">
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="../static/images/about-1.jpg"
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
                      src="../static/images/about-2.jpg"
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
                      src="../static/images/about-3.jpg"
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
                <div className="col-12 p-0 pl-3 pr-3">
                  <p className="text-min mb-3">
                    С 2006 г. до настоящего времени компанией выпущено
                    <b>
                      {" "}
                      75 электростанций суммарной мощностью более 21 МВт.
                    </b>{" "}
                    В производственной линейке газовые электростанции MAN,
                    Liebherr, Jenbacher, MTU, MWM и ЯМЗ единичной мощностью до
                    10 МВт и напряжением до 10,5 кВ, работающие на природном,
                    сжиженном газе, пропан-бутановой смеси, попутном нефтяном
                    газе. Компания является официальным сервисным партнером MAN,
                    Liebherr, Motortech, Comap.
                  </p>
                  <p className="text-min mb-3">
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
          <div className="container-fluid contacts mt-5 mb-3">
            <div className="row m-0">
              <div className="col-12 col-md-4 order-md-2">
                <div className="contacts-content">
                  <ul className="adres-list">
                    <li>
                      <span className="contacts-heading">Контакты:</span>
                    </li>
                    <li>
                      <a
                        href="https://yandex.ru/maps/-/CBFyIKsQPB"
                        className="adres-map-link"
                      >
                        150062, Россия, г. Ярославль, пр. Авиаторов, 155
                      </a>
                    </li>
                    <li>
                      <div className="adres-phones">
                        <a href="callto:+74852260368" className="phone-link">
                          +7 (4852) 26-03-68
                        </a>
                        <a href="callto:+74852267960" className="phone-link">
                          +7 (4852) 26-79-60
                        </a>
                      </div>
                    </li>
                    <li>
                      <a
                        href="mailto:market@gmenergo.ru"
                        className="adres-email"
                      >
                        market@gmenergo.ru
                      </a>
                    </li>
                    <li>
                      <span className="link-1">График работы:</span>
                      <br />
                      <span className="link-1">пн-пт: 9:00-18:00</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-8 map-container order-md-1 p-0">
                <div
                  className="myMap"
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "relative"
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
          <div className="container-fluid">
            <div className="mycontainer pl-3 pr-3">
              <h2 className="header-sections pl-0">Сертификаты</h2>
              <div className="certs">
                <a
                  className="d-flex certs-card"
                  href="../static/docs/сканирован0642.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/сканирован0642.jpg"
                      alt="сертификат"
                      title="Сертификат с выставки Собственная генерация"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/liebherr.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/liebherr.jpg"
                      alt="сертификат"
                      title="Сертификат Liebherr"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/motortech.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/motortech.jpg"
                      alt="сертификат"
                      title="Сертификат Motortech"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/sert.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/sert.jpg"
                      alt="сертификат"
                      title="Сертификат соответствия ГОСТ"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/comap.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/comap.jpg"
                      alt="сертификат"
                      title="Сертификат ComAp"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/man.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-1"
                      src="../static/images/docs/man.jpg"
                      alt="сертификат"
                      title="Сертификат MAN"
                    />
                  </div>
                </a>
                <a
                  className="d-flex certs-card"
                  href="../static/docs/сканирован0643.pdf"
                  target="_blank"
                  rel="noopener"
                >
                  <div className="img-container">
                    <img
                      className="certs-img certs-img-2"
                      src="../static/images/docs/nagrada2.jpg"
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
                <div className="col-12">
                  <h2 className="header-sections pl-0">Направления</h2>

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
      </div>
    );
  }
}

export default About;
