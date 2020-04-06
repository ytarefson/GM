import React from 'react';
import Fade from 'react-reveal/Fade';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBolt,
  faSun,
  faSnowflake,
  faRubleSign
} from '@fortawesome/free-solid-svg-icons';

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
        <Fade>
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
                    Возможность конвертации тепла в холод и получения
                    эффективного охлаждения.
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
        </Fade>
      </div>
    </div>
    <style jsx>{`
      .energyDecisions {
        padding-left: 15px;
        padding-right: 15px;
        padding-top: 30px;
        padding-bottom: 90px;
        background: url('/images/mini-map.png') -20% 39% no-repeat;
      }
      .energyDecisions .container .row .cards-plate {
        margin-top: 45px;
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto auto;
        grid-gap: 30px;
      }
      .energyDecisions .container .row .cards-plate .smart-card-container {
        text-align: center;
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card {
        z-index: 1;
        padding-bottom: 15px;
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card
        .card-img-container {
        bottom: 0;
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card
        .card-img-container
        .icon {
        filter: drop-shadow(3px 3px 5px rgba(0, 0, 0, 0.25));
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card
        .text-container {
        margin: 0 auto;
        max-width: 270px;
        z-index: 10;
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card
        .text-container
        .card-heading {
        z-index: 10;
        font-family: var(--molot-font);
        display: block;
        font-size: 21px;
        color: #7e7e7e;
        margin-top: 15px;
        margin-bottom: 5px;
        letter-spacing: 3px;
      }
      .energyDecisions
        .container
        .row
        .cards-plate
        .smart-card-container
        .smart-card
        .text-container
        .card-desc {
        font-size: 14px;
      }

      @media (min-width: 576px) {
        .energyDecisions {
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 90px;
          padding-bottom: 90px;
          background: url('/images/mini-map.png') -20% 39% no-repeat;
        }
        .energyDecisions .container .row .cards-plate {
          margin-top: 45px;
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: auto;
          grid-gap: 30px;
        }
        .energyDecisions .container .row .cards-plate .smart-card-container {
          text-align: center;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container {
          bottom: 0;
          position: relative;
          width: 100%;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container
          .icon {
          bottom: 0;
          left: 25%;
        }
      }

      @media (min-width: 768px) {
        .energyDecisions {
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 90px;
          padding-bottom: 90px;
          background: url('/images/mini-map.png') -20% 39% no-repeat;
        }
        .energyDecisions .container .row .cards-plate {
          margin-top: 60px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto;
          grid-gap: 30px;
          grid-row-gap: 60px;
        }
        .energyDecisions .container .row .cards-plate .smart-card-container {
          text-align: center;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container {
          bottom: 0;
          position: relative;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container
          .icon {
          position: relative;
          display: block;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .text-container
          .card-heading {
          margin-top: 0;
          font-size: 24px;
          color: #7e7e7e;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .text-container
          .card-desc {
          font-size: 16px;
        }
      }

      @media (min-width: 1200px) {
        .energyDecisions {
          padding-left: 15px;
          padding-right: 15px;
          padding-top: 90px;
          padding-bottom: 180px;
          background: url('/images/bg-map-left.png') 0% 60% no-repeat,
            url('/images/bg-map-right.png') 100% 65% no-repeat;
        }
        .energyDecisions .container .row .cards-plate {
          margin-top: 90px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: auto;
          grid-gap: 30px;
          grid-row-gap: 60px;
        }
        .energyDecisions .container .row .cards-plate .smart-card-container {
          text-align: center;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container {
          bottom: 0;
          position: relative;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .card-img-container
          .icon {
          position: relative;
          display: block;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .text-container
          .card-heading {
          margin-top: 15px;
          font-size: 24px;
          color: #7e7e7e;
        }
        .energyDecisions
          .container
          .row
          .cards-plate
          .smart-card-container
          .smart-card
          .text-container
          .card-desc {
          font-size: 16px;
        }
      }
    `}</style>
  </section>
);
