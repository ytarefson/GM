import React from "react";
import Link from "next/link";
import "../scss/productsAdv.scss";

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
              {" "}
              <span>каталог</span>{" "}
            </a>
          </div>
        </div>
        <div className="col-12 col-md-6 offset-xl-1">
          <div className="p-cards-plate">
            <Link
              href={{ pathname: "/products/MAN", query: "1" }}
              as="/products/MAN/1"
            >
              <a className="p-card">
                <span className="title">
                  MAN <span className="red">250</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/MAN250.jpg"
                    title="Газопоршневая станция MAN 250"
                    alt="MAN 250"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
            <Link
              href={{ pathname: "/products/MAN", query: "5" }}
              as="/products/MAN/5"
            >
              <a className="p-card">
                <span className="title">
                  MAN <span className="red">500</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/MAN500.jpg"
                    title="Газопоршневая станция MAN 500"
                    alt="MAN 500"
                    className="p-img"
                  />
                </div>
              </a>
            </Link>
            <Link
              href={{ pathname: "/products/JENBACHER", query: "41" }}
              as="/products/JENBACHER/41"
            >
              <a className="p-card">
                <span className="title">
                  JENBACHER <span className="red">1000</span>{" "}
                </span>
                <div className="img-container">
                  <img
                    src="/static/images/products/jenbacher-1000.jpg"
                    title="Газопоршневая станция Jenbacher 1000"
                    alt="Jenbacher 1000"
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
