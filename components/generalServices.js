import React from 'react';
import Link from 'next/link';
import serviceList from './tables/serviceList';

export default (GeneralServices) => (
  <div className="container-fluid generalServices">
    <div className="dots-left" />
    <div className="dots-right" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-container">
            <h3 className="header-min-colored">
              Проектирование, производство и обслуживание <br />
              <span className="dark-color">газопоршневых электростанций</span>
            </h3>
            <p className="text">
              Все эти работы тесно связаны с решением большого количества
              сопутствующих задач. Мы готовы подключиться к проекту любой
              сложности и на любой стадии реализации, и оказать как комплексную
              поддержку, так и прицельно отработать слабые места энергопроекта.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-12 cards-container">
          {serviceList.map(({ label, text, img, href, as, key }) => (
            <div className="teh-plate" key={key}>
              <Link href={href} as={`/uslugi/${as}`}>
                <a className="teh-card">
                  <div className="teh-image-container">
                    <img
                      src={img}
                      alt={label}
                      title={label}
                      className="teh-image"
                    />

                    <div className="teh-content">
                      <p className="teh-desc">{text}</p>
                    </div>
                  </div>
                  <div className="header-container">
                    <h3 className="teh-header">{label}</h3>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="button-grey-container">
            <div className="button-grey">
              <Link href="/services" as="/uslugi">
                <a>
                  {' '}
                  <span>Услуги</span>{' '}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .generalServices {
        overflow-x: hidden;
        position: relative;
        padding-top: 30px;
      }
      .generalServices .dots-left {
        position: absolute;
        display: block;
        width: 213px;
        height: 259px;
        left: -40%;
        top: 25px;
        opacity: 0.5;
        background: url('/images/dots-min-red.png') 0% 0% no-repeat;
      }
      .generalServices .container .text-container {
        padding-bottom: 30px;
        text-align: left;
      }
      .generalServices .container .text-container .header-min-colored {
        padding-bottom: 15px;
        letter-spacing: 1px;
        font-size: 23px;
      }
      .generalServices .container .text-container .text {
        text-align: left;
      }
      .generalServices .container .cards-container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto auto auto;
        grid-gap: 15px;
      }
      .generalServices .container .cards-container .teh-plate .teh-card {
        display: block;
        width: 100%;
        transition: all 0.2s;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .teh-image-container {
        box-shadow: var(--box-shadow);
        overflow: hidden;
        position: relative;
        transition: all 0.2s;
        background: linear-gradient(
          to right,
          #cfcfcf 0%,
          #d0d0d0 50%,
          #cfcfcf 100%
        );
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .teh-image-container::after {
        content: '';
        display: block;
        position: absolute;
        z-index: 3;
        width: 100%;
        height: 100%;
        top: 0;
        background-image: linear-gradient(
          to bottom,
          rgba(255, 0, 0, 0) 0%,
          rgba(255, 0, 0, 0) 50%,
          rgba(255, 0, 0, 0) 100%
        );
        transition-duration: 0.2s;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .teh-image-container
        .teh-image {
        display: block;
        margin: 0 auto;
        width: auto;
        max-width: 100%;
        height: 145px;
        object-fit: cover;
        transition: all 0.2s;
        position: relative;
        z-index: 2;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .teh-image-container
        .teh-content {
        display: none;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .teh-image-container
        .button-container {
        display: none;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .header-container {
        z-index: 4;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .header-container
        .teh-header {
        color: #353535;
        font-size: 13px;
        line-height: 18px;
        text-align: center;
        font-weight: 700;
        font-family: var(--noto-font);
        height: 40%;
      }
      .generalServices
        .container
        .cards-container
        .teh-plate
        .teh-card
        .header-container
        .teh-header:hover {
        background: transparent;
      }
      .generalServices .container .button-grey-container {
        margin-top: 0;
        padding-bottom: 30px;
      }
      .generalServices .container .button-grey-container .button-grey span {
        color: white;
        font-size: 16px;
      }

      @media (min-width: 576px) {
        .generalServices {
          overflow-x: hidden;
          position: relative;
          padding-top: 30px;
        }
        .generalServices .dots-left {
          left: 0;
          top: 25px;
        }
        .generalServices .container .text-container {
          padding-bottom: 30px;
          text-align: left;
        }
        .generalServices .container .text-container .header-min-colored {
          padding-bottom: 15px;
          letter-spacing: 1px;
          font-size: 23px;
        }
        .generalServices .container .text-container .text {
          text-align: left;
        }
        .generalServices .container .cards-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: auto auto auto auto;
          grid-gap: 30px;
        }
        .generalServices .container .cards-container .teh-plate .teh-card {
          display: block;
          width: 100%;
          transition: all 0.2s;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container {
          box-shadow: var(--box-shadow);
          overflow: hidden;
          position: relative;
          transition: all 0.2s;
          background: linear-gradient(
            to right,
            #cfcfcf 0%,
            #d0d0d0 50%,
            #cfcfcf 100%
          );
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container::after {
          content: '';
          display: block;
          position: absolute;
          z-index: 3;
          width: 100%;
          height: 100%;
          top: 0;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0) 0%,
            rgba(255, 0, 0, 0) 50%,
            rgba(255, 0, 0, 0) 100%
          );
          transition-duration: 0.2s;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-image {
          height: 160px;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-content {
          display: none;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .button-container {
          display: none;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container {
          z-index: 4;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header {
          color: #353535;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          font-weight: 700;
          font-family: var(--noto-font);
          height: 40%;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header:hover {
          background: transparent;
        }
        .generalServices .container .button-grey-container {
          padding-bottom: 30px;
        }
        .generalServices .container .button-grey-container .button-grey span {
          color: white;
        }
      }
      @media (min-width: 768px) {
        .generalServices .container .text-container {
          padding-bottom: 30px;
          text-align: center;
        }
        .generalServices .container .text-container .header-min-colored {
          padding-bottom: 15px;
          letter-spacing: 1px;
          font-size: 23px;
        }
        .generalServices .container .text-container .text {
          text-align: center;
        }
        .generalServices .container .cards-container {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto auto auto;
          grid-gap: 30px;
        }
        .generalServices .container .cards-container .teh-plate .teh-card {
          display: block;
          width: 100%;
          transition: all 0.2s;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container {
          box-shadow: var(--box-shadow);
          overflow: hidden;
          position: relative;
          transition: all 0.2s;
          background: linear-gradient(
            to right,
            #cfcfcf 0%,
            #d0d0d0 50%,
            #cfcfcf 100%
          );
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container::after {
          content: '';
          display: block;
          position: absolute;
          z-index: 3;
          width: 100%;
          height: 100%;
          top: 0;
          background-image: linear-gradient(
            to bottom,
            rgba(255, 0, 0, 0) 0%,
            rgba(255, 0, 0, 0) 50%,
            rgba(255, 0, 0, 0) 100%
          );
          transition-duration: 0.2s;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-image {
          height: 160px;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-content {
          display: none;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .button-container {
          display: none;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container {
          z-index: 4;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header {
          color: #353535;
          font-size: 16px;
          line-height: 22px;
          text-align: center;
          font-weight: 700;
          font-family: var(--noto-font);
          height: 40%;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header:hover {
          background: transparent;
        }
        .generalServices .container .button-grey-container {
          padding-bottom: 90px;
        }
      }
      @media (min-width: 992px) {
        .generalServices {
          margin-top: 60px;
        }
        .generalServices .container .text-container {
          padding-bottom: 30px;
          text-align: center;
        }
        .generalServices .container .text-container .header-min-colored {
          padding-bottom: 15px;
          letter-spacing: 1px;
          font-size: 27px;
          line-height: 34px;
        }
        .generalServices .container .text-container .text {
          text-align: center;
        }
        .generalServices .container .cards-container {
          margin-top: 30px;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: auto auto;
          grid-gap: 30px;
        }
        .generalServices .container .cards-container .teh-image {
          height: 170px;
        }
      }
      @media (min-width: 1200px) {
        .generalServices {
          margin-top: 60px;
          padding-top: 60px;
          padding-bottom: 60px;
          position: relative;
        }
        .generalServices .dots-left {
          position: absolute;
          display: block;
          width: 460px;
          height: 560px;
          left: -10%;
          bottom: 0;
          top: -250px;
          opacity: 0.05;
          background: url('/images/dots-big-red.png') 0% 0% no-repeat;
        }
        .generalServices .dots-right {
          position: absolute;
          display: block;
          width: 460px;
          height: 560px;
          right: -15%;
          bottom: 0%;
          left: auto;
          top: 300px;
          opacity: 0.05;
          background: url('/images/dots-big-red.png') 0% 0% no-repeat;
        }
        .generalServices .container .text-container {
          display: block;
          padding-bottom: 45px;
          text-align: left;
        }
        .generalServices .container .text-container .header-min-colored {
          font-size: 36px;
          line-height: 46px;
          padding-left: 0px;
          padding-right: 110px;
        }
        .generalServices .container .text-container .text {
          text-align: left;
          font-weight: 300;
        }
        .generalServices .container .cards-container .teh-plate .teh-card {
          position: relative;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container {
          box-shadow: var(--box-shadow);
          overflow: hidden;
          position: relative;
          transition: all 0.2s;
          border-radius: var(--border-radius);
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-image {
          display: block;
          position: relative;
          margin: 0 auto;
          width: auto;
          max-width: 100%;
          height: 170px;
          object-fit: cover;
          transition: all 0.2s;
          z-index: 0;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-content {
          display: flex;
          align-items: center;
          position: absolute;
          z-index: 1;
          top: 0px;
          left: 0px;
          right: 0px;
          bottom: 25%;
          opacity: 0;
          background: linear-gradient(
            to bottom,
            rgba(119, 119, 119, 0.6) 0%,
            rgba(119, 119, 119, 0.6) 60%,
            rgba(119, 119, 119, 0.1) 100%
          );
          transition: all 0.2s ease-out;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .teh-image-container
          .teh-content
          .teh-desc {
          text-align: center;
          padding: 0 10px;
          z-index: 1;
          color: #ffffff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 700;
          opacity: 0;
          transition: all 0.2s ease-in 0.2s;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container {
          z-index: 4;
          height: 100px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header {
          color: #353535;
          font-size: 19px;
          line-height: 22px;
          text-align: center;
          font-weight: 700;
          font-family: var(--noto-font);
          height: 40%;
          padding-left: 15px;
          padding-right: 15px;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate
          .teh-card
          .header-container
          .teh-header:hover {
          background: transparent;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate:hover
          .teh-image-container {
          box-shadow: var(--box-shadow-up);
        }
         {
          /* .generalServices
          .container
          .cards-container
          .teh-plate:hover
          .teh-card
          .teh-image-container
          .teh-image {
          filter: blur(4px);
        } */
        }
        .generalServices
          .container
          .cards-container
          .teh-plate:hover
          .teh-image-container
          .teh-content {
          bottom: 0px;
          opacity: 1;
        }
        .generalServices
          .container
          .cards-container
          .teh-plate:hover
          .teh-image-container
          .teh-content
          .teh-desc {
          opacity: 1;
        }
        .generalServices .container .button-grey-container {
          margin-top: 15px;
          padding-bottom: 0px;
        }
        .generalServices .container .button-grey-container .button-grey {
          line-height: 40px;
        }
        .generalServices .container .button-grey-container .button-grey span {
          color: white;
        }
      }
    `}</style>
  </div>
);
