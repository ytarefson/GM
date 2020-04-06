import React from 'react';

export default OurExp => (
  <div className="container-fluid ourExp">
    <div className="mycontainer">
      <div className="row p-3">
        <div className="col-12 col-lg-9">
          <h2 className="header-common pl-0">
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
    <style jsx>{`
      .ourExp {
        padding-bottom: 80px;
        background: #fafafa;
        background-image: url('/images/back-2.jpg');
        background-size: 25%;
        background-repeat: no-repeat;
        background-position: 100% 100%;
      }
      .ourExp .ourExp-list {
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        padding-left: 30px;
      }
      .ourExp .ourExp-list .ourExp-li {
        position: relative;
      }
      .ourExp .ourExp-list .ourExp-li .ourExp-span {
        line-height: 20px;
      }
      .ourExp .ourExp-list .ourExp-li::before {
        content: '';
        position: absolute;
        width: 20px;
        height: 20px;
        background: linear-gradient(45deg, #de975d 0%, #c73629 100%);
        border-radius: 5px;
        left: -30px;
        z-index: 2;
        top: 50%;
        transform: translateY(-50%);
      }
      .ourExp .ourExp-list .ourExp-li::after {
        content: '';
        position: absolute;
        width: 14px;
        height: 14px;
        border-radius: 3px;
        z-index: 3;
        left: -27px;
        top: 50%;
        transform: translateY(-50%);
        background: #fafafa;
      }

      @media (min-width: 992px) {
        .ourExp .ourExp-list {
          margin: 50px 0;
        }
        .ourExp .ourExp-list .ourExp-col {
          margin: 10px 0;
        }
        .ourExp .ourExp-list .ourExp-li {
          min-height: 60px;
          position: relative;
          display: flex;
          align-items: center;
        }
        .ourExp .ourExp-list .ourExp-li::before {
          content: '';
          width: 36px;
          height: 36px;
        }
        .ourExp .ourExp-list .ourExp-li::after {
          content: '';
          width: 26px;
          height: 26px;
          border-radius: 1px;
          left: -25px;
        }
        .ourExp .ourExp-list .ourExp-li .ourExp-span {
          margin-left: 20px;
          font-size: 18px;
          line-height: 26px;
        }
      }
    `}</style>
  </div>
);
