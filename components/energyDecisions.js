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
  <section className="container-fluid energyDecisions">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h2 className="header-common">
            Интеллектуальные и Надежные Энергетические Решения с Комбинированной
            Тепловой и Электрической Энергией
          </h2>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12 cards-plate">
          <div className="smart-card-container">
            <div className="smart-card">
              <div className="card-img-container">
                <FontAwesomeIcon
                  icon={faBolt}
                  size="4x"
                  color="#d57d29"
                  className="icon"
                />
              </div>
              <div className="text-container">
                <span className="card-heading">Электричество</span>
                <p className="card-desc">
                  Автономная экологически чистая энергия в любых количествах.
                </p>
              </div>
            </div>
          </div>

          <div className="smart-card-container">
            <div className="smart-card">
              <div className="card-img-container">
                <FontAwesomeIcon
                  icon={faSun}
                  size="4x"
                  color="#d57d29"
                  className="icon"
                />
              </div>
              <div className="text-container">
                <span className="card-heading">Отопление</span>
                <p className="card-desc">
                  Дешёвое отопление как побочный продукт работы станции.
                </p>
              </div>
            </div>
          </div>

          <div className="smart-card-container">
            <div className="smart-card">
              <div className="card-img-container">
                <FontAwesomeIcon
                  icon={faSnowflake}
                  size="4x"
                  color="#d57d29"
                  className="icon"
                />
              </div>
              <div className="text-container">
                <span className="card-heading">Охлаждение</span>
                <p className="card-desc">
                  Возможность конвертации тепла в холод и получения эффективного
                  охлаждения.
                </p>
              </div>
            </div>
          </div>

          <div className="smart-card-container">
            <div className="smart-card">
              <div className="card-img-container">
                <FontAwesomeIcon
                  icon={faRubleSign}
                  size="4x"
                  color="#d57d29"
                  className="icon"
                />
              </div>
              <div className="text-container">
                <span className="card-heading">Выгода</span>
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
  </section>
);
