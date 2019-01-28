import React from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';
import '../scss/services/serviceDetail.scss';

const VspomOborud = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid vspom-oborud">
      <div className="mycontainer">
        <div className="tools-list-2">
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-1.jpg"
                alt="Котлы – утилизаторы тепла"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">
                Котлы – утилизаторы тепла, в т.ч. паровые, производства компании
                Aprovis (Германия)
              </p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-2.jpg"
                alt="Абсорбционные холодильные машины"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">Абсорбционные холодильные машины</p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-3.jpg"
                alt="Радиаторы охлаждения"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">Радиаторы охлаждения</p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-4.jpg"
                alt="Промышленные низкошумные глушители"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">Промышленные низкошумные глушители</p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-5.jpg"
                alt="Высокотемпературные дымовые трубы"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">Высокотемпературные дымовые трубы</p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-6.jpg"
                alt="Комплектные модульные РУ 0,4-6,3-10,5-35 кВ"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">
                Комплектные модульные РУ 0,4-6,3-10,5-35 кВ
              </p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-1.jpg"
                alt="Модульные газовые котельные"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">Модульные газовые котельные</p>
            </div>
          </div>
          <div className="tool-card">
            <div className="img-container-22">
              <img
                src="../static/images/services/vspom-1.jpg"
                alt="оборудование модульных газовых котельных"
                className="tool-card-img"
              />
            </div>
            <div className="tool-card-desc">
              <p className="text-bold">
                Оборудование для организации параллельной работы электростанций
                с электрическими сетями.
              </p>
            </div>
          </div>
        </div>
        <span className="cta mb-5">
          Условия и сроки поставки уточняйте у наших менеджеров
        </span>
      </div>
      <div className="mycontainer section-plate p-0">
        <FormPage product={serviceName} />
      </div>
    </div>
  </Layout>
);

VspomOborud.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default VspomOborud;
