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
        <div className="container-fluid service-detail-card">
          <div className="mycontainer section-plate">
            <div className="breadcrumbs">
              <Link href="/">
                <a className="crambs">Главная > </a>
              </Link>
              <Link href="/uslugi">
                <a className="crambs">Услуги > </a>
              </Link>
              <span className="crambs">{service.label}</span>
            </div>
          </div>
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 col-md-8 card-content">
                <h2 className="header-red">{service.label}</h2>
                <p className="common-text pb-3">{service.text}</p>
              </div>
              <div className="col-12 col-md-4 p-0">
                <div className="card-img-container">
                  <img
                    src={service.img}
                    alt={service.label}
                    className="card-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ServiceUnitPlate;
