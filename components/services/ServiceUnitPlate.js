import React, { Component } from 'react';
import Head from '../../components/head';
import Link from 'next/link';
import serviceList from '../tables/serviceList';

export class ServiceUnitPlate extends Component {
  render() {
    const serviceName = this.props.serviceName;
    let service = {};
    serviceList.map((item) => {
      if (item.as === serviceName) {
        service = item;
      }
    });
    return (
      <div>
        <Head title={`${service.label}`} description={service.text} />
        <div className="container-fluid service-breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="breadcrumbs">
                  <Link href="/">
                    <a className="crambs">Главная > </a>
                  </Link>
                  <Link href="/uslugi">
                    <a className="crambs">Услуги > </a>
                  </Link>
                  <span className="crambs cramb-main">{service.label}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="service-unit container-fluid color-section">
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 col-md-6 col-lg-5 p-0">
                <div className="card-img-container">
                  <img
                    src={service.imgDetail}
                    alt={service.label}
                    title={service.label}
                    className="card-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-6  col-lg-7 col-xl-7  card-content p-0">
                <div className="content-wrapper">
                  <div className="top-content">
                    <h1 className="header-red">{service.label}</h1>
                    <p className="text pb-3">{service.text}</p>
                  </div>
                  <div className="bottom-content">
                    {service.doc ? (
                      <div>
                        <a
                          className="doc-link"
                          href={`/docs/${service.doc}`}
                          target="_blank"
                          rel="noopener"
                        >
                          <img src="/images/icons/pdf.png" alt="Документация" />
                          Скачать - {service.docname}
                        </a>
                      </div>
                    ) : (
                      ''
                    )}
                    <div className="button-group">
                      <div className="button-container-new">
                        <a
                          href="https://gmenergo.bitrix24.ru/pub/form/4_uznayte_vse_podrobnosti_i_usloviya_sotrudnichestva/c1mwzy/"
                          className="button-new"
                        >
                          Узнайте подробности
                        </a>
                      </div>
                      <p className="arenda-text-min">
                        Оставьте контактную информацию и наши специалисты
                        подробно расскажут об условиях сотрудничества.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <style jsx>{`
          .service-breadcrumbs {
            padding: 0;
          }
          .service-breadcrumbs .mycontainer {
            padding-left: 15px;
            padding-right: 15px;
          }
          .service-unit {
            padding-top: 15px;
            padding-bottom: 15px;
          }

          .service-unit .header-red {
            margin: 0;
            margin-top: 15px;
            margin-bottom: 15px;
          }

          .service-unit .button-group {
            border-bottom: none;
          }
          .service-unit .button-group .button-container-new {
            margin-bottom: 15px;
          }
          .service-unit .button-group .button-container-new .button-new {
            display: block;
            margin: 0 auto;
            width: 210px;
            height: 50px;
            border-radius: 2px;
            border: 3px solid var(--accent-red);
            text-align: center;
            color: var(--accent-red);
            font-size: 15px;
            font-weight: 700;
            line-height: 45px;
            transition: all 0.2s ease-out;
          }
          .service-unit .button-group .button-container-new .button-new:hover {
            box-shadow: var(--box-shadow);
          }
          .service-unit .button-group .arenda-text-min {
            display: block;
            margin-bottom: 15px;
            font-size: 12px;
            color: #9b9b9b;
          }
          .section-plate .card-img-container {
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: flex-start;
          }
          .section-plate .card-img-container .card-img {
            width: 100%;
          }

          .doc-link {
            display: flex;
            align-items: center;
            color: grey;
            margin-bottom: 15px;
            font-size: 12px;
            color: #9b9b9b;
          }
          .doc-link img {
            margin-right: 10px;
          }

          @media (min-width: 576px) {
            .service-breadcrumbs {
              padding: 0;
            }

            .service-breadcrumbs .mycontainer {
              padding-left: 15px;
              padding-right: 15px;
            }
            .service-breadcrumbs .mycontainer .breadcrumbs {
              margin-left: 0;
            }
            .service-unit .button-group {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: auto;
              grid-gap: 15px;
              align-items: center;
              margin-top: 15px;
            }
            .service-unit .button-group .button-container-new {
              margin-bottom: 0px;
            }
            .service-unit .button-group .button-container-new .button-new {
              display: block;
              margin: 0;
            }
            .service-unit .button-group .arenda-text-min {
              display: block;
              margin-bottom: 0px;
            }
          }

          @media (min-width: 768px) {
            .service-unit {
              text-align: center;
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .service-unit .mycontainer .button-group {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: 1fr 1fr;
              grid-gap: 15px;
              align-items: center;
              margin-top: 15px;
            }
            .service-unit .mycontainer .button-group .button-container-new {
              margin: 0 auto;
            }
            .service-unit
              .mycontainer
              .button-group
              .button-container-new
              .button-new {
              display: block;
              margin: 0;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .service-unit .mycontainer .button-group .arenda-text-min {
              display: block;
              margin-bottom: 0px;
            }
            .service-unit .mycontainer .card-img-container {
              width: 90%;
            }
            .service-unit .header-red {
              font-size: 24px;
              margin-top: 0px;
              margin-bottom: 15px;
            }
            .service-unit .text {
              display: block;
              font-size: 14px;
              line-height: 20px;
            }
            .service-unit .button-group {
              grid-template-columns: 1fr;
              grid-template-rows: auto auto;
            }
            .service-unit .button-group .arenda-text-min {
              padding-left: 30px;
              padding-right: 30px;
              display: block;
              margin-bottom: 0px;
              font-size: 10px;
              letter-spacing: 0.2px;
              color: #9b9b9b;
            }
          }

          @media (min-width: 992px) {
            .service-unit {
              text-align: left;
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .service-unit .mycontainer .card-img-container {
              padding-right: 0;
            }
            .service-unit .content-wrapper {
              padding-left: 15px;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .service-unit .content-wrapper .top-content .header-red {
              font-size: 30px;
              margin-top: 0px;
              margin-bottom: 15px;
            }
            .service-unit .content-wrapper .top-content .text {
              display: block;
              font-size: 16px;
              line-height: 20px;
            }
            .service-unit .content-wrapper .bottom-content .button-group {
              grid-template-columns: 1fr 2fr;
              grid-template-rows: auto;
              grid-gap: 30px;
              border-top: 1px solid rgb(199, 199, 199);
              margin-top: 0;
              padding-top: 20px;
              padding-bottom: 0px;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .button-container-new {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .button-container-new
              .button-new {
              display: block;
              margin: 0 auto;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .arenda-text-min {
              font-size: 11px;
              padding-left: 0;
              display: block;
              margin-bottom: 0px;
            }
          }

          @media (min-width: 1200px) {
            .service-unit {
              text-align: left;
            }
            .service-unit .mycontainer .card-img-container {
              width: 100%;
              height: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .service-unit .mycontainer .card-img-container .card-img {
              display: block;
            }
            .service-unit .content-wrapper {
              padding-left: 30px;
              height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .service-unit .content-wrapper .top-content .header-red {
              font-size: 32px;
              margin-top: 0px;
              margin-bottom: 15px;
            }
            .service-unit .content-wrapper .top-content .text {
              display: block;
              font-size: 16px;
              line-height: 22px;
              font-weight: 500;
            }
            .service-unit .content-wrapper .bottom-content .button-group {
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-template-rows: auto;
              grid-gap: 30px;
              align-items: center;
              border-top: 1px solid rgb(199, 199, 199);
              margin-top: 0;
              padding-top: 20px;
              padding-bottom: 0px;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .button-container-new {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .button-container-new
              .button-new {
              display: block;
              margin: 0 auto;
            }
            .service-unit
              .content-wrapper
              .bottom-content
              .button-group
              .arenda-text-min {
              display: block;
              margin-bottom: 0px;
              font-size: 12px;
              letter-spacing: 0.2px;
              color: #9b9b9b;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ServiceUnitPlate;
