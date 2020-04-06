import React from 'react';
import Link from 'next/link';

export default ProductsAdv => (
  <div className="container-fluid productsAdv">
    <div className="dots-left" />
    <div className="dots-right" />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-lg-5 col-xl-5">
          <span className="header-min-colored">
            Наша <span className="dark-color"> продукция:</span>
          </span>
          <p className="text-big">
            У вас есть возможность взять любую нашу установку в лизинг
          </p>
          <p className="text">
            АО «Региональная лизинговая компания Ярославской области» предлагает
            Вам воспользоваться программой льготного лизинга на приобретение
            нового оборудования для субъектов индивидуального и малого
            предпринимательства по ставке от 6,5%.
          </p>
          <div className="button-grey-container">
            <a href="/products" className="button-grey">
              {' '}
              <span>Каталог</span>{' '}
            </a>
            <a href="/arenda-i-lizing" className="arenda-button">
              {' '}
              <span>Аренда и лизинг</span>{' '}
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 offset-xl-1">
          <div className="p-cards-plate">
            <Link
              href={{ pathname: '/products/MAN', query: '1' }}
              as="/products/MAN/1"
            >
              <a className="p-card">
                <span className="title">
                  MAN <span className="red">250</span>{' '}
                </span>
                <div className="img-container">
                  <img
                    src="/images/products/MAN250.jpg"
                    title="Газопоршневая станция MAN 250"
                    alt="MAN 250"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
            <Link
              href={{ pathname: '/products/MAN', query: '5' }}
              as="/products/MAN/5"
            >
              <a className="p-card">
                <span className="title">
                  MAN <span className="red">500</span>{' '}
                </span>
                <div className="img-container">
                  <img
                    src="/images/products/MAN500.jpg"
                    title="Газопоршневая станция MAN 500"
                    alt="MAN 500"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
            <Link
              href={{ pathname: '/products/JENBACHER', query: '41' }}
              as="/products/JENBACHER/41"
            >
              <a className="p-card">
                <span className="title">
                  JENBACHER <span className="red">1000</span>{' '}
                </span>
                <div className="img-container">
                  <img
                    src="/images/products/jenbacher-1000.jpg"
                    title="Газопоршневая станция Jenbacher 1000"
                    alt="Jenbacher 1000"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>

            <Link
              href={{ pathname: '/products/MTU', query: '33' }}
              as="/products/MTU/33"
            >
              <a className="p-card">
                <span className="title">
                  MTU <span className="red">2020</span>{' '}
                </span>
                <div className="img-container">
                  <img
                    src="/images/products/M2020.jpg"
                    title="Газопоршневая станция MTU 2020"
                    alt="Liebher 1000"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .productsAdv {
        overflow: hidden;
        padding-top: 30px;
        padding-bottom: 30px;
        position: relative;
      }
      .productsAdv .dots-left {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        left: -40%;
        bottom: 0;
        opacity: 0.5;
        background: url('/images/dots-min-red.png') 0% 0% no-repeat;
      }
      .productsAdv .container {
        background-color: #e5e5e5;
        border: 1px solid #dcdcdc;
        border-radius: 3px;
        padding-bottom: 30px;
      }
      .productsAdv .container .row .col-12 .header-min-colored {
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .productsAdv .container .row .col-12 .text-big {
        padding-bottom: 15px;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 22px;
        font-weight: 700;
        color: #404040;
      }
      .productsAdv .container .row .col-12 .text {
        padding-bottom: 45px;
      }
      .productsAdv .container .row .col-12 .p-cards-plate {
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
      }
      .productsAdv .container .row .col-12 .p-cards-plate .p-card .title {
        font-size: 17px;
        color: #353535;
        font-family: var(--molot-font);
      }
      .productsAdv .container .row .col-12 .p-cards-plate .p-card .title .red {
        color: var(--accent-red);
      }
      .productsAdv
        .container
        .row
        .col-12
        .p-cards-plate
        .p-card
        .img-container {
        width: 100%;
        height: 120px;
        border-radius: var(--border-radius);
        overflow: hidden;
        display: flex;
        align-items: center;
        background-color: #fff;
      }
      .productsAdv
        .container
        .row
        .col-12
        .p-cards-plate
        .p-card
        .img-container
        .p-img {
        border-radius: var(--border-radius);
        width: auto;
        max-width: 100%;
        display: block;
        height: auto;
      }
      .productsAdv .container .row .col-12 .button-grey-container {
        display: none;
      }

      @media (min-width: 576px) {
        .productsAdv {
          padding-top: 30px;
          padding-bottom: 90px;
          position: relative;
        }
        .productsAdv .dots-left {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          left: 0;
          bottom: 0;
        }
        .productsAdv .container {
          background-color: #e5e5e5;
          border: 1px solid #dcdcdc;
          border-radius: 3px;
          padding-bottom: 30px;
        }
        .productsAdv .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate {
          display: grid;
          grid-gap: 30px;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
        }
        .productsAdv .container .row .col-12 .p-cards-plate .p-card .title {
          font-size: 21px;
          color: #353535;
          font-family: var(--molot-font);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .title
          .red {
          color: var(--accent-red);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container {
          width: 100%;
          height: 150px;
          box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.25);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container
          .p-img {
          width: auto;
          max-width: 100%;
          display: block;
          height: auto;
        }
      }

      @media (min-width: 768px) {
        .productsAdv {
          padding-top: 30px;
          padding-bottom: 90px;
          position: relative;
        }
        .productsAdv .dots-left {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          left: 0;
          bottom: 0;
        }
        .productsAdv .container {
          background-color: #e5e5e5;
          border: 1px solid #dcdcdc;
          border-radius: 3px;
          padding-bottom: 30px;
        }
        .productsAdv .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate {
          margin-top: 30px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate .p-card .title {
          display: block;
          margin-bottom: 5px;
          font-size: 19px;
          color: #353535;
          font-family: var(--molot-font);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .title
          .red {
          color: var(--accent-red);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container {
          width: 100%;
          height: 112px;
        }
        .productsAdv .container .row .col-12 .button-grey-container {
          display: flex;
          margin-top: 0px;
        }
      }

      @media (min-width: 992px) {
        .productsAdv .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 30px;
          margin-bottom: 15px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate {
          margin-top: 30px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate .p-card .title {
          display: block;
          margin-bottom: 5px;
          font-size: 19px;
          color: #353535;
          font-family: var(--molot-font);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .title
          .red {
          color: var(--accent-red);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container {
          width: 100%;
          height: 150px;
        }
      }

      @media (min-width: 1200px) {
        .productsAdv {
          padding-bottom: 30px;
        }
        .productsAdv .dots-left {
          display: none;
        }
        .productsAdv .container {
          padding-top: 0px;
          background-color: rgba(0, 0, 0, 0);
          border: none;
          border-radius: 0;
          padding-bottom: 30px;
          position: relative;
        }
        .productsAdv .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 30px;
          margin-bottom: 15px;
          position: relative;
        }
        .productsAdv .container .row .col-12 .text-big {
          font-size: 17px;
          line-height: 26px;
          font-weight: 300;
          letter-spacing: 0.4px;
          color: var(--accent-red);
        }
        .productsAdv .container .row .col-12 .p-cards-plate {
          margin-top: 30px;
          grid-gap: 30px;
        }
        .productsAdv .container .row .col-12 .p-cards-plate .p-card .title {
          font-size: 24px;
          color: #535353;
          font-family: var(--molot-font);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .title
          .red {
          color: var(--accent-red);
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container {
          margin-top: 4px;
          transition: box-shadow 0.2s ease-in;
          height: 190px;
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card
          .img-container
          .p-img {
          width: auto;
          max-width: 100%;
          display: block;
          height: auto;
        }
        .productsAdv
          .container
          .row
          .col-12
          .p-cards-plate
          .p-card:hover
          .img-container {
          box-shadow: var(--box-shadow-up);
        }
        .productsAdv .container .row .col-12 .button-grey-container {
          margin-top: 0px;
        }
      }
    `}</style>
  </div>
);
