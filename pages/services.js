import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";
import serviceList from "../components/tables/serviceList";
import "../scss/services/services.scss";

const Services = () => (
  <div>
    <Head
      title="Проектирование, расчёт, пусконаладка и обслуживание газопоршневых электростанций"
      description='Компания "Газовые машины" осуществляет полный спектр работ по обслуживанию газовых электростанций. От расчёта мощности и проектирования, до ввода в эксплуатацию и поставки расходных материалов.'
    />
    <Layout>
      <div className="container-fluid services">
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-lg-8">
              <span className="subheading-red-top">Услуги</span>
              <h1 className="header-razdel mb-3">Основные направления</h1>
              <p className="text-min">
                Проектирование, разработка и производство газовых электростанций
                тесно связаны с большим перечнем сопутствующих работ. Вы можете
                воспользоваться ими отдельно для решения локальных задач. Или в
                рамках разработки проекта они будут включены в смету по
                необходимости и в рамках работ по проекту.
              </p>
            </div>
          </div>
        </div>
        <div className="mycontainer mycontainer-cards p-0 p-md-3">
          <div className="row cards-container">
            {serviceList.map(({ label, text, img, href, as, key }) => (
              <div className="col-6 col-sm-4 col-lg-3 teh-plate" key={key}>
                <Link href={href} as={`/uslugi/${as}`}>
                  <a className="teh-card">
                    <div className="teh-image-container">
                      <img src={img} alt="" className="teh-image" />
                      <div className="header-container">
                        <h3 className="teh-header">{label}</h3>
                      </div>
                    </div>
                    <div className="teh-content">
                      <p className="teh-desc">{text}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Services;
