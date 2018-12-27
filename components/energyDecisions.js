import React from "react";

import "../scss/energyDecisions.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faSun,
  faSnowflake,
  faRubleSign
} from "@fortawesome/free-solid-svg-icons";

export default EnergyDecisions => (
  <div className="container-fluid p-0 energyDecisions">
    <div className="row m-0">
      <div className="col-12">
        <div className="container">
          <h2 className="header-common main-header pl-0">
            Интеллектуальные и Надежные Энергетические
            <br />
            Решения с Комбинированной Тепловой
            <br />и Электрической Энергией
          </h2>
          <br />
          <p className="text-common">
            Компания “Газовые машины” производит широкий спектр
            высокоэффективного энергетического оборудования для автономного
            энергоснабжения. Оборудование нашего производства обеспечивает
            электричеством и теплом десятки предприятий по всей России.
          </p>
          <br />
          <p className="text-common">
            Присоединяйтесь к энергетической революции!
          </p>
        </div>
      </div>
      <div className="mycontainer">
        <div className="row m-0">
          <div className="col-12 p-0">
            <div className="row cards-plate mx-0 p-0">
              <div className="p-0 col-12 col-sm-6 col-lg-3 card-plate">
                <div className="card">
                  <div className="card-image-container">
                    <FontAwesomeIcon icon={faBolt} size="3x" className="icon" />
                  </div>
                  <span className="card-heading">Электричество</span>
                  <div className="card-desc-container" />
                  <p className="card-desc">
                    Автономная экологически чистая энергия в любых количествах.
                  </p>
                </div>
              </div>

              <div className="p-0 col-12 col-sm-6 col-lg-3 card-plate">
                <div className="card">
                  <div className="card-image-container">
                    <FontAwesomeIcon icon={faSun} size="3x" className="icon" />
                  </div>
                  <span className="card-heading">Отопление</span>
                  <div className="card-desc-container" />
                  <p className="card-desc">
                    Дешёвое отопление как побочный продукт работы станции.
                  </p>
                </div>
              </div>

              <div className="p-0 col-12 col-sm-6 col-lg-3 card-plate">
                <div className="card">
                  <div className="card-image-container">
                    <FontAwesomeIcon
                      icon={faSnowflake}
                      size="3x"
                      className="icon"
                    />
                  </div>
                  <span className="card-heading">Охлаждение</span>
                  <div className="card-desc-container" />
                  <p className="card-desc">
                    Возможность конвертации тепла в холод и получения
                    эффективного охлаждения.
                  </p>
                </div>
              </div>

              <div className="p-0 col-12 col-sm-6 col-lg-3 card-plate">
                <div className="card">
                  <div className="card-image-container">
                    <FontAwesomeIcon
                      icon={faRubleSign}
                      size="3x"
                      className="icon"
                    />
                  </div>
                  <span className="card-heading">Выгода</span>
                  <div className="card-desc-container" />
                  <p className="card-desc">
                    В результате - экономия 50% в сравнении с аналогичными
                    объёмами.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
