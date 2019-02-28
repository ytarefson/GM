import React from "react";
//import Router from 'next/router';
import "../scss/mainAdv.scss";
import Link from "./Link";
import Fade from "react-reveal/Fade";

export default MainAdv => (
  <div className="container-fluid mainAdv">
    <div className="dots-right" />
    <div className="dots-left" />
    <div className="gaz-mash" />
    <div className="border-left" />
    <div className="border-right" />

    <div className="container main-container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="text-container">
            <Fade left ssrFadeout>
              <span className="main-heading">
                Газопоршневые электростанции под ключь
              </span>
            </Fade>

            <h1 className="main-desc">
              Проектирование и производство газопоршневых электростанций и мини
              ТЭЦ.
            </h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="promo-fon" />
          <div className="img-container">
            <img
              src="../static/images/about-2.jpg"
              alt="Фото объекта"
              title="Энергоцентр ЯМЗ"
              className="img-main"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
