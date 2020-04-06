import React from 'react';

export default Geo => (
  <div className="container-fluid geo">
    <div className="mycontainer">
      <div className="row geo-text-block p-3">
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
              src="/images/map-big.png"
              alt="Газовые машины на карте"
              title="Газовые машины на карте"
              className="geo-img"
            />
          </div>
        </div>
        <div className="col-12" />
      </div>
    </div>
    <div className="geo-circle" />
    <style jsx>{`
      .geo {
        padding-top: 50px;
        background: #fafafa;
        margin-bottom: 20px;
        background-image: linear-gradient(to top, #848484 0%, #fafafa 100%);
      }
      .geo .geo-map {
        margin-top: 70px;
      }
      .geo .geo-map .geo-img {
        max-width: 100%;
        margin: 0 auto;
        filter: drop-shadow(15px 15px 25px rgba(0, 0, 0, 0.3));
      }
      .geo .geo-text {
        line-height: 26px;
        font-size: 13px;
      }
      .geo .geo-circle {
        background: #fafafa;
        height: 100px;
        clip-path: ellipse(70% 100% at 50% 100%);
        margin-left: -15px;
        margin-right: -15px;
        transform: translateY(50px);
      }

      @media (min-width: 576px) {
        .geo .geo-header {
          color: #313131;
          font-size: 30px;
          font-weight: 700;
          line-height: 54px;
          letter-spacing: -1px;
        }
        .geo .geo-text {
          line-height: 26px;
          font-weight: 300;
          font-size: 13px;
        }
      }
      @media (min-width: 768px) {
        .geo-circle {
          background: #fafafa;
          height: 150px;
          clip-path: ellipse(70% 100% at 50% 100%);
          margin-left: -15px;
          margin-right: -15px;
          transform: translateY(75px);
        }
      }
      @media (min-width: 992px) {
        .geo {
          background-image: linear-gradient(to top, #848484 0%, #fafafa 100%);
        }
        .geo .geo-header {
          font-size: 34px;
        }

        .geo .geo-circle {
          background: #fafafa;
          height: 150px;
          clip-path: ellipse(70% 100% at 50% 100%);
          margin-left: -15px;
          margin-right: -15px;
          transform: translateY(75px);
        }
      }
      @media (min-width: 1200px) {
        .geo .mycontainer .geo-text-block .geo-text {
          line-height: 30px;
          font-weight: 300;
          letter-spacing: -0.6px;
          font-size: 16px;
        }
      }
      @media (min-width: 1400px) {
        .geo .geo-map .geo-img {
          transform: translate(-12%);
        }
      }
    `}</style>
  </div>
);
