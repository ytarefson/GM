import React from "react";
import Link from "next/link";

import "../scss/calcAdv.scss";

export default CalcAdv => (
  <div className="container-fluid calcAdv">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="wrapper">
            <h3 className="header-min-colored">
              Хотите узнать сколько{" "}
              <span className="dark-color"> мы для вас экономим?</span>
            </h3>
            <span className="calc-desc">
              Воспользуйтесь автоматической формой, введите исходные данные и
              узнайте результат.
            </span>

            <Link href="/calculator.js" as="/calculator">
              <a className="calc-link">Калькулятор</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
