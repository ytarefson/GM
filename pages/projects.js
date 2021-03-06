import React, { Component } from 'react';
import Head from '../components/head';
import ProjectsListPlate from '../components/projects/projectsListPlate';
import Layout from '../components/Layout';

const message =
  'С 2006 года до настоящего времени, компанией выпущено 75 электростанций суммарной мощностью более 21 МВт. В производственной линейке газовые электростанции MAN, Liebherr и ЯМЗ единичной мощностью до 1 МВт и напряжением до 10,5 кВ, работающие на природном, сжиженном газе, пропан-бутановой смеси, попутном нефтяном газе.';

class Projects extends Component {
  render() {
    return (
      <div>
        <Head
          title='Объекты малой энергетики введённые в эксплуатацию ООО "Газовые машины"'
          description='Каталог проектов газопоршневых электростанций, реализованных ООО "Газовые машины" с описанием и фотограмиями'
        />
        <Layout>
          <div className="container-fluid projects">
            <div className="mycontainer">
              <div className="row">
                <div className="col-12">
                  <h1 className="header-min-colored mb-3 mt-5">
                    Реализованные проекты <br />
                    <span className="dark-color">
                      газопоршневых электростанций
                    </span>
                  </h1>
                </div>
                <div className="col-12 col-xl-9">
                  <p className="text mb-5">
                    В течении 12 лет основным профилем деятельности ООО “Газовые
                    машины” является проектирование, производство и поставка
                    "под ключ" автономных энергетических центров на базе
                    газопоршневых электростанций с технологиями когенерации и
                    тригенерации.
                  </p>
                </div>
                <div className="col-12 projects-list-plate">
                  <ProjectsListPlate />
                </div>
                <div className="col-12 col-xl-12 text-area">
                  <p className="text">
                    С 2006 года до настоящего времени, компанией выпущено 75
                    электростанций суммарной мощностью более 21 МВт. В
                    производственной линейке газовые электростанции MAN,
                    Liebherr и ЯМЗ единичной мощностью до 1 МВт и напряжением до
                    10,5 кВ, работающие на природном, сжиженном газе,
                    пропан-бутановой смеси, попутном нефтяном газе.
                  </p>
                </div>
                <div className="col-12 referenc-list-container">
                  <div className="referenc-list-unit">
                    <a
                      className="referenc-list"
                      href="/docs/referenc-list-converted.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Общий референц-лист...
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .projects {
            position: relative;
            padding-bottom: 50px;
          }
          .projects::after {
            z-index: -2;
            position: absolute;
            content: '';
            display: block;
            width: 100%;
            height: 55%;
            left: 0;
            top: 55%;
            left: 0;
            transform: translateY(-50%);
            background: url('/images/bg-projects.jpg') 50% 50% no-repeat;
            background-size: cover;
            box-shadow: inset 0px 25px 70px -40px rgba(0, 0, 0, 0.4),
              inset 0px -25px 70px -40px rgba(0, 0, 0, 0.4);
          }
          .projects .mycontainer .row {
            padding-left: 15px;
            padding-right: 15px;
          }
        `}</style>
      </div>
    );
  }
}

export default Projects;
