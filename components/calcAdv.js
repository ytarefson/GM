import React from 'react';
import Link from 'next/link';

import '../scss/calcAdv.scss';

export default CalcAdv => (
  <div className="container-fluid calcAdv">
    <div className="container">
      <div className="d-flex flex-column">
        <h2 className="calc-header">
          Хотите узнать сколько мы для вас экономим?
        </h2>
        <span className="calc-desc">
          Воспользуйтесь автоматической формой, введите исходные данные и
          <br className="d-none d-md-block" />
          узнайте результат.
        </span>
        <div className="row calc-container d-flex flex-column flex-md-row">
          <div className="col-12 col-md-2 col-lg-3 col-xl-2">
            <Link href="/calculator.js" as="/calculator">
              <a className="calc-link">Калькулятор</a>
            </Link>
          </div>
          <div className="text-container col-12 col-md-10 col-lg-9 col-xl-10 p-md-0 pl-xl-3">
            <span className="calc-text">
              В случае сложных проектов, наши специалисты помогут вам рассчитать
              экономическую эффективность.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);
