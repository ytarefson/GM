import React from "react";
import "../scss/jumbo-askForm.scss";

export default function JumboAskForm() {
  return (
    <div>
      <div className="container-fluid jumbo-askForm">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="wrapper">
                <div className="text-container">
                  <span className="jumbo-title">
                    Нужен детальный расчёт энергоустановки?
                  </span>
                  <span className="jumbo-text">
                    Заполни анкету и наши специалисты подготовят вас подробный
                    ответ.{" "}
                  </span>
                </div>
                <div className="button-container">
                  <a href="/askForm" className="button-askForm">
                    Опросный лист
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
