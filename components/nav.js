import React from 'react';
import Link from './Link';
import menu from './menu';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light">
    <Link href="/">
      <a className="navbar-brand">
        <img
          src="/images/logo-grey.png"
          title="Перейти на главную"
          alt="Логотип Газовые Машины"
        />
      </a>
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon-mine" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {menu.map(({ key, href, label, as }) => (
          <li className="nav-item" key={key}>
            <Link activeClassName="active" href={href} as={as}>
              <a className="nav-link">{label}</a>
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <div className="contacts-container">
            <span className="lorem">Энергетическое оборудование</span>
            <span className="tel">
              +7 (4852) 26&middot;03&middot;68, 26&middot;79&middot;60
            </span>
            <span className="pochta">market@gmenergo.ru</span>
          </div>
        </li>
      </ul>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
      }

      .navbar {
        position: fixed !important;
        top: 0;
        left: 0;
        right: 0;
        z-index: 10;
        min-height: 70px;
        background: #fafafa;
        border-bottom: 15px solid white;
        overflow: hidden;
        box-shadow: 0 35px 30px -30px rgba(0, 0, 0, 0.05);
      }
      .navbar .navbar-brand img {
        display: block;
        height: 25px;
      }
      .navbar .navbar-nav {
        position: relative;
      }
      .navbar .navbar-nav .nav-item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0;
        position: relative;
      }
      .navbar .navbar-nav .nav-item:nth-child(2)::after {
        position: absolute;
        content: 'новинка';
        color: var(--accent-red);
        left: 70%;
        top: -6px;
        transform: translateX(-50%);
        font-size: 12px;
        font-weight: 700;
        text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.05);
        letter-spacing: 2.2px;
      }
      .navbar .navbar-nav .nav-item:first-child {
        margin-top: 15px;
      }
      .navbar .navbar-nav .nav-item:last-child {
        margin-top: 15px;
      }
      .navbar .navbar-nav .nav-item .contacts-container {
        margin-bottom: 5px;
        text-align: center;
        background-color: white;
        padding-top: 10px;
        padding-bottom: 10px;
        border-radius: 3px;
      }
      .navbar .navbar-nav .nav-item .contacts-container .lorem {
        display: block;
        font-size: 12px;
        letter-spacing: 2px;
        color: #272727;
      }
      .navbar .navbar-nav .nav-item .contacts-container .tel {
        display: block;
        font-weight: 900;
        color: $text;
      }
      .navbar .navbar-nav .nav-item .contacts-container .pochta {
        line-height: 12px;
        font-size: 13px;
        display: block;
        color: var(--accent-red);
        letter-spacing: 1px;
      }
      .navbar .navbar-nav .nav-item .nav-link {
        font-size: 15px;
        font-weight: 300;
        color: #525252;
        position: relative;
      }
      .navbar .navbar-nav .nav-item .nav-link:hover {
        color: var(--accent-red);
      }
      .navbar .navbar-nav .nav-item .nav-link::before {
        position: absolute;
        content: '';
        display: block;
        width: 0%;
        height: 1px;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(
          to right,
          rgba(255, 0, 0, 0) 0%,
          rgb(211, 20, 20) 50%,
          rgba(255, 0, 0, 0) 100%
        );
        transition: all 0.2s;
      }
      .navbar .navbar-nav .nav-item .nav-link:hover::before {
        width: 100%;
      }
      .navbar .navbar-nav .nav-item .active {
        color: var(--accent-red) !important;
        font-weight: 500 !important;
      }
      .navbar .navbar-toggler {
        height: 40px;
        border: none;
      }
      .navbar .navbar-toggler .navbar-toggler-icon-mine {
        background: black;
        width: 21px;
        height: 2px;
        display: block;
        position: relative;
      }
      .navbar .navbar-toggler .navbar-toggler-icon-mine::before,
      .navbar .navbar-toggler .navbar-toggler-icon-mine::after {
        content: '';
        position: absolute;
        width: 21px;
        height: 2px;
        background: black;
        left: 0;
        top: 7px;
      }
      .navbar .navbar-toggler .navbar-toggler-icon-mine::after {
        top: -7px;
      }

      @media (min-width: 992px) {
        .navbar {
          padding-top: 25px;
          padding-bottom: 20px;
        }
        .navbar .navbar-nav .nav-item:first-child {
          margin-top: 0px;
        }
        .navbar .navbar-nav .nav-item:last-child {
          margin-top: 0px;
        }
        .navbar .navbar-nav .nav-item .contacts-container {
          background-color: #fafafa;
          margin-bottom: 0px;
          margin-left: 15px;
          text-align: right;
        }
        .navbar .navbar-nav .nav-item .contacts-container.lorem {
          line-height: 15px;
          display: block;
          font-weight: 300;
          font-size: 12px;
          letter-spacing: 2px;
          color: #929292;
        }
        .navbar .navbar-nav .nav-item .contacts-container.tel {
          display: block;
          font-weight: 900;
          letter-spacing: 0.6px;
        }
        .navbar .navbar-nav .nav-item .contacts-container.pochta {
          line-height: 12px;
          font-size: 13px;
          display: block;
          font-weight: 300;
          letter-spacing: 2px;
        }
        #navbarNav {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }
      }
      @media (min-width: 1200px) {
        .navbar {
          padding-top: 20px !important;
          padding-bottom: 10px !important;
        }
        .navbar .navbar-brand img {
          display: block;
          height: 40px;
        }
        .navbar .navbar-nav .nav-item:nth-child(2)::after {
          top: 10px;
        }
        .navbar .navbar-nav .nav-item .nav-link {
          font-size: 15px;
        }
      }
      @media (min-width: 1400px) {
        .navbar .navbar-brand img {
          margin-left: 30px;
        }

        .navbar .navbar-nav .nav-item {
          padding: 0 7px;
        }
        .navbar .navbar-nav .nav-item .nav-link {
          font-size: 16px;
          font-weight: 300;
        }
        .navbar .navbar-nav .nav-item .contacts-container {
          margin-bottom: 0px;
          margin-left: 60px;
          margin-right: 15px;
          text-align: right;
        }
        .navbar .navbar-nav .nav-item .contacts-container .lorem {
          line-height: 15px;
          display: block;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 2.7px;
          color: #a3a3a3;
        }
        .navbar .navbar-nav .nav-item .contacts-container .tel {
          display: block;
          font-size: 20px;
          line-height: 28px;
          font-weight: 700;
          letter-spacing: -0.5px;
          color: #525252;
        }
        .navbar .navbar-nav .nav-item .contacts-container .pochta {
          line-height: 12px;
          font-size: 13px;
          display: block;
          font-weight: 300;
          letter-spacing: 2px;
        }
        .navbar .navbar-nav .nav-calc-link {
          font-size: 15px;
          position: relative;
        }
      }
    `}</style>
  </nav>
);

export default Nav;
