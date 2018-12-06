import React from "react";
import Link from "next/link";
import menu from "./menu";
import "../scss/footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="mycontainer">
      <div className="row m-0">
        <div className="col-12 col-lg-4 order-lg-4 footer-logo-container">
          <Link href="/">
            <img
              src="../../static/images/logo-big.png"
              className="footer-logo"
              alt="ООО Газовые Машины"
            />
          </Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <span className="contacts-header">Контакты:</span>
          <ul className="adres-list">
            <li>
              <Link href="https://yandex.ru/maps/-/CBFyIKsQPB" as="yandex-map">
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
              <a href="mailto:market@gmenergo.ru" className="adres-email">
                market@gmenergo.ru
              </a>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-4 link-map">
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
      </div>
    </div>
    <div className="rights-reserved">
      2006 - 2019 ООО "Газовые машины" &copy; Все права защищены.
    </div>
  </footer>
);

export default Footer;
