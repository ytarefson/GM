import React from "react";

import "../scss/ourExp.scss";

export default OurExp => (
  <div className="container-fluid ourExp">
    <div className="mycontainer">
      <div className="row p-3">
        <div className="col-12 col-lg-9">
          <h2 className="header-common">
            Наш опыт и компетенции позволяют
            <br />
            удовлетворить самых
            <br />
            требовательных клиентов.
          </h2>
        </div>
        <div className="col-12 col-lg-9">
          <p className="text-common mt-3">
            Спектр поставляемого оборудования позволяет осуществлять полную
            модернизацию энергетического хозяйства предприятий, от замены
            устаревшего котельного оборудования, до организации полностью
            автономных систем.
          </p>
        </div>
        <div className="col-12">
          <ul className="ourExp-list">
            <div className="row">
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Промышленные предприятия
                  </span>
                </li>
              </div>

              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Объекты нефтегазовой сферы
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Лечебные учреждения и базы отдыха
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold mb-2">
                    Гостиницы, санатории и больницы
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Животноводческие комплексы
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Торгово-развлекательные центры
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Ледовые дворцы спорта и прочие спортивные обекты
                  </span>
                </li>
              </div>
              <div className="col-12 col-lg-6 ourExp-col mb-2">
                <li className="ourExp-li">
                  <span className="ourExp-span text-bold">
                    Объекты газотранспортной системы
                  </span>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <div className="col-12">
          <p className="text-common">
            Предлагаем весь спектр услуг по созданию Вашего автономного
            энергоцентра "под ключ": проектные, строительно-монатжные работы,
            пуско-наладочные работы, сопровождение объекта с первого дня до
            ввода в эксплуатацию, обучение эксплуатирующего персонала, сервисное
            обслуживание.
          </p>
        </div>
      </div>
    </div>
  </div>
);
