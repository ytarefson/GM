import React, { Component } from "react";
import Head from "../../components/head";
import Link from "next/link";
import serviceList from "../tables/serviceList";
import "../../scss/services/serviceUnitPlate.scss";

export class ServiceUnitPlate extends Component {
  render() {
    const serviceName = this.props.serviceName.serviceName;
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
          <div className="mycontainer section-plate">
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

        <section className="service-unit container-fluid color-section">
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 col-md-4 col-lg-5 p-0">
                <div className="card-img-container">
                  <img
                    src={service.imgDetail}
                    alt={service.label}
                    title={service.label}
                    className="card-img"
                  />
                </div>
              </div>
              <div className="col-12 col-md-7 col-lg-6 col-xl-6 offset-md-1 card-content p-0 p-md-2">
                <h1 className="header-red">{service.label}</h1>
                <p className="text pb-3">{service.text}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default ServiceUnitPlate;
