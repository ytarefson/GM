import React, { Component } from "react";
import Head from "../../components/head";
import Link from "next/link";
import serviceList from "../tables/serviceList";
import "../../scss/services/serviceUnitPlate.scss";

export class ServiceUnitPlate extends Component {
  render() {
    const serviceName = this.props.serviceName;
    let service = {};
    serviceList.map(item => {
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
      </div>
    );
  }
}
export default ServiceUnitPlate;
