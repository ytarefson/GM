import React, { Component } from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import serviceList from '../components/tables/serviceList';

class Services extends Component {
  render() {
    return (
      <div>
        <Head
          title="Проектирование, пусконаладка и обслуживание газопоршневых электростанций"
          description='Компания "Газовые машины" осуществляет полный спектр работ по обслуживанию газовых электростанций. От расчёта мощности и проектирования, до ввода в эксплуатацию и поставки расходных материалов.'
        />
        <Layout>
          <div className="container-fluid services">
            <div className="mycontainer">
              <div className="row m-0">
                <div className="col-12 titles">
                  <h1 className="header-min-colored mb-3 mt-3">
                    Проектирование, производство и обслуживание <br />
                    <span className="dark-color">
                      газопоршневых электростанций
                    </span>
                  </h1>
                  <p className="text">
                    ... тесно связаны с большим количеством сопутствующих работ.
                    Вы можете воспользоваться ими отдельно для решения локальных
                    задач. Или в рамках разработки проекта они будут включены в
                    смету.
                  </p>
                </div>
                <div className="col-12 cards-col mt-5">
                  <div className="cards-container">
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

                              <div className="button-container">
                                <div className="button-min" />
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
              </div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .services {
            z-index: 0;
            padding-bottom: 250px;
            background: #fafafa;
            position: relative;
          }

          .services::after {
            position: absolute;
            z-index: -1;
            content: '';
            display: block;
            width: 100%;
            height: 80%;
            top: 63%;
            right: 0;
            left: 0;
            transform: translateY(-50%);
            background: url('/images/bg-services.jpg') 70% 50% no-repeat;
            clip-path: polygon(0 15%, 100% 0, 100% 60%, 0 90%);
          }
          .services .cards-col {
            padding: 0;
          }
          .services .cards-col .cards-container {
            padding: 15px;
            background-color: rgba(255, 255, 255, 0.8);
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto auto auto;
            grid-gap: 15px;
          }
          .services .cards-col .cards-container .teh-plate .teh-card {
            display: block;
            width: 100%;
            transition: all 0.2s;
          }
          .services
            .cards-col
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
          .services
            .cards-col
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
          .services
            .cards-col
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
          .services
            .cards-col
            .cards-container
            .teh-plate
            .teh-card
            .teh-image-container
            .teh-content {
            display: none;
          }
          .services
            .cards-col
            .cards-container
            .teh-plate
            .teh-card
            .teh-image-container
            .button-container {
            display: none;
          }
          .services
            .cards-col
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
          .services
            .cards-col
            .cards-container
            .teh-plate
            .teh-card
            .header-container
            .teh-header {
            color: #353535;
            font-size: 14px;
            line-height: 18px;
            text-align: center;
            font-weight: 700;
            font-family: var(--noto-font);
            height: 40%;
          }
          .services
            .cards-col
            .cards-container
            .teh-plate
            .teh-card
            .header-container
            .teh-header:hover {
            background: transparent;
          }

          @media (min-width: 576px) {
            .services .cards-col {
              padding: 0;
            }
            .services .cards-col .cards-container {
              padding: 15px;

              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto auto auto auto;
              grid-gap: 15px;
            }
            .services .cards-col .cards-container .teh-plate {
              display: block;
              width: 100%;
            }
            .services .cards-col .cards-container .teh-plate .teh-card {
              display: block;
              width: 100%;
              transition: all 0.2s;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-image {
              width: auto;
              max-width: 100%;
              height: 155px;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container {
              z-index: 4;
              height: 100px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header {
              font-size: 15px;
              line-height: 20px;
              text-align: center;
              font-weight: 700;
              height: 40%;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header:hover {
              background: transparent;
            }
          }
          @media (min-width: 768px) {
            .services .cards-col {
              padding: 0;
            }
            .services .cards-col .cards-container {
              padding: 15px;

              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: auto auto auto;
              grid-gap: 15px;
              grid-row-gap: 30px;
            }
            .services .cards-col .cards-container .teh-plate {
              display: block;
              width: 100%;
            }
            .services .cards-col .cards-container .teh-plate .teh-card {
              display: block;
              width: 100%;
              transition: all 0.2s;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-image {
              width: auto;
              max-width: 100%;
              height: 155px;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .button-container {
              display: block;
              z-index: 10;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container {
              z-index: 4;
              height: 110px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header {
              padding-left: 15px;
              padding-right: 15px;
              font-size: 16px;
              line-height: 22px;
              text-align: center;
              font-weight: 700;
              height: 40%;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header:hover {
              background: transparent;
            }
          }
          @media (min-width: 992px) {
            .services .cards-col {
              padding: 0;
            }
            .services .cards-col .cards-container {
              padding: 15px;

              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: auto auto auto;
              grid-gap: 30px;
              grid-row-gap: 30px;
            }
            .services .cards-col .cards-container .teh-plate {
              display: block;
              width: 100%;
            }
            .services .cards-col .cards-container .teh-plate .teh-card {
              display: block;
              width: 100%;
              transition: all 0.2s;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-image {
              width: auto;
              max-width: 100%;
              height: 140px;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .button-container {
              display: block;
              z-index: 10;
            }
          }
          @media (min-width: 1200px) {
            .services .titles {
              margin-top: 50px;
              text-align: center;
              margin-bottom: 30px;
            }
            .services .cards-col {
              padding: 0;
            }
            .services .cards-col .cards-container {
              padding: 15px;

              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: auto auto auto;
              grid-gap: 30px;
              grid-row-gap: 30px;
            }
            .services .cards-col .cards-container .teh-plate {
              display: block;
              width: 100%;
            }
            .services .cards-col .cards-container .teh-plate .teh-card {
              display: block;
              width: 100%;
              transition: all 0.2s;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-image {
              width: auto;
              max-width: 100%;
              height: 170px;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-content {
              display: block;
              opacity: 0;
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              background: linear-gradient(
                to bottom,
                rgba(0, 0, 0, 0.75) 0%,
                rgba(0, 0, 0, 0) 100%
              );
              z-index: 4;
              height: 100px;
              padding: 15px;
              transition: all 0.2s ease-in;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .teh-content
              .teh-desc {
              color: white;
              font-size: 14px;
              letter-spacing: 0.5px;
              font-weight: 300;
              line-height: 18px;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container
              .button-container {
              display: block;
              z-index: 10;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .teh-image-container:hover
              > .teh-content {
              opacity: 1;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container {
              z-index: 4;
              height: 110px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header {
              padding-left: 15px;
              padding-right: 15px;
              font-size: 18px;
              line-height: 25px;
              text-align: center;
              font-weight: 700;
            }
            .services
              .cards-col
              .cards-container
              .teh-plate
              .teh-card
              .header-container
              .teh-header:hover {
              background: transparent;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default Services;
