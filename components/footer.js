import React from 'react';
import Link from 'next/link';
import menu from './menu';
import serviceList from './tables/serviceList';

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
                src="/images/logo-big.png"
                className="footer-logo"
                alt="ООО Газовые Машины"
                title="Логотип - Газовые машины"
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
            <a href="/calculator" className="footer-button calc-link">
              Калькулятор
            </a>
            <a href="/askForm" className="footer-button askForm-link">
              Опросный лист
            </a>
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
                150062, Россия, г. Ярославль,
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
    <style jsx>{`
      .text-grey {
        color: #e5e5e5;
      }

      .footer-button {
        display: block;
        width: 170px;
        height: 40px;
        border: 2px solid white;
        text-align: center;
        color: white;
        margin-bottom: 10px;
        line-height: 40px;
        border-radius: 3px;
        text-transform: uppercase;
        font-weight: 700;
      }
      .footer-button:hover {
        color: white;
        background-color: rgba(255, 255, 255, 0.2);
      }
      .footer {
        overflow: hidden;
        text-align: left;
        padding-top: 25px;
        padding-bottom: 60px;
        background: linear-gradient(115deg, #353535 0%, #2f2f2f 100%);
        position: relative;
      }
      .footer .gaz-mash {
        position: absolute;
        display: block;
        z-index: 0;
        left: 0;
        right: 0;
        top: 40%;
        transform: rotate(-90deg);
        width: auto;
        height: 200px;
        opacity: 0.05;
        background: url('/images/bg-gaz-mash.png') 50% 50% no-repeat;
        background-size: contain;
      }
      .footer .footer-logo-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        cursor: pointer;
      }
      .footer .footer-logo-container .footer-logo {
        display: block;
        width: auto;
        height: 30px;
        margin-bottom: 30px;
      }
      .footer .contacts-header {
        font-family: var(--molot-font);
        display: block;
        width: 100%;
        color: var(--l-grey);
        letter-spacing: 1px;
        font-size: 24px;
        line-height: 30px;
        margin-bottom: 15px;
        text-transform: uppercase;
      }
      .footer .link-1 {
        display: block;
        color: white;
      }
      .footer .adres-list {
        padding-left: 0;
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;
      }
      .footer .adres-list li {
        padding: 0;
      }
      .footer .adres-list .adres-map-link {
        width: 100%;
        color: #ffffff;
        font-size: 20px;
        font-weight: 700;
        line-height: 26px;
        font-weight: 300;
        letter-spacing: 0.5px;
      }
      .footer .adres-list .adres-phones {
        width: 100%;
        display: block;
      }
      .footer .adres-list .adres-phones .phone-link {
        font-family: var(--molot-font);
        display: block;
        margin: 0 auto;
        font-weight: 400;
        font-size: 23px;
        letter-spacing: 1px;
        line-height: 30px;
        color: #ffffff;
      }
      .footer .adres-list .adres-email {
        color: #ffffff;
        width: 100%;
        font-style: italic;
        font-size: 16px;
      }
      .footer .link-map .link-map-header {
        font-family: var(--molot-font);
        display: block;
        width: 100%;
        color: var(--l-grey);
        letter-spacing: 1px;
        font-size: 24px;
        line-height: 30px;
        text-transform: uppercase;
      }
      .footer .link-map .link-map-list {
        margin-top: 10px;
        padding-left: 0;
        display: flex;
        flex-direction: column;
      }
      .footer .link-map .link-map-list .link-map-item {
        padding: 0;
        margin-bottom: 5px;
      }
      .footer .link-map .link-map-list .link-map-item .link-map-link {
        display: block;
        color: #ffffff;
        width: 100%;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
      }
      .footer .rights-reserved {
        display: none;
      }
      .footer .intersell {
        width: 100%;
        margin-top: 15px;
        position: absolute;
        height: 50px;
        width: 180px;
        bottom: 0;
        right: -10px;
      }
      .footer .intersell .interlink {
        position: relative;
        z-index: 10;
        margin: 0 0 0 auto;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 180px;
        height: 50px;
        color: white;
        background-color: white;
        transform: skewX(-10deg);
      }
      .footer .intersell .interlink:hover .logo-cont {
        width: 50px;
        left: -50px;
        opacity: 1;
      }
      .footer .intersell .interlink:hover .logo-cont .logo {
        opacity: 1;
      }
      .footer .intersell .interlink .logo-cont {
        background-color: #2759d9;
        display: block;
        position: absolute;
        opacity: 1;
        z-index: 0;
        left: -10px;
        width: 10px;
        height: 50px;
        border-radius: 3px;
        margin: 0 auto;
        margin-bottom: 5px;
        transition: all 0.3s ease-out;
      }
      .footer .intersell .interlink .logo-cont .logo {
        opacity: 0;
        transform: skewX(10deg);
        font-family: var(--molot-font);
        position: relative;
        line-height: 50px;
        text-align: center;
        display: block;
        font-size: 15px;
        transition: all 0.5s ease-in 0.2s;
      }
      .footer .intersell .interlink .logo-cont::after {
        display: block;
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        width: 30px;
        height: 30px;
        border-radius: 50px;
        transform: translate(-50%, -50%);
        border: 2px solid white;
      }
      .footer .intersell .interlink .text-container {
        z-index: 1;
        transform: skewX(10deg);
        display: block;
        position: relative;
        width: auto;
        height: auto;
        padding-top: 12px;
      }
      .footer .intersell .interlink .text-container .logo-description {
        color: #353535;
        display: block;
        text-align: left;
        line-height: 11px;
        font-size: 11px;
        letter-spacing: 0.5px;
      }
      .footer .intersell .interlink .text-container .logo-name {
        display: block;
        color: #2759d9;
        text-align: left;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 18px;
        font-weight: 900;
      }

      @media (min-width: 768px) {
        .footer .adres-list {
          text-align: left;
        }
        .footer .adres-list .adres-map-link {
          font-size: 18px;
        }
        .footer .adres-list .adres-phones .phone-link {
          margin: 0 auto 0 0 !important;
        }
        .footer .link-map .link-map-header {
          text-align: left;
        }
        .footer .link-map .link-map-list {
          margin-top: 10px;
          padding-left: 0;
          display: flex;
          flex-direction: column;
        }
        .footer .link-map .link-map-list .link-map-item {
          padding: 0px 0px;
        }
        .footer .link-map .link-map-list .link-map-item .link-map-link {
          display: block;
          color: #ffffff;
          width: 100%;
          text-align: left;
          font-size: 16px;
          font-weight: 400;
          line-height: 28px;
        }
        .footer .rights-reserved {
          display: block;
          position: absolute;
          bottom: -20px;
          left: 0;
          padding-right: 10px;
          padding-left: 10px;
          font-size: 12px;
          height: 40px;
          line-height: 14px;
          color: white;
        }
      }

      @media (min-width: 992px) {
        .footer {
          padding-top: 15px;
        }
        .footer .white-stripe {
          display: block;
          position: absolute;
          content: '';
          background-color: #fafafa;
          opacity: 1;
          z-index: 0;
          top: 58px;
          right: 0;
          left: 0;
          height: 32px;
        }
        .footer .dots-right {
          position: absolute;
          width: 460px;
          height: 560px;
          top: 15%;
          right: -5%;
          opacity: 0.05;
          z-index: 0;
          background: url('/images/dots-big-white.png') 0% 0% no-repeat;
        }
        .footer .gaz-mash {
          left: 0;
          right: 0;
          top: 25%;
          width: auto;
          height: 350px;
          transform: rotate(0deg);
          background: url('/images/bg-gaz-mash.png') 5% 10% no-repeat;
        }
        .footer .footer-logo-container .footer-logo {
          display: block;
          width: auto;
          height: 30px;
          margin-bottom: 14px;
        }
        .footer .contacts-header {
          z-index: 1;
          color: #353535;
        }
        .footer .adres-list {
          text-align: left;
        }
        .footer .adres-list .adres-map-link {
          font-size: 18px;
        }
        .footer .adres-list .adres-phones .phone-link {
          margin: 0 auto 0 0 !important;
        }
        .footer .link-map .link-map-header {
          padding-left: 0px;
          text-align: left;
          color: #353535;
        }
        .footer .link-map .link-map-list {
          margin-top: 15px;
          padding-left: 0;
          display: flex;
          flex-direction: column;
        }
        .footer .link-map .link-map-list .link-map-item {
          padding: 0px 0px;
        }
        .footer .link-map .link-map-list .link-map-item .link-map-link {
          display: block;
          color: #ffffff;
          width: 100%;
          font-weight: 300;
          text-align: left;
          font-size: 16px;
          line-height: 26px;
        }
      }
    `}</style>
  </footer>
);

export default Footer;
