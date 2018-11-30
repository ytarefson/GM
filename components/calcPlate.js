import React from "react";
import Link from "next/link";

import "../scss/calculator.scss";

export default CalcPlate => (
  <div className="container-fluid calc-form-plate">
    <div className="mycontainer">
      <div className="row">
        <div className="col-12 col-md-9">
          <div className="calc-form">
            <form name="test" method="post" action="">
              <span className="calc-text-1">
                Ваша потребляемая мощность, кВт:
              </span>
              <input type="text" size="15" />
              <br />
              <br />
              <span className="calc-text-1">
                Стоимоcть электроэнергии на текущий момент, руб/кВт:
              </span>
              <input type="text" size="15" />
              <span className="calc-buttons">
                <input className="calc-send" type="submit" value="Расчитать" />
                <input className="calc-reset" type="reset" value="Очистить" />
              </span>
              <span className="profit">
                Ваша экономия от внедрения за год: рублей
              </span>
            </form>
          </div>
        </div>
        <div className="col-12 col-md-3">
          <span className="calc-text-2">
            На основании расчета можно оперативно принять управленческое решение
            о целесообразности внедрения объекта собственной генерации.
          </span>
        </div>
      </div>
      <div className="row">
        <div className="col-12 ">
          <span className="calc-text-2">
            В случае сложных проектов, наши специалисты помогут вам рассчитать
            экономическую эффективность.
          </span>
        </div>
      </div>
    </div>
  </div>
);
