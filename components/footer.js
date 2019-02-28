import React from "react";
import Link from "next/link";
import menu from "./menu";
import serviceList from "../components/tables/serviceList";
import "../scss/footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="gaz-mash" />
    <div className="dots-right" />
    <div className="white-stripe" />
    <div className="container">
      <div className="row m-0">
        <div className="col-12">
          <Link href="/">
            <a className="footer-logo-container">
              <img
                src="../../static/images/logo-big.png"
                className="footer-logo"
                alt="ООО Газовые Машины"
              />
            </a>
          </Link>
        </div>
        <div className="col-12 col-sm-6 col-lg-3 link-map">
          <span className="link-map-header">Карта сайта:</span>
          <ul className="link-map-list">
            {menu.map(({ key, href, label, as }) => (
              <li className="link-map-item" key={key}>
                <Link href={href} as={as}>
                  <a className="link-map-link">{label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-sm-6 col-lg-5 link-map">
          <span className="link-map-header">Услуги:</span>
          <ul className="link-map-list">
            {serviceList.map(item => (
              <li className="link-map-item" key={item.key}>
                <Link href={`/uslugi/${item.href}`} as={`/uslugi/${item.as}`}>
                  <a className="link-map-link">{item.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <span className="contacts-header">Контакты:</span>
          <ul className="adres-list">
            <li>
              <a
                href="https://yandex.ru/maps/-/CBFyIKsQPB"
                className="adres-map-link pb-3"
                target="_blank"
              >
                Россия, Ярославль,
                <br />
                пр-т.&nbsp;Авиаторов-155
              </a>
            </li>
            <li>
              <div className="adres-phones">
                <a
                  href="tel:+74852260368"
                  className="phone-link phone-link-big"
                >
                  +7 <b className="text-grey">(4852)</b> 26-03-68
                </a>
                <a href="tel:+74852267960" className="phone-link">
                  +7 <b className="text-grey">(4852)</b> 26-79-60
                </a>
              </div>
            </li>
            <li>
              <a href="mailto:market@gmenergo.ru" className="adres-email">
                market@gmenergo.ru
              </a>
            </li>
            <li />
          </ul>
          <span className="link-1">график работы:</span>
          <span className="link-1">пн-пт: 9:00-18:00</span>
        </div>
      </div>
    </div>
    <div className="intersell">
      <a href="http://intersell.su/" className="interlink">
        <div className="text-container">
          <span className="logo-description">Создание сайта</span>
          <span className="logo-name">intersell.su</span>
        </div>
        <div className="logo-cont">
          <span className="logo">IS</span>
        </div>
      </a>
    </div>
    <div className="rights-reserved">
      2006 - 2019 ООО "Газовые машины" &copy; Все права защищены.
    </div>
  </footer>
);

export default Footer;
