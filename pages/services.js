import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import serviceList from '../components/tables/serviceList';
import '../scss/services/services.scss';

const Services = () => (
  <div>
    <Head
      title="Услуги - Газовые машины"
      description="Каталог продукции для любой техники"
    />
    <Layout>
      <div className="container-fluid services">
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-md-8">
              <span className="subheading-red-top">Услуги</span>
              <h2 className="header-razdel mb-3">Основные направления</h2>
              <p className="text-min">
                Проектирование, разработка и производство газовых электростанций
                тесно связаны с большим перечнем сопутствующих работ. Вы можете
                воспользоваться ими отдельно для решения локальных задачь. Или в
                рамках разработки проекта они будут включены в смету по
                необходимости и в рамках работ по проекту.
              </p>
            </div>
          </div>
        </div>
        <div className="mycontainer mycontainer-cards p-0">
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
