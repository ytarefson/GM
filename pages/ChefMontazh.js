import React from "react";
import Layout from "../components/Layout";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";
import FormPage from "../components/form";
import "../scss/montazh.scss";

const ChefMontazh = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <div className="container-fluid montazh">
      <div className="mycontainer section-plate">
        <div className="row p-0">
          <div className="col-12">
            <h1 className="header-min-colored">
              Шеф-монтаж{" "}
              <span className="dark-color">
                газопоршневых электростанций и мини ТЭЦ
              </span>
            </h1>
            <p className="text pb-4">
              Специалисты нашей компании прошли обучение на предприятиях MAN,
              Liebherr и ЯМЗ и обладают компетенцией для проведения наладки
              оборудования производства этих компаний. Стандартная программа
              шеф-монтажных и пусконаладочных работ включает в себя.
            </p>
            <h2 className="header-min-colored">1. Монтаж и сборка</h2>
            <div className="razdel-list">
              <div className="razdel-li">
                <p className="text">
                  1.1. Проверка правильности крепления агрегата к фундаментной
                  плите.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.2. Проверка наличия заземляющего контура.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.3. Проверка подвода газа, контроль давления на входе.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.4. Проверка правильности подключения электрических кабелей.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.5. Проверка подключения выхлопного трубопровода с
                  последующим контролем сопротивления на выпуске.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.6. Проверка правильности подключения теплового контура.
                </p>
              </div>
              <div className="razdel-li">
                <p className="text">
                  1.7. Оформление акта передачи для пусковых и
                  режимно-наладочных работ.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FormPage product={serviceName} />
    </div>
  </Layout>
);

ChefMontazh.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default ChefMontazh;
