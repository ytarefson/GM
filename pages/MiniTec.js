import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class MiniTec extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <div className="container-fluid minitec">
          <div className="mycontainer section-plate">
            <div className="col-12">
              <span className="header-min-colored">
                Описание <span className="dark-color">услуги</span>
              </span>
              <br />
              <p className="text">
                Наша компания является производителем оборудования Мини-ТЭС
                единичной электрической мощностью <b>от 30 до 2000 кВт.</b> На
                производственных площадях компании в г. Ярославле осуществляется
                крупноузловая сборка мини-ТЭС с применением комплектующих
                ведущих мировых производителей.
              </p>
              <p className="text">
                Наше производство находится под постоянным контролем технических
                специалистов концернов MAN и Liebherr, что подтверждается
                сертификатами этих компаний, выдаваемыми по результатам аудита
                производственной системы.
              </p>
              <p className="text">
                Нашими поставщиками являются концерны:
                <b>
                  {' '}
                  MAN, Liebherr, Leroy Somer, General Electric, ABB, Alfa Laval,
                  Karl Dungs Gmbh, Motortech Gmbh, Grundfos, Aprovis Gmbh.
                </b>
              </p>
            </div>
          </div>
          <div className="mycontainer ">
            <div className="col-12 img-wrapper">
              <div className="img-container">
                <img
                  src="/images/services/minitec-1.jpg"
                  alt="Сборочный цех мини ТЭЦ Газовые Машины"
                  title="Сборочный цех мини ТЭЦ Газовые Машины"
                  className="minitec-img"
                />
              </div>
              <div className="img-container">
                <img
                  src="/images/services/minitec-2.jpg"
                  alt="Сборочный цех мини ТЭЦ Газовые Машины"
                  title="Производственная линия - Газовые Машины"
                  className="minitec-img"
                />
              </div>
            </div>
          </div>
          <div className="mycontainer section-plate">
            <div className="col-12">
              <p className="text">
                В настоящее время в производственной линейке нашей компании мини
                – ТЭС на базе двигателей MAN, Liebherr и ЯМЗ. Мини-ТЭС на базе
                двигателей MAN и Liebherr отличаются высочайшей надежностью и
                низкими удельными затратами на эксплуатацию.
              </p>
              <p className="text">
                Мини-ТЭС на базе двигателей ЯМЗ более доступны по цене, но
                являются более требовательными к сервисному обслуживанию.
              </p>
              <p className="text-bold">
                Гарантия на выпускаемые мини-ТЭС составляет 24 месяца.
              </p>
            </div>
          </div>
        </div>
        <FormPage product={serviceName} />
        <style jsx>{`
          .minitec {
            background-color: #fafafa;
            padding: 0;
            padding-top: 30px;
            padding-bottom: 80px;
          }
          .minitec .text {
            color: #353535;
            padding-bottom: 10px;
            padding-top: 10px;
          }
          .minitec .img-wrapper {
            background-color: #fafafa;
            border: 1px solid rgb(202, 202, 202);
            height: auto;
            margin-top: 15px;
            margin-bottom: 15px;
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
          }
          .minitec .img-wrapper .img-container {
            width: 100%;
            padding: 10px 15px;
          }
          .minitec .img-wrapper .img-container .minitec-img {
            width: 100%;
            height: auto;
          }

          @media (min-width: 576px) {
            .minitec .mycontainer .col-12 {
              padding-left: 0;
              padding-right: 0;
            }
          }

          @media (min-width: 768px) {
            .minitec .img-wrapper {
              height: auto;
              margin-top: 15px;
              margin-bottom: 15px;
              display: flex;
              flex-direction: row;
              flex-wrap: wrap;
            }
            .minitec .img-wrapper .img-container {
              width: 50%;
              padding-left: 8px;
              padding-right: 8px;
            }
            .minitec .img-wrapper .img-container .minitec-img {
              width: 100%;
              height: auto;
            }
          }
        `}</style>
      </Layout>
    );
  }
}

MiniTec.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default MiniTec;
