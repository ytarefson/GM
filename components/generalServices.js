import React from "react";
import Link from "next/link";
import serviceList from "./tables/serviceList";
import "../scss/generalServices.scss";

export default GeneralServices => (
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
                  {" "}
                  <span>Услуги</span>{" "}
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
