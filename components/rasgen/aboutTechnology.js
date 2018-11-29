import React from "react";
import Link from "next/link";
import "../../scss/rasgen/aboutTechnology.scss";

export default AboutTechnology => (
  <div className="container-fluid aboutTechnology">
    <div className="mycontainer">
      <h2 className="header-common">Распределённая генерация</h2>
      <span className="subheading-red-bottom">О технологии</span>
      <span className="subheading-common-2">
        Многие десятилетия развитие энергетики строилось на создании крупных
        энергетических центров, в основе потребления которых стоят такие же
        крупные предприятия.
      </span>
      <div className="row m-0">
        <div className="col-12 col-lg-6 order-lg-2">
          <div className="img-container">
            <img
              src="../../static/images/about-tech.jpg"
              alt=""
              className="about-tech-pic"
            />
          </div>
        </div>
        <div className="col-12 col-lg-6 tm-cont order-lg-1">
          <p className="text-min">
            Все эти факторы определили развитие распределенной генерации,
            основанной на создании источников средней и малой мощности (до 25
            МВт) прямо на предприятии – потребители или в непосредственной
            близости к нему. Создание таких центров позволяет уйти от затрат на
            транспортировку электрической энергии, не резервировать
            дополнительные мощности в централизованных сетях ,построить
            оптимальный график производства и потребления электрической энергии,
            исходя из потребностей и особенностей технологии предприятия или
            объекта.
          </p>
        </div>
      </div>
    </div>
  </div>
);
