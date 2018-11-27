import React from 'react';
import Link from 'next/link';
import '../../scss/rasgen/potencialRynka.scss';

export default PotencialRynka => (
  <div className="container-fluid potencialRynka">
    <div className="mycontainer">
      <h2 className="header-common">Потенциал Российского рынка</h2>
      <span className="subheading-red-bottom">Новые возможности</span>
      <p className="text-common">
        Потенциал Российского рынка малых генерирующих мощностей огромен. Он
        определяется в первую очередь отсутствием реальной конкуренции на рынке
        электроэнергетики. Этот фактор определяет высокую стоимость для
        потребителей электрическая нагрузка которых не превышает 5 МВт. Наличие
        в РФ большого количества организации с потреблением ниже 2 МВт
        заставляет эти предприятия искать решения по снижению стоимости
        энергоресурсов.
      </p>
      <p className="text-common">
        Немаловажную роль для крупных предприятий сыграло Постановление
        Правительства РФ №442 от 04.05.2012г., в соответствии с которым они
        получили право на реализацию генерируемой энергии без регистрации в
        качестве сетевой организации. Это позволило снизить собственные затраты
        предприятий при введении генерирующих мощностей при этом излишки продать
        в сеть. В России не мало также энергодефицитных районов. Стоимость
        подключения дополнительных мощностей зачастую может достигать значений
        существенно превышающих внедрения оборудования распределенной генерации.{' '}
      </p>
      <div className="row m-0">
        <div className="col-12 col-md-6 order-md-2 p-0">
          <div className="img-container">
            <img
              src="../../static/images/potential-1.jpg"
              alt=""
              className="potential-pic"
            />
          </div>
        </div>
        <div className="col-12 col-md-6 order-md-2 p-0">
          <div className="img-container">
            <img
              src="../../static/images/potential-2.jpg"
              alt=""
              className="potential-pic"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
);
