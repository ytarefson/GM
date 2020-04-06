import React, { Component } from 'react';

export class CalcPlate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      energyUsed: 0,
      energyCost: 0,
      profit: 0
    };
    this.handleChangeUsed = this.handleChangeUsed.bind(this);
    this.handleChangeCost = this.handleChangeCost.bind(this);
    this.handleProfitChange = this.handleProfitChange.bind(this);
  }

  handleChangeUsed(e) {
    const profit = this.handleProfitChange(
      e.target.value,
      this.state.energyCost
    );
    this.setState({
      energyUsed: e.target.value,
      profit
    });
  }
  handleChangeCost(e) {
    const profit = this.handleProfitChange(
      this.state.energyUsed,
      e.target.value
    );
    this.setState({
      energyCost: e.target.value,
      profit
    });
  }

  handleProfitChange(energyUsed, energyCost) {
    const YearEnergyCost = 8500 * energyUsed * energyCost;
    const YearServiceCost = (8500 * energyUsed * 1.2 * 1900) / 1163;
    const OurYearEnergyCost = (8500 * energyUsed * 6) / 4;
    const HalfEnergy = 8500 * energyUsed * 0.5;
    const Profit =
      YearEnergyCost + YearServiceCost - OurYearEnergyCost - HalfEnergy;
    const newProfit = new Intl.NumberFormat({ useGrouping: true }).format(
      Profit
    );

    return newProfit.replace(/(,\d{1,})/gm, '');
  }

  render() {
    const { energyUsed, energyCost, profit } = this.state;

    return (
      <div className="container calc-form-plate">
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
              </form>
              <span className="profit">
                Ваша экономия от внедрения за год: <b>{`${profit}`}</b> рублей
              </span>
            </div>
          </div>
          <div className="col-12 col-md-3">
            <span className="calc-text-2 mt-5">
              На основании расчета можно оперативно принять управленческое
              решение о целесообразности внедрения объекта собственной
              генерации.
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-12 ">
            <span className="calc-text-2 mt-md-5">
              В случае сложных проектов, наши специалисты помогут вам рассчитать
              экономическую эффективность.
            </span>
          </div>
        </div>
        <style jsx>{`
          .calculator {
            padding-top: 30px;
            padding-bottom: 80px;
          }
          .calculator .container .row .col-12 .calc-header {
            font-size: 23px;
            line-height: 28px;
            font-family: var(--molot-font);
            color: #5a5a5a;
          }

          .header-razdel {
            line-height: 26px;
          }
          .header-razdel b {
            color: #cb4828;
          }
          .calc-text-1 {
            display: block;
            font-size: 17px;
            font-weight: 300;
            letter-spacing: -0.4px;
            line-height: 22px;
            margin-bottom: 15px;
          }
          .calc-text-2 {
            display: block;
            margin-top: 15px;
            font-size: 14px;
            font-weight: 300;
            letter-spacing: 0.3px;
            line-height: 22px;
          }
          input {
            padding: 10px 20px;
            background-color: #fff;
            border: 1px solid #dcdcdc;
            border-radius: 3px;
            color: #353535;
          }
          .calc-buttons {
            display: flex;
            padding: 10px 0;
            margin-top: 35px;
            margin-bottom: 15px;
          }
          .profit {
            display: block;
            margin-top: 30px;
            letter-spacing: normal;
          }
          .profit b {
            font-size: 20px;
            padding: 0 5px;
            color: #e9b21b;
          }
          .calc-form {
            color: white;
            margin-top: 15px;
            padding: 50px 15px;
            border-radius: 3px;
            background: var(--new-gradient);
            box-shadow: 10px 20px 30px -15px rgba(237, 27, 61, 0.55),
              -10px 20px 30px -15px rgba(242, 125, 14, 0.55);
          }
          @media (min-width: 400px) {
            .calc-buttons {
              display: flex;
              padding: 10px 0;
              margin-top: 35px;
              margin-bottom: 15px;
            }
            .calc-buttons .calc-send {
              width: 170px;
              height: 40px;
            }
            .calc-buttons .calc-reset {
              width: 170px;
            }
          }
          @media (min-width: 576px) {
            .calculator .container .row .col-12 .calc-header {
              font-size: 27px;
              line-height: 32px;
            }
            .bg-calc {
              font-size: 80px;
              font-weight: 700;
              z-index: -1;
              line-height: 144px;
              left: 5%;
              top: 13%;
              letter-spacing: -3px;
            }
            .calc-form {
              padding: 50px 30px;
            }
          }
          @media (min-width: 768px) {
            .bg-calc {
              font-size: 100px;
              z-index: -1;
              line-height: 200px;
              left: 5%;
              top: 8%;
              letter-spacing: -3px;
            }
            .header-razdel {
              line-height: 32px;
            }
          }
          @media (min-width: 992px) {
            .bg-calc {
              font-size: 120px;
              z-index: -1;
              line-height: 200px;
              left: 5%;
              top: 4%;
              letter-spacing: -3px;
            }
            .header-razdel {
              line-height: 32px;
            }
            .calc-text-1 {
              display: block;
              font-size: 22px;
              font-weight: 300;
              letter-spacing: -0.4px;
              line-height: 24px;
              margin-bottom: 20px;
            }
            .calc-text-2 {
              display: block;
              margin-top: 0px;
              font-size: 16px;
              font-weight: 300;
              letter-spacing: 0.2px;
              line-height: 30px;
            }
          }
          @media (min-width: 1200px) {
            .calculator .container .row .col-12 .calc-header {
              font-size: 36px;
              line-height: 42px;
            }
            .calc-form {
              padding: 50px 50px;
              background: url('/images/logo-white.png') 95% 5% no-repeat,
                var(--new-gradient);
            }
            .calc-buttons {
              display: flex;
              padding: 10px 0;
              margin-top: 55px;
              margin-bottom: 15px;
            }
            .bg-calc {
              font-size: 200px;
              z-index: -1;
              line-height: 300px;
              left: 5%;
              top: 8%;
              letter-spacing: -3px;
            }
            .header-razdel {
              line-height: 38px;
            }
            .calc-text-1 {
              display: block;
              font-size: 22px;
              font-weight: 300;
              letter-spacing: -0.4px;
              line-height: 36px;
              margin-bottom: 10px;
            }
            .calc-text-2 {
              display: block;
              margin-top: 0px;
              font-size: 16px;
              font-weight: 300;
              letter-spacing: 0.2px;
            }
            .profit {
              display: block;
              margin-top: 30px;
              font-size: 16px;
              letter-spacing: normal;
            }
            .profit b {
              font-size: 36px;
              padding: 0 15px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default CalcPlate;
