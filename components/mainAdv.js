import React from 'react';
import PortfolioLinks from '../components/portfolioLinks';
//import Router from 'next/router';
import '../scss/mainAdv.scss';
import Link from './Link';

export default MainAdv => (
  <div className="container-fluid mainAdv p-0">
    <div className="container main-container">
      <div className="row m-0">
        <div className="col-12 col-md-7 col-xl-7 p-0">
          <div className="container pt-3">
            <span className="main-desc">
              Проектирование
              <br />и производство
            </span>
            <h1 className="main-heading">Газовых электростанций</h1>
            <h3 className="main-slogan">Мы предлагаем решение, а не бренд.</h3>
            <div className="catalog-button-container">
              <Link href="/products">
                <a className="catalog-button">
                  <img
                    className="icon-catalog"
                    src="../static/images/icon-catalog.png"
                  />
                </a>
              </Link>
              <span className="catalog-button-title">
                &#9668; Каталог продуктов
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-5 col-xl-5 p-0">
          <div className="text-right main-img">
            {/* <img
              className="d-block d-md-none"
              src="../static/images/header-pic.png"
              alt="Газовые электростанции"
            /> */}
            <img
              className="d-block big-pic"
              src="../static/images/engine.png"
              alt="Газовые электростанции"
            />
            <div className="d-block big-pic-shadow" />
          </div>
        </div>
      </div>
    </div>
    <PortfolioLinks />
  </div>
);
