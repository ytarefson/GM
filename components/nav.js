import React from 'react';
import Link from './Link';
import menu from './menu';
import '../scss/nav.scss';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <Link href="/">
      <a className="navbar-brand">
        <img src="../../static/images/logo.png" />
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
        {/* <li className="nav-item active">
          <Link prefetch href="/">
            <a className="nav-link">Главная</a>
          </Link>
        </li> */}
        {menu.map(({ key, href, label, as }) => (
          <li className="nav-item" key={key}>
            <Link activeClassName="active" href={href}>
              <a className="nav-link">{label}</a>
            </Link>
          </li>
        ))}
        <li className="nav-item">
          <Link href="/calculator" as="/calculator">
            <a className="nav-link nav-calc-link">Калькулятор</a>
          </Link>
        </li>
      </ul>
    </div>
    <style jsx>{`
      :global(body) {
        margin: 0;
      }
    `}</style>
  </nav>
);

export default Nav;
