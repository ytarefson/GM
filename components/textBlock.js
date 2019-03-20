import React, { Component } from "react";
import "../scss/textBlock.scss";

export default class TextBlock extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid textBlock">
          <div className="container">
            <div className="row">
              <div className="col-12 header-min-colored mb-3">
                Газовые машины - миссия
              </div>
              <div className="col-12 col-md-9 col-lg-8">
                <p className="text-mission">
                  Компания Газовые машины помогает бизнесу, промышленности и
                  сельскому хозяйству получить доступ к дешёвой и экологически
                  чистой электроэнергии с помощью внедрения автономных
                  энергетических центров на базе модульных котельных.
                </p>
                <p className="text-mission">
                  Мы организуем эффективное электроснабжение любого предприятия
                  в черте доступности газовой ветки и поможем рассчитать,
                  спроектировать и запустить проект любой сложности.
                </p>
                <p className="text-mission">
                  Единственным побочным продуктом работы установок является
                  тепловая энергия. Поэтому зимой они помогают отапливать ваши
                  помещения, а летом могут работать в режиме охлаждения и
                  кондиционировать воздух. При постоянной нагрузке, наши
                  установки окупают себя за 2 года, а нашим клиентам продолжают
                  экономить миллионы рублей ежегодно еще много лет.
                </p>
              </div>
              <div className="col-12 d-none d-md-block col-md-3 offset-lg-1">
                <div className="text-img-container">
                  <img
                    src="static/images/text-img.png"
                    alt="Дешевая энергия"
                    title="Дешевая энергия"
                    className="text-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
