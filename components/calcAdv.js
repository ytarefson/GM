import React from 'react';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';

export default CalcAdv => (
  <div className="container-fluid calcAdv">
    <div className="dots-right" />
    <div className="dots-left" />
    <Fade left>
      <div className="arrow-left-yellow" />
    </Fade>
    <Fade right>
      <div className="arrow-right-red" />
    </Fade>

    <div className="container calcAdv-container">
      <div className="row">
        <div className="col-12">
          <div className="wrapper">
            <h3 className="header-min-colored">
              <span className="dark-color">Хотите узнать сколько </span>
              мы для вас экономим?
            </h3>
            <span className="calc-desc">
              Воспользуйтесь автоматической формой, введите исходные данные и
              узнайте результат.
            </span>

            <Link href="/calculator" as="/calculator">
              <a className="calc-link">
                <span>Калькулятор</span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .calcAdv {
        overflow-x: hidden;
        position: relative;
        background-color: #fff;
        border-top: 5px solid #dcdcdc;
        border-bottom: 5px solid #dcdcdc;
        z-index: 0;
      }
      .calcAdv .dots-right {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        top: 0;
        right: 0;
        opacity: 0.5;
        background: url('/images/dots-min-white.png') 0% 0% no-repeat;
      }
      .calcAdv .dots-left {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        left: 0;
        bottom: 0;
        background: url('/images/dots-min.png') 0% 0% no-repeat;
      }
      .calcAdv .arrow-left-yellow {
        display: block;
        position: absolute;
        z-index: 0;
        top: 50px;
        left: -310px;
        width: 350px;
        height: 310px;
        opacity: 1;
        clip-path: polygon(0 0, 92% 0, 100% 45%, 92% 100%, 0 100%);
        border-radius: 3px;
        background-color: #d57c29;
      }
      .calcAdv .arrow-right-red {
        display: block;
        position: absolute;
        z-index: 0;
        top: 50px;
        right: -310px;
        width: 350px;
        height: 310px;
        opacity: 1;
        clip-path: polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%);
        border-radius: 3px;
        background-color: #c42729;
      }
      .calcAdv .calcAdv-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        height: 410px;
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper {
        max-width: 230px;
        margin: 0 auto;
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .header-min-colored {
        font-size: 27px;
        margin-bottom: 45px;
        text-align: center;
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-desc {
        text-align: center;
        display: block;
        color: #444444;
        font-family: var(--noto-font);
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        margin-bottom: 30px;
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link {
        font-family: var(--molot-font);
        padding: 0;
        display: block;
        font-weight: 700;
        width: 170px;
        height: 40px;
        border-radius: 3px;
        background-image: var(--new-gradient);
        color: #ffffff;
        font-size: 15px;
        letter-spacing: 0.5px;
        line-height: 40px;
        margin: 0 auto;
        text-align: center;
        transform: skewX(-10deg);
        box-shadow: 10px 20px 30px -15px rgba(237, 27, 61, 0.55),
          -10px 20px 30px -15px rgba(242, 125, 14, 0.55);
        transition: box-shadow 0.2s;
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:hover {
        text-decoration: none;
        cursor: pointer;
        color: #ffffff;
        box-shadow: var(--box-shadow);
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:active {
        box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.45);
      }
      .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link span {
        display: block;
        transform: skewX(10deg);
      }

      @media (min-width: 768px) {
        .calcAdv {
          overflow-x: hidden;
          position: relative;
          background-color: #fff;
          border-top: 5px solid #dcdcdc;
          border-bottom: 5px solid #dcdcdc;
          z-index: 0;
        }
        .calcAdv .dots-right {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          top: -15%;
          right: 0;
          opacity: 0.3;
          background: url('/images/dots-min-white.png') 0% 0% no-repeat;
        }
        .calcAdv .dots-left {
          position: absolute;
          display: block;
          width: 213px;
          height: 259px;
          left: 0;
          bottom: 0;
          background: url('/images/dots-min.png') 0% 0% no-repeat;
        }
        .calcAdv .arrow-left-yellow {
          display: block;
          position: absolute;
          z-index: -1;
          top: 50px;
          left: -100px;
          width: 350px;
          height: 310px;
          opacity: 0;
          clip-path: polygon(0 0, 92% 0, 100% 45%, 92% 100%, 0 100%);
          border-radius: 3px;
          background-color: #d57c29;
        }
        .calcAdv .arrow-right-red {
          display: block;
          position: absolute;
          z-index: -1;
          top: 50px;
          right: -100px;
          width: 350px;
          height: 310px;
          opacity: 0;
          clip-path: polygon(8% 0, 100% 0, 100% 100%, 8% 100%, 0 50%);
          border-radius: 3px;
          background-color: #c42729;
        }
        .calcAdv .calcAdv-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          height: 410px;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper {
          max-width: 230px;
          margin: 0 auto;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .header-min-colored {
          font-size: 28px;
          margin-bottom: 60px;
          text-align: center;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-desc {
          text-align: center;
          display: block;
          color: #444444;
          font-family: var(--noto-font);
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          margin-bottom: 30px;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link {
          font-family: var(--molot-font);
          padding: 0;
          display: block;
          font-weight: 700;
          width: 170px;
          height: 40px;
          border-radius: 3px;
          background-image: var(--new-gradient);
          color: #ffffff;
          font-size: 15px;
          letter-spacing: 0.5px;
          line-height: 40px;
          margin: 0 auto;
          text-align: center;
          transform: skewX(-10deg);
          box-shadow: 10px 20px 30px -15px rgba(237, 27, 61, 0.55),
            -10px 20px 30px -15px rgba(242, 125, 14, 0.55);
          transition: box-shadow 0.2s;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:hover {
          text-decoration: none;
          cursor: pointer;
          color: #ffffff;
          box-shadow: var(--box-shadow);
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:active {
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.45);
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link span {
          display: block;
          transform: skewX(10deg);
        }
      }

      @media (min-width: 1200px) {
        .calcAdv {
          overflow: hidden;
          position: relative;
          background-color: #fff;
          border-top: 5px solid #dcdcdc;
          border-bottom: 5px solid #dcdcdc;
          z-index: 0;
        }
        .calcAdv::after {
          display: block;
          position: absolute;
          content: '';
          z-index: -1;
          top: 50%;
          left: -20px;
          width: 540px;
          height: 285px;
          transform: translateY(-50%);
          border: 15px solid rgba(255, 255, 255, 1);
        }
        .calcAdv::before {
          display: block;
          position: absolute;
          content: '';
          z-index: 0;
          top: 50%;
          right: -20px;
          width: 540px;
          height: 285px;
          transform: translateY(-50%);
          border: 15px solid rgba(255, 255, 255, 1);
        }
        .calcAdv .dots-right {
          position: absolute;
          display: block;
          width: 460px;
          height: 560px;
          top: -60%;
          right: 0;
          opacity: 0.1;
          background: url('/images/dots-big-white.png') 0% 0% no-repeat;
        }
        .calcAdv .dots-left {
          position: absolute;
          display: block;
          width: 460px;
          height: 560px;
          left: 0;
          bottom: -60%;
          opacity: 0.1;
          background: url('/images/dots-big-white.png') 0% 0% no-repeat;
        }
        .calcAdv .arrow-left-yellow {
          display: block;
          position: absolute;
          z-index: -1;
          top: 35px;
          left: 0;
          width: 330px;
          height: 437px;
          clip-path: polygon(0 0, 88% 0, 100% 45%, 88% 100%, 0 100%);
          border-radius: 3px;
          background-color: #d57c29;
        }
        .calcAdv .arrow-right-red {
          display: block;
          position: absolute;
          z-index: -1;
          top: 35px;
          right: 0px;
          width: 330px;
          height: 437px;
          clip-path: polygon(12% 0, 100% 0, 100% 100%, 12% 100%, 0 50%);
          border-radius: 3px;
          background-color: #c42729;
        }
        .calcAdv .calcAdv-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          height: 510px;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper {
          max-width: 580px;
          margin: 0 auto;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .header-min-colored {
          font-size: 36px;
          margin-bottom: 45px;
          text-align: center;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-desc {
          text-align: center;
          display: block;
          color: #444444;
          font-family: var(--noto-font);
          font-size: 22px;
          font-weight: 500;
          line-height: 30px;
          margin-bottom: 30px;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link {
          position: relative;
          font-family: var(--molot-font);
          padding: 0;
          display: block;
          font-weight: 700;
          width: 270px;
          height: 60px;
          border-radius: 3px;
          background-image: var(--new-gradient);
          color: #ffffff;
          font-size: 21px;
          letter-spacing: 1px;
          line-height: 60px;
          margin: 0 auto;
          text-align: center;
          transform: skewX(-10deg);
          box-shadow: 10px 20px 30px -15px rgba(237, 27, 61, 0.55),
            -10px 20px 30px -15px rgba(242, 125, 14, 0.55);
          transition: box-shadow 0.2s;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link::before {
          position: absolute;
          display: block;
          content: '';
          top: 7px;
          left: 7px;
          right: 7px;
          bottom: 7px;
          border-radius: 3px;
          border: 2px solid white;
          transition: all 0.2s ease-in 0.2s;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:hover {
          box-shadow: var(--box-shadow);
        }
        .calcAdv
          .calcAdv-container
          .row
          .col-12
          .wrapper
          .calc-link:hover::before {
          top: 12px;
          left: 25px;
          right: 25px;
          bottom: 12px;
          //border-radius: 30px;
          opacity: 0;
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link:active {
          box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.45);
        }
        .calcAdv .calcAdv-container .row .col-12 .wrapper .calc-link span {
          display: block;
          transform: skewX(10deg);
        }
      }
      @media (min-width: 1400px) {
        .calcAdv::after {
          display: block;
          position: absolute;
          content: '';
          top: 50%;
          left: -20px;
          width: 540px;
          height: 285px;
        }
        .calcAdv::before {
          top: 50%;
          right: -20px;
          width: 540px;
          height: 285px;
          transform: translateY(-50%);
          border: 15px solid rgba(255, 255, 255, 1);
        }
        .calcAdv .arrow-left-yellow {
          top: 35px;
          left: 0;
          width: 475px;
          height: 437px;
        }
        .calcAdv .arrow-right-red {
          top: 35px;
          right: 0px;
          width: 475px;
          height: 437px;
        }
      }
    `}</style>
  </div>
);
