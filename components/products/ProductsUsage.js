import React, { Component } from 'react';

export default function ProductsUsage() {
  return (
    <div>
      <div className="container-fluid usage">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="usage-wrapper">
                <h4 className="header-min-colored pb-1 pb-md-3">
                  Область использования газопоршневых электростанций
                </h4>
                <p className="text text-bold">
                  Наши установки могут использоваться в качестве резервного,
                  вспомогательного или основного источника электроэнергии в
                  автономном режиме или совместно с централизованными системами
                  электроснабжения и тепла на:
                </p>
                <ul>
                  <li>
                    <span className="text">Промышленных предприятиях,</span>
                  </li>
                  <li>
                    <span className="text">
                      Буровых платформах, скважинах и шахтах,
                    </span>
                  </li>
                  <li>
                    <span className="text">Очистных сооружениях,</span>
                  </li>
                  <li>
                    <span className="text">В строительстве,</span>
                  </li>
                  <li>
                    <span className="text">
                      Административных и медицинских учереждениях,
                    </span>
                  </li>
                  <li>
                    <span className="text">
                      Аэропортах, гостиницах, узлах связи, системах
                      жизнеобеспечения и т. п.
                    </span>
                  </li>
                </ul>
                <p className="text-bold pt-3 pb-3">
                  Газопоршневые электростанции имеют высокий показатель КПД,
                  отсутствует влияние на КПД температуры окружающего воздуха,
                  меньшее потребление газа по сравнении с микротурбинами,
                  соответственно меньше выхлопа в окружающую среду.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .usage {
          background-color: var(--l-grey);
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .usage .text-bold {
          color: var(--accent-grey);
          font-weight: 300;
        }
        .usage ul {
          padding: 0;
          margin-top: 30px;
          width: 100%;
          height: auto;
          display: flex;
          flex-direction: column;
        }
        .usage ul li {
          position: relative;
          padding: 0;
          padding-top: 5px;
          padding-bottom: 5px;
          padding-left: 35px;
          margin-bottom: 5px;
        }
        .usage ul li::before {
          display: block;
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          background-color: var(--accent-red);
          border-radius: 10px;
          left: 0px;
          top: 50%;
          transform: translateY(-50%);
        }
        .usage ul li .text {
          line-height: 20px;
        }

        @media (min-width: 768px) {
          .usage {
            padding-top: 45px;
            padding-bottom: 45px;
          }
          .usage .text-bold {
            line-height: 25px;
            font-size: 19px;
          }
          .usage ul li .text {
            font-size: 19px;
            line-height: 20px;
          }
        }
        @media (min-width: 992px) {
          .usage {
            background-color: #fafafa;
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .usage .usage-wrapper {
            padding: 45px;
            background-color: transparent;
            background: linear-gradient(
                to right,
                #fff 25%,
                rgba(255, 255, 255, 0.85)
              ),
              url('/images/IMG_2.jpg') 100% 100% no-repeat;
            border-radius: 10px;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.15);
          }
          .usage .usage-wrapper .text-bold {
            line-height: 26px;
            font-size: 18px;
            color: var(--text);
            font-weight: 500;
          }
          .usage .usage-wrapper ul li {
            position: relative;
            padding: 0;
            padding-top: 10px;
            padding-bottom: 10px;
            padding-left: 35px;
          }
          .usage .usage-wrapper ul li::before {
            display: block;
            content: '';
            position: absolute;
            width: 14px;
            height: 14px;
            background-color: var(--accent-red);
            border-top-left-radius: 10px;
            left: 0px;
            top: 50%;
            transform: translateY(-50%);
            box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.2);
          }
        }
      `}</style>
    </div>
  );
}
