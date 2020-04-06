import React from 'react';
import Link from 'next/link';

export default MirovayaPraktika => (
  <div className="container-fluid mirovayaPraktika">
    <div className="mycontainer ">
      <h2 className="header-sections">Мировая практика</h2>
      {/* <span className="subheading-red-bottom">доля малой энергетики</span> */}
      <p className="text-min pl-3 pr-3">
        Распределенная генерация, которую часто называют еще термином малая
        энергетика, составляет на данный момент около 5% от общей выработки
        электроэнергии на всей территории РФ. Этот показатель в России является
        весьма низким по сравнению с другими странами. Нужно учитывать и тот
        факт, что более 70% всей малой энергетики РФ обусловлено расположением
        ее в районах, неохваченных централизованными сетями.
      </p>
      <p className="text-min pl-3 pr-3">
        Так, например, в США доля распределенной генерации составляет также
        скромные 10%. В Германии и Голландии этот показатель самый высокий в
        мире и превышает 25% от общей мощности генерирующих мощностей. Большая
        доля малой энергетики и в других странах Европы: Испания – 16%, Франция
        – 14%.
      </p>
    </div>
    <div className="container-fluid">
      <div className="mycontainer">
        <div className="graph">
          <div className="graph-col-container">
            <div className="graph-col ">
              <div className="col-pic col-pic-1" />
              <div className="col-heading">РОССИЯ</div>
              <div className="col-percent">5%</div>
            </div>
          </div>
          <div className="graph-col-container">
            <div className="graph-col">
              <div className="col-pic col-pic-2" />
              <div className="col-heading">США</div>
              <div className="col-percent">10%</div>
            </div>
          </div>
          <div className="graph-col-container">
            <div className="graph-col">
              <div className="col-pic col-pic-3" />
              <div className="col-heading">ФРАНЦИЯ</div>
              <div className="col-percent">14%</div>
            </div>
          </div>
          <div className="graph-col-container">
            <div className="graph-col">
              <div className="col-pic col-pic-4" />
              <div className="col-heading">ИСПАНИЯ</div>
              <div className="col-percent">16%</div>
            </div>
          </div>
          <div className="graph-col-container">
            <div className="graph-col">
              <div className="col-pic col-pic-5" />
              <div className="col-heading">ГЕРМАНИЯ</div>
              <div className="col-percent">25%</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mycontainer">
      <p className="text-min pl-3 pr-3">
        Нужно отметить, что страны с высокой долей использования распределенной
        генерации обладают развитой экономикой, что позволяет сделать вывод о
        высоком значении малой энергетики на их экономику. Прежде всего, это
        связано с высокой энергетической эффективностью предприятий,
        использующих малую энергетику. Курс на повышение энергетической
        эффективности также был взят и в РФ в 2009 году, когда был принят
        Федеральный закон № 261ФЗ «Об энергосбережении», в котором фактически
        поставлена задача повысить энергоэффективность в стране на 40%.
      </p>
    </div>
    <style jsx>{`
      .mirovayaPraktika {
        margin-top: 70px;
        position: relative;
        z-index: 2;
        padding-bottom: 120px;
      }
      .mirovayaPraktika::before {
        z-index: -1;
        content: '';
        top: -1%;
        height: 52%;
        width: 100%;
        position: absolute;
        left: 0;
        background: linear-gradient(
          to top,
          #dbdbdb 0%,
          #dad9d9 15%,
          #fafafa 100%
        );
      }
      .mirovayaPraktika .graph {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 30px 0;
      }
      .mirovayaPraktika .graph .graph-col-container {
        width: 20%;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic {
        background-color: #ec8c85;
        width: 50%;
        margin-bottom: 20px;
        position: relative;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic::after {
        content: '';
        position: absolute;
        width: 160%;
        height: 22px;
        background: radial-gradient(#e2e2e2 0%, #fafafa 100%);
        border-radius: 50%;
        filter: blur(3px);
        z-index: -1;
        bottom: -2px;
        left: 50%;
        transform: translateX(-45%);
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-1 {
        height: 35px;
        margin-top: 65px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-2 {
        height: 45px;
        margin-top: 55px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-3 {
        height: 60px;
        margin-top: 40px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-4 {
        height: 65px;
        margin-top: 35px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-5 {
        height: 100px;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-heading {
        font-family: var(--noto-font);
        font-size: 10px;
        letter-spacing: 0.5px;
        font-weight: 900;
        color: #353535;
      }
      .mirovayaPraktika .graph .graph-col-container .graph-col .col-percent {
        font-family: var(--noto-font);
        font-size: 10px;
        letter-spacing: -0.5px;
        color: rgb(199, 39, 39);
        font-weight: 900;
      }
      @media (min-width: 576px) {
        .mirovayaPraktika::before {
          top: -3%;
        }
        .mirovayaPraktika .graph {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          padding: 30px 0;
        }
        .mirovayaPraktika .graph .graph-col-container {
          width: 20%;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-heading {
          font-size: 12px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-percent {
          font-family: var(--noto-font);
          font-size: 12px;
          letter-spacing: -0.5px;
        }
      }

      @media (min-width: 768px) {
        .mirovayaPraktika::before {
          top: -4%;
        }
        .mirovayaPraktika .graph {
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          padding: 30px 0;
        }
        .mirovayaPraktika .graph .graph-col-container {
          width: 20%;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-heading {
          font-size: 16px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-percent {
          margin-top: 5px;
          font-family: var(--noto-font);
          font-size: 18px;
          letter-spacing: -0.5px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-1 {
          height: 55px;
          margin-top: 65px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-2 {
          height: 65px;
          margin-top: 55px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-3 {
          height: 80px;
          margin-top: 40px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-4 {
          height: 85px;
          margin-top: 35px;
        }
        .mirovayaPraktika .graph .graph-col-container .graph-col .col-pic-5 {
          height: 120px;
        }
      }
    `}</style>
  </div>
);
