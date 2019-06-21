import React, { Component } from "react";
import "../../scss/products/products-usage.scss";

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
    </div>
  );
}
