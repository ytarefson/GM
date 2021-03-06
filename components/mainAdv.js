import React from 'react';
//import Router from 'next/router';
import Link from './Link';

export default MainAdv => (
  <div className="container-fluid mainAdv">
    <div className="dots-right" />
    <div className="dots-left" />
    <div className="gaz-mash" />
    <div className="border-left" />
    <div className="border-right" />

    <div className="container main-container">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="text-container">
            <span className="main-heading">
              Газопоршневые электростанции под ключ
            </span>
            <div className="spartners">
              <div className="logos-container"></div>
              <span className="descr-min">
                мы являемся официальными сервисными партнёрами
              </span>
            </div>
            <h1 className="main-desc">
              Проектирование, производство и обслуживание газопоршневых
              электростанций и мини ТЭЦ.
            </h1>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="promo-fon" />
          <div className="img-container">
            <img
              src="/images/about-2.jpg"
              alt="Фото объекта"
              title="Энергоцентр ЯМЗ"
              className="img-main"
            />
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .mainAdv {
        overflow: hidden;
        background: linear-gradient(to right, #e1e1e1 0%, #b1b1b1 100%);
        display: block;
        min-height: 500px;
        z-index: 0;
        position: relative;
      }
      .mainAdv .dots-right {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        top: 0;
        right: 0;
        background: url('/images/dots-min.png') 100% -50% no-repeat;
      }
      .mainAdv .dots-left {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        left: 0;
        bottom: 0;
        background: url('/images/dots-min.png') 0% 120% no-repeat;
      }
      .mainAdv .gaz-mash {
        position: absolute;
        display: block;
        z-index: -1;
        left: 0;
        right: 0;
        top: 30px;
        opacity: 0.3;
        width: auto;
        height: 150px;
        background: url('/images/bg-gaz-mash.png') 0% 0% no-repeat;
        background-size: contain;
      }
      .mainAdv .border-left {
        display: block;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: -35px;
        width: 50px;
        height: 285px;
        transform: translateY(-50%);
        border: 5px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
      }
      .mainAdv .border-right {
        display: block;
        position: absolute;
        z-index: -1;
        top: 50%;
        right: -35px;
        width: 50px;
        height: 285px;
        transform: translateY(-50%);
        border: 5px solid rgba(255, 255, 255, 0.5);
        border-radius: 3px;
      }
      .mainAdv .main-container {
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 100%;
        height: 500px;
      }
      .mainAdv .main-container .row .col-12 .text-container .main-heading {
        display: block;
        font-family: var(--molot-font);
        font-size: 28px;
        line-height: 32px;
        text-shadow: 3px 3px 2px #8f8f8f;
        color: white;
        letter-spacing: 0.5px;
        margin-bottom: 15px;
      }
      .mainAdv .main-container .row .col-12 .text-container .spartners {
        margin-bottom: 20px;
      }
      .mainAdv
        .main-container
        .row
        .col-12
        .text-container
        .spartners
        .logos-container {
        width: 100%;
        height: 30px;
        margin: 0;
        background: url('/images/liebherr.png') 0 50% no-repeat;
        background-size: contain;
      }
      .mainAdv
        .main-container
        .row
        .col-12
        .text-container
        .spartners
        .descr-min {
        display: block;
        margin-top: 3px;
        font-size: 10px;
        line-height: 10px;
        font-weight: 300;
      }
      .mainAdv .main-container .row .col-12 .text-container .main-desc {
        font-size: 16px;
        font-weight: 500;
        color: #383838;
      }
      .mainAdv .main-container .row .col-12 .img-container {
        display: flex;
        flex-direction: row-reverse;
      }
      .mainAdv .main-container .row .col-12 .img-container .img-main {
        border: 5px solid white;
        margin-top: 15px;
        display: block;
        height: 130px;
        width: auto;
      }

      @media (min-width: 768px) {
        .mainAdv {
          overflow: hidden;
          display: block;
          min-height: 500px;
          z-index: 0;
          position: relative;
        }
        .mainAdv .dots-right {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          top: 0;
          right: 0;
          background: url('/images/dots-min.png') 100% 0% no-repeat;
        }
        .mainAdv .dots-left {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          left: 0;
          bottom: 0;
          background: url('/images/dots-min.png') 0% 100% no-repeat;
        }
        .mainAdv .gaz-mash {
          right: 0;
          top: 30px;
          width: auto;
          height: 150px;
          background: url('/images/bg-gaz-mash.png') 0% 0% no-repeat;
          background-size: contain;
        }
        .mainAdv .border-left {
          display: block;
          position: absolute;

          top: 50%;
          left: -35px;
          width: 80px;
          height: 285px;
          transform: translateY(-50%);
          border: 5px solid rgba(255, 255, 255, 0.5);
          border-radius: 3px;
        }
        .mainAdv .border-right {
          display: block;
          position: absolute;

          top: 50%;
          right: -35px;
          width: 80px;
          height: 285px;
          transform: translateY(-50%);
          border: 5px solid rgba(255, 255, 255, 0.5);
          border-radius: 3px;
        }
        .mainAdv .main-container {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100%;
          height: 500px;
        }
        .mainAdv .main-container .row .col-12 .text-container .main-heading {
          display: block;
          font-family: var(--molot-font);
          font-size: 48px;
          line-height: 48px;

          letter-spacing: 1px;
          margin-bottom: 18px;
          z-index: 10;
        }
        .mainAdv .main-container .row .col-12 .text-container .spartners {
          margin-bottom: 25px;
        }
        .mainAdv
          .main-container
          .row
          .col-12
          .text-container
          .spartners
          .logos-container {
          height: 35px;
        }
        .mainAdv
          .main-container
          .row
          .col-12
          .text-container
          .spartners
          .descr-min {
          margin-top: 5px;
          font-size: 11px;
        }
        .mainAdv .main-container .row .col-12 .text-container .main-desc {
          font-size: 18px;
          line-height: 23px;
        }
        .mainAdv .main-container .row .col-12 .img-container {
          display: flex;
          flex-direction: row-reverse;
        }
        .mainAdv .main-container .row .col-12 .img-container .img-main {
          z-index: -1;
          border: 5px solid white;
          margin-top: 15px;
          display: block;
          height: 230px;
          width: auto;
        }
      }

      @media (min-width: 1200px) {
        .mainAdv {
          overflow: hidden;
          background: linear-gradient(
              to right,
              rgba(207, 207, 207, 0.4) 0%,
              rgba(182, 182, 182, 0.9) 50%,
              rgba(177, 177, 177, 0.6) 100%
            ),
            url('/images/bg-projects.jpg') 50% 50% no-repeat;
          background-size: cover;
          display: block;
          min-height: 630px;
          max-height: 750px;
          z-index: 0;
          height: 65vh;
          position: relative;
          border-bottom: 15px solid white;
          box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.2);
        }
        .mainAdv .dots-right {
          width: 460px;
          height: 560px;
          top: 50%;
          right: -200px;
          opacity: 0.15;
          z-index: -1;
          transform: translateY(-50%);
          background: url('/images/dots-big-white.png') 0% 0% no-repeat;
        }
        .mainAdv .dots-left {
          left: 30px;
          bottom: -450px;
          width: 460px;
          height: 560px;
          z-index: -1;
          opacity: 0.15;
          background: url('/images/dots-big-white.png') 0% 0% no-repeat;
        }
        .mainAdv .gaz-mash {
          position: absolute;
          display: block;
          opacity: 0.2;
          left: 30px;
          right: 0;
          top: 30px;
          width: auto;
          height: 200px;
          background: url('/images/bg-gaz-mash.png') 0% 0% no-repeat;
          background-size: contain;
        }
        .mainAdv .border-left {
          display: block;
          position: absolute;
          top: 50%;
          left: -40px;
          width: 60px;
          height: 400px;
          transform: translateY(-50%);
          border: 15px solid rgba(255, 255, 255, 1);
          border-radius: 3px;
        }
        .mainAdv .border-right {
          display: block;
          position: absolute;
          top: 50%;
          right: -40px;
          width: 60px;
          height: 400px;
          transform: translateY(-50%);
          border: 15px solid rgba(255, 255, 255, 1);
          border-radius: 3px;
        }
        .mainAdv .main-container .row {
          height: 100%;
        }
        .mainAdv .main-container .row .col-12 {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 100%;
        }
        .mainAdv .main-container .row .col-12 .text-container {
          margin-top: 15px;
          padding-left: 0px;
          padding-right: 30px;
        }
        .mainAdv .main-container .row .col-12 .text-container .main-heading {
          font-size: 60px;
          line-height: 64px;
          text-shadow: 3px 3px 2px #838383;
          color: white;
          margin-bottom: 10px;
        }
        .mainAdv .main-container .row .col-12 .text-container .spartners {
          margin-bottom: 25px;
        }
        .mainAdv
          .main-container
          .row
          .col-12
          .text-container
          .spartners
          .logos-container {
          height: 50px;
        }
        .mainAdv
          .main-container
          .row
          .col-12
          .text-container
          .spartners
          .descr-min {
          margin-top: 7px;
          font-size: 14px;
        }
        .mainAdv .main-container .row .col-12 .text-container .main-desc {
          font-size: 23px;
          font-weight: 500;
          line-height: 32px;
          padding-top: 15px;
          border-top: 2px solid white;
        }
        .mainAdv .main-container .row .col-12 .promo-fon {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 45px;
          right: 15px;
          background: linear-gradient(87deg, #fff 0%, #fff 100%);
          transform: skewX(10deg);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
        }
        .mainAdv .main-container .row .col-12 .img-container {
          position: relative;
          margin-left: 30px;
          height: 100%;
          width: 100%;
          overflow: hidden;
          background-color: grey;
          border-left: 15px solid #fff;
          border-right: 15px solid #fff;
          transform: skewX(-10deg);
          display: flex;
          justify-content: center;
          align-items: center;
          padding-left: 120px;
        }
        .mainAdv .main-container .row .col-12 .img-container .img-main {
          transform: skewX(10deg);
          border: none;
          margin-top: 0;
          display: block;
          height: 100%;
          width: auto;
        }
      }
    `}</style>
  </div>
);
