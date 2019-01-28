import React from 'react';
import PortfolioLinks from '../components/portfolioLinks';
//import Router from 'next/router';
import '../scss/mainAdv.scss';
import Link from './Link';

export default MainAdv => (
  <div className="container-fluid p-0 mainAdv">
    <div className="container main-container">
      <div className="row m-0">
        <div className="col-12 col-md-7 col-xl-7 p-0">
          <div className="container pt-3">
            <span className="main-desc">
              Проектирование
              <br />и производство
            </span>
            <h1 className="main-heading">Газовых электростанций</h1>
            {/* <h3 className="main-slogan">Мы предлагаем решение, а не бренд.</h3> */}
            <div className="catalog-button-container mb-5">
              <Link href="/products">
                <a className="catalog-button">
                  <img
                    className="icon-catalog"
                    src="../static/images/icon-catalog.png"
                    alt="Перейти в каталог"
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
          <div className="colcont">
            <div className="service-partners">
              <div className="logo-container" />
              <span className="service-text">
                мы являемся официальными сервисными партнерами:
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <PortfolioLinks />
  </div>
);

{
  /* <div className="row m-0 mainAdv-row">
      <div className="col-12 col-md-6 col-xl-4 d-none d-xl-block mainAdv-col">
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-1.jpg)'
          }}
          className="point point-1"
        />
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-2.jpg)'
          }}
          className="point point-2"
        />
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-3.jpg)'
          }}
          className="point point-3"
        />
      </div>
      <div className="col-12 col-md-6 col-xl-4 mainAdv-col">
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-4.jpg)'
          }}
          className="point point-4"
        />
        <div className="main-block">
          <span className="main-desc">
            Проектирование
            <br />и производство
          </span>
          <h1 className="main-heading">
            Газовых
            <br />
            электростанций
          </h1>
          <h3 className="main-slogan">Мы предлагаем решение, а не бренд.</h3>
        </div>
        <Link href="/products">
          <a className="d-block">
            <div
              style={{
                'background-image':
                  'url(./static/images/main-screen/point-6.jpg)'
              }}
              className="point point-6"
            >
              <span className="category-title">
                Каталог
                <br />
                продукции
              </span>
            </div>{' '}
          </a>
        </Link>
      </div>
      <div className="col-12 col-md-6 col-xl-4 d-none d-md-block mainAdv-col">
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-7.jpg)'
          }}
          className="point point-7"
        />
        <div
          style={{
            'background-image': 'url(./static/images/main-screen/point-8.jpg)'
          }}
          className="point point-8"
        />
        <Link href="/proekti">
          <a className="d-block">
            <div
              style={{
                'background-image':
                  'url(./static/images/main-screen/point-9.jpg)'
              }}
              className="point point-9"
            >
              <span className="category-title">
                Наши
                <br />
                работы
              </span>
            </div>
          </a>
        </Link>
      </div>
    </div> */
}
