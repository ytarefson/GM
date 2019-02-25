import React from "react";
import Link from "next/link";
import serviceList from "./tables/serviceList";
import "../scss/generalServices.scss";

export default GeneralServices => (
  <div className="container-fluid generalServices">
    <div className="dots-left" />
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="text-container">
            <h3 className="header-min-colored ">
              Проектирование, производство и обслуживание <br />
              <span className="dark-color">газопоршневых электростанций</span>
            </h3>
            <p className="text">
              ... тесно связаны с большим количеством сопутствующих работ. Вы
              можете воспользоваться ими отдельно для решения локальных задач.
              Или в рамках разработки проекта они будут включены в смету.
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
                    <img src={img} alt={label} className="teh-image" />
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
