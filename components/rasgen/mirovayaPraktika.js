import React from 'react';
import Link from 'next/link';
import '../../scss/rasgen/mirovayaPraktika.scss';

export default MirovayaPraktika => (
  <div className="container-fluid mirovayaPraktika">
    <div className="mycontainer">
      <h2 className="header-common">Мировая практика</h2>
      <span className="subheading-red-bottom">доля малой энергетики</span>
      <p className="text-common">
        Распределенная генерация, которую часто называют еще термином малая
        энергетика, составляет на данный момент около 5% от общей выработки
        электроэнергии на всей территории РФ. Этот показатель в России является
        весьма низким по сравнению с другими странами. Нужно учитывать и тот
        факт, что более 70% всей малой энергетики РФ обусловлено расположением
        ее в районах, неохваченных централизованными сетями.
      </p>
      <p className="text-common">
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
      <p className="text-common">
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
  </div>
);
