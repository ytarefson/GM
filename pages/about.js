import React, { Component } from "react";
import Link from "next/link";
import Head from "../components/head";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "../scss/about.scss";
import Layout from "../components/Layout";

export class About extends Component {
  render() {
    return (
      <div>
        <Head
          title="О компании"
          description='Подбробная информация о деятельности компании ООО "Газовые машины"'
        />
        <Layout>
          <div className="container-fluid about">
            <div className="mycontainer">
              <div className="row m-0">
                <div className="col-12 col-md-6 p-0">
                  <span className="subheading-red-top">О компании</span>
                  <h2 className="header-razdel">История, факты...</h2>
                  <p className="subheading-common-2 mt-5">
                    Компания «Газовые машины» образована 10 октября 2006 г. В
                    течении 12 лет основным профилем деятельности компании
                    является производство и поставка "под ключ" автономных
                    энергетических центров на базе газопоршневых электростанций
                    с технологиями когенерации и тригенерации, сервисное
                    обслуживание газопоршневых электростанций, поставка запасных
                    частей и расходных материалов для эксплуатации газовых
                    генераторов.
                  </p>
                </div>
                <div className="col-12 col-md-6 p-0">
                  <div className="logo-container">
                    <img
                      src="../static/images/logo-very-big.png"
                      alt=""
                      className="logo-very-big"
                    />
                  </div>
                </div>
              </div>
              <div className="row m-0 mt-5 mb-5">
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="../static/images/about-1.jpg"
                      alt=""
                      className="about-pic"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="../static/images/about-2.jpg"
                      alt=""
                      className="about-pic"
                    />
                  </div>
                </div>
                <div className="col-12 col-md-4">
                  <div className="img-container">
                    <img
                      src="../static/images/about-3.jpg"
                      alt=""
                      className="about-pic"
                    />
                  </div>
                </div>
              </div>
              <div className="row m-0">
                <div className="col-12 p-0 pl-3 pr-3">
                  <p className="text-min">
                    С 2006 г. до настоящего времени компанией выпущено{" "}
                    <b>75 электростанций суммарной мощностью более 21 МВт.</b> В
                    производственной линейке газовые электростанции MAN,
                    Liebherr и ЯМЗ единичной мощностью до 1 МВт и напряжением до
                    10,5 кВ, работающие на природном, сжиженном газе,
                    пропан-бутановой смеси, попутном нефтяном газе.
                  </p>
                  <p className="text-min">
                    Производственные площади комании 1 900 кв.м. расположены в
                    г. Ярославле. Производство сертифицировано концерном MAN и
                    компанией Motortech, что подтверждает высокое качество
                    выпускаемой продукции. Число сотрудников компании составляет
                    40 человек. 80 % составляет инженерный персонал с высшим
                    образованием, прошедший обучение в концернах MAN и Liebherr.
                    Технические руководители компании имеют ученую степень
                    кандидатов технических наук.
                  </p>
                  <p className="text-min">
                    <b>
                      Приглашаем посетить наше производство, где Вы, в удобное
                      для Вас время, сможете ознакомится с образцами продукции.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid contacts pt-4 mt-5 mb-3">
            <div className="mycontainer">
              <span className="contacts-heading">Контакты:</span>
            </div>
            <div className="row m-0">
              <div className="col-12 col-md-6 order-md-2">
                <div className="contacts-content">
                  <ul className="adres-list">
                    <li>
                      <Link
                        href="https://yandex.ru/maps/-/CBFyIKsQPB"
                        as="yandex-map"
                      >
                        <a className="adres-map-link">
                          РОССИЯ, Ярославль, пр. Авиаторов, 155
                        </a>
                      </Link>
                    </li>
                    <li>
                      <div className="adres-phones">
                        <a
                          href="callto:+74852260368"
                          className="phone-link phone-link-big"
                        >
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
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6 map-container order-md-1 p-0">
                <Map
                  google={this.props.google}
                  zoom={14}
                  initialCenter={{
                    lat: 57.659441,
                    lng: 39.949507
                  }}
                >
                  <Marker
                    onClick={this.onMarkerClick}
                    name={"Current location"}
                  />
                  {/* <InfoWindow onClose={this.onInfoWindowClose}>
                  <div>
                    <h1>{this.state.selectedPlace.name}</h1>
                  </div>
                </InfoWindow> */}
                </Map>
              </div>
            </div>
          </div>
          <div className="container-fluid napravleniya">
            <div className="mycontainer">
              <div className="row m-0">
                <div className="col-12">
                  <h2 className="header-common pl-0">Направления</h2>
                  <span className="subheading-red-bottom pl-0">
                    Полный цикл производства
                  </span>
                  <p className="text-min">
                    Кроме производства мини-ТЭС мы осуществляем поставку,
                    трансформаторных подстанций, КРУ, и прочего вспомогательного
                    оборудования и обеспечиваем поставку запасных частей.
                    Предлагаем весь спектр услуг по созданию Вашего автономного
                    энергоцентра "под ключ": проектные, строительно-монатжные
                    работы, пуско-наладочные работы, сопровождение объекта с
                    первого дня до ввода в эксплуатацию, обучение
                    эксплуатирующего персонала, сервисное обслуживание.
                  </p>
                  <br />
                  <p className="text-min">
                    В нашей компетенции "готовые решения" по организации
                    автономного энергоснабжения для: промышленных предприятий,
                    объектов нефтегазовой сферы, объектов газотранспортной
                    системы, животноводческих комплексов,
                    торгово-развлекательных центров, ледовых дворцов спорта и
                    прочих спортивных объектов, гостиниц, санаториев, больниц и
                    лечебных учреждений, баз отдыха.
                  </p>
                  <br />
                  <p className="text-min">
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyCB0I6jT_lFFe5FCdsB7umIxzSSKrgaxvs"
})(About);
