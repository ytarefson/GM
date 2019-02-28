import React from "react";
import Link from "next/link";
import "../scss/productsAdv.scss";

export default ProductsAdv => (
  <div className="container-fluid productsAdv">
    <div className="dots-left" />
    <div className="dots-right" />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-6 col-xl-4 offset-xl-1">
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
            предпринимательства.
          </p>
        </div>
        <div className="col-12 col-md-6 offset-xl-1">
          <div className="p-cards-plate">
            <Link
              href={{ pathname: "/products/LIEBHERR", query: "13" }}
              as="/products/LIEBHERR/13"
            >
              <a className="p-card">
                <span className="title">
                  Liebherr <span className="red">1000</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/L1000.jpg"
                    title="Газопоршневая станция Liebher 1000"
                    alt="Liebher 1000"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>

            <Link
              href={{ pathname: "/products/MTU", query: "24" }}
              as="/products/MTU/24"
            >
              <a className="p-card">
                <span className="title">
                  MTU <span className="red">700</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/M700.jpg"
                    title="Газопоршневая станция MTU 700"
                    alt="MTU 700"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>

            {/* <Link
              href={{ pathname: "/products/MTU", query: "30" }}
              as="/products/MTU/30"
            >
              <a className="p-card">
                <span className="title">
                  MTU <span className="red">1600</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/M1600.jpg"
                    title="Газопоршневая станция MTU 1600"
                    alt="MTU 1600"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>

            <Link
              href={{ pathname: "/products/YAMZ", query: "23" }}
              as="/products/YAMZ/23"
            >
              <a className="p-card">
                <span className="title">
                  ЯМЗ <span className="red">300</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/Y300.jpg"
                    title="Газопоршневая станция ЯМЗ 300"
                    alt="Liebher 1000"
                    className="p-img"
                  />
                </div>
              </a>
            </Link> */}

            <Link
              href={{ pathname: "/products/YAMZ", query: "20" }}
              as="/products/YAMZ/20"
            >
              <a className="p-card">
                <span className="title">
                  ЯМЗ <span className="red">100</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/Y100.jpg"
                    title="Газопоршневая станция ЯМЗ 100"
                    alt="ЯМЗ 100"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>

            <Link
              href={{ pathname: "/products/MTU", query: "33" }}
              as="/products/MTU/33"
            >
              <a className="p-card">
                <span className="title">
                  MTU <span className="red">2020</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/M2020.jpg"
                    title="Газопоршневая станция MTU 2020"
                    alt="Liebher 1000"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
          </div>
          <div className="button-grey-container">
            <a href="/products" className="button-grey">
              {" "}
              <span>каталог</span>{" "}
            </a>
          </div>
          {/* <div className="button-container button-flip3d-vertical2">
            <div className="flipper flipper-flip3d-vertical2">
              <div className="button front">
                каталог
                <i className="fa fa-github" />
              </div>
              <div className="button button-3d back">&#8594;</div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
);
