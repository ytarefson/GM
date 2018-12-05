import React from 'react';
import Link from 'next/link';
import menu from './menu';
import '../scss/footer.scss';

const Footer = () => (
  <section className="footer">
    <div className="mycontainer">
      <div className="row m-0">
        <div className="col-12 col-lg-3 order-lg-4 footer-logo-container">
          <Link href="/">
            <img
              src="../../static/images/logo-big.png"
              className="footer-logo"
              alt="ООО Газовые Машины"
            />
          </Link>
        </div>
        <div className="col-12 col-md-4 offset-md-2 offset-lg-0">
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
        <div className="col-12 col-md-4 col-lg-4 link-map">
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
  </section>
);

export default Footer;
