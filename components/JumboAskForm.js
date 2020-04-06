import React from 'react';

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
                    Заполни анкету и наши специалисты подготовят вам подробный
                    ответ.{' '}
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
      <style jsx>{`
        .jumbo-askForm {
          background: var(--new-gradient);
          min-height: 150px;
          padding-top: 30px;
          padding-bottom: 30px;
        }
        .jumbo-askForm .wrapper {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-rows: 1fr auto;
          grid-gap: 30px;
          align-items: center;
        }
        .jumbo-askForm .wrapper .text-container {
          display: block;
          width: 100%;
        }
        .jumbo-askForm .wrapper .text-container .jumbo-title {
          display: block;
          font-size: 20px;
          font-weight: 900;
          color: var(--accent-dark);
          color: white;
        }
        .jumbo-askForm .wrapper .text-container .jumbo-text {
          display: block;
          margin-top: 10px;
          font-size: 14px;
          padding-right: 120px;
          font-weight: 500;
          color: var(--text);
        }
        .jumbo-askForm .wrapper .button-container {
          width: 100%;
        }
        .jumbo-askForm .wrapper .button-container .button-askForm {
          position: relative;
          display: block;
          margin: 0 auto;
          width: 270px;
          height: 70px;
          border-radius: 3px;
          border: 3px solid white;
          color: white;
          text-align: center;
          font-family: var(--molot-font);
          line-height: 66px;
          font-size: 24px;
          overflow: hidden;
          transition: all 0.2s;
        }
        .jumbo-askForm .wrapper .button-container .button-askForm::after {
          position: absolute;
          display: block;
          content: '';
          height: 120px;
          width: 35px;
          background-color: rgb(238, 238, 238);
          top: 50%;
          transform: translateY(-50%) rotate(15deg);
          left: -10px;
          transition: all 0.2s;
        }
        .jumbo-askForm .wrapper .button-container .button-askForm:hover::after {
          left: 240px;
        }

        @media (min-width: 576px) {
          .jumbo-askForm {
            min-height: 150px;
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .jumbo-askForm .wrapper {
            padding-left: 15px;
            padding-right: 15px;
          }
        }
        @media (min-width: 768px) {
          .jumbo-askForm {
            margin-bottom: 30px;
            display: flex;
            align-items: center;
          }
          .jumbo-askForm .wrapper {
            grid-template-columns: 2fr 1fr;
            grid-template-rows: 1fr;
          }
          .jumbo-askForm .wrapper .text-container {
            display: block;
            width: 100%;
          }
          .jumbo-askForm .wrapper .text-container .jumbo-title {
            display: block;
            font-size: 20px;
            font-weight: 900;
            color: var(--accent-dark);
            color: white;
          }
          .jumbo-askForm .wrapper .text-container .jumbo-text {
            display: block;
            margin-top: 10px;
            font-size: 14px;
            padding-right: 0px;
            font-weight: 500;
            color: var(--text);
          }
        }
        @media (min-width: 992px) {
          .jumbo-askForm {
            min-height: 150px;
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .jumbo-askForm .wrapper {
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-template-rows: 1fr;
          }
          .jumbo-askForm .wrapper .text-container {
            display: block;
            width: 100%;
          }
          .jumbo-askForm .wrapper .text-container .jumbo-title {
            display: block;
            font-size: 22px;
            font-weight: 900;
          }
          .jumbo-askForm .wrapper .text-container .jumbo-text {
            display: block;
            font-size: 16px;
            font-weight: 500;
          }
        }
        @media (min-width: 1200px) {
          .jumbo-askForm {
            background: url('/images/textures/gplaypattern_@2X.png');
            min-height: 150px;
            padding-top: 30px;
            padding-bottom: 30px;
            margin-bottom: 0px;
            border-top: 15px solid rgb(240, 240, 240);
            border-bottom: 15px solid rgb(240, 240, 240);
          }
          .jumbo-askForm .wrapper {
            display: grid;
            grid-template-columns: 3fr 1fr;
            grid-template-rows: 1fr;
          }
          .jumbo-askForm .wrapper .text-container {
            display: block;
            width: 100%;
          }
          .jumbo-askForm .wrapper .text-container .jumbo-title {
            display: block;
            font-size: 36px;
            margin-bottom: 0px;
            letter-spacing: normal;
            font-weight: 300;
            line-height: 34px;
            color: var(--text);
          }
          .jumbo-askForm .wrapper .text-container .jumbo-text {
            display: block;
            font-size: 18px;
            font-weight: 900;
            color: var(--accent-grey);
          }
          .jumbo-askForm .wrapper .button-container {
            width: 100%;
          }
          .jumbo-askForm .wrapper .button-container .button-askForm {
            position: relative;
            display: block;
            margin: 0 auto;
            width: 270px;
            height: 70px;
            border-radius: 3px;
            border: 3px solid var(--accent-grey);
            color: var(--accent-grey);
            text-align: center;
            font-family: var(--molot-font);
            line-height: 66px;
            font-size: 24px;
            overflow: hidden;
            transition: all 0.2s;
          }
          .jumbo-askForm .wrapper .button-container .button-askForm::after {
            position: absolute;
            display: block;
            content: '';
            height: 120px;
            width: 35px;
            background-color: rgb(238, 238, 238);
            top: 50%;
            transform: translateY(-50%) rotate(15deg);
            left: -10px;
            transition: all 0.2s;
          }
          .jumbo-askForm .wrapper .button-container .button-askForm:hover {
            background-color: #fff;
            box-shadow: var(--box-shadow);
          }
          .jumbo-askForm
            .wrapper
            .button-container
            .button-askForm:hover::after {
            left: 240px;
          }
        }
      `}</style>
    </div>
  );
}
