import React from 'react';
import '../scss/services/services.scss';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import serviceList from '../components/tables/serviceList';

const Services = () => (
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
                <span className="dark-color">газопоршневых электростанций</span>
              </h1>
              <p className="text">
                ... тесно связаны с большим количеством сопутствующих работ. Вы
                можете воспользоваться ими отдельно для решения локальных задач.
                Или в рамках разработки проекта они будут включены в смету.
              </p>
            </div>
            <div className="col-12 cards-col mt-5">
              <div className="cards-container">
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
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Services;
