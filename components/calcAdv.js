import React from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import "../scss/calcAdv.scss";

export default CalcAdv => (
  <div className="container-fluid calcAdv">
    <div className="dots-right" />
    <div className="dots-left" />
    <Fade left>
      <div className="arrow-left-yellow" />
    </Fade>
    <Fade right>
      <div className="arrow-right-red" />
    </Fade>

    <div className="container calcAdv-container">
      <div className="row">
        <div className="col-12">
          <div className="wrapper">
            <h3 className="header-min-colored">
              <span className="dark-color">Хотите узнать сколько </span>
              мы для вас экономим?
            </h3>
            <span className="calc-desc">
              Воспользуйтесь автоматической формой, введите исходные данные и
              узнайте результат.
            </span>

            <Link href="/calculator" as="/calculator">
              <a className="calc-link">
                <span>Калькулятор</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
