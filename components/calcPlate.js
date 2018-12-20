import React, { Component } from 'react';

import '../scss/calculator.scss';

export class CalcPlate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energyUsed: 500,
      energyCost: 6,
      profit: 0
    };
    this.handleChangeUsed = this.handleChangeUsed.bind(this);
    this.handleChangeCost = this.handleChangeCost.bind(this);
    this.handleProfitChange = this.handleProfitChange.bind(this);
  }

  handleChangeUsed(e) {
    const profit = this.handleProfitChange();
    this.setState({
      energyUsed: e.target.value,
      profit
    });
  }
  handleChangeCost(e) {
    const profit = this.handleProfitChange();
    this.setState({
      energyCost: e.target.value,
      profit
    });
  }

  handleProfitChange() {
    const YearEnergyCost = 8500 * this.state.energyUsed * this.state.energyCost;
    const YearServiceCost = (8500 * this.state.energyUsed * 1.2 * 1900) / 1163;
    const OurYearEnergyCost = (8500 * this.state.energyUsed * 6) / 4;
    const newProfit = YearEnergyCost + YearServiceCost - OurYearEnergyCost;
    return newProfit.toFixed(0);
  }

  render() {
    const { energyUsed, energyCost, profit } = this.state;

    return (
      <div className="container-fluid calc-form-plate">
        <div className="mycontainer">
          <div className="row">
            <div className="col-12 col-md-9">
              <div className="calc-form">
                <form name="test" method="post" action="">
                  <span className="calc-text-1">
                    Ваша потребляемая мощность, кВт:
                  </span>
                  <input
                    type="number"
                    size="15"
                    value={energyUsed}
                    onChange={this.handleChangeUsed}
                  />
                  <br />
                  <br />
                  <span className="calc-text-1">
                    Стоимоcть электроэнергии на текущий момент, руб/кВт:
                  </span>
                  <input
                    type="number"
                    size="15"
                    value={energyCost}
                    onChange={this.handleChangeCost}
                  />
                  {/* <span className="calc-buttons">
                    <input
                      className="calc-send"
                      type="submit"
                      value="Расчитать"
                    />
                    <input
                      className="calc-reset"
                      type="reset"
                      value="Очистить"
                    />
                  </span> */}
                </form>
                <span className="profit">
                  {`Ваша экономия от внедрения за год: ${profit} рублей`}
                </span>
              </div>
            </div>
            <div className="col-12 col-md-3">
              <span className="calc-text-2">
                На основании расчета можно оперативно принять управленческое
                решение о целесообразности внедрения объекта собственной
                генерации.
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 ">
              <span className="calc-text-2">
                В случае сложных проектов, наши специалисты помогут вам
                рассчитать экономическую эффективность.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CalcPlate;
