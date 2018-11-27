import React from 'react';

import '../scss/geo.scss';

export default Geo => (
  <div className="container-fluid geo">
    <div className="mycontainer">
      <div className="row geo-text-block">
        <div className="col-12 col-lg-6 order-lg-2">
          <h2 className="geo-header header-red">География нашего бизнеса</h2>
          <p className="geo-text text-common">
            В силу географических особенностей нашей страны, актуальность
            портативных газовых электростанций растёт с каждым годом. Начиная с
            2006 года поставки электростанций ООО “Газовые машины” вышли далеко
            за пределы Ярославской области, при этом спрос сохраняет
            положительную динамику роста.
          </p>
          <br />
          <p className="geo-text text-common">
            Производственные и животноводческие комплексы, больницы и санатории,
            гостиницы и спортивно-развлекательные объекты по всей стране и за её
            пределами являются нашими довольными клиентами.
          </p>
        </div>
        <div className="col-12 col-lg-6 order-lg-1">
          <div className="geo-map">
            <img
              src="../static/images/map-big.png"
              alt=""
              className="geo-img"
            />
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
    <div className="geo-circle" />
  </div>
);
