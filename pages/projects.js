import React from "react";
import Head from "../components/head";
import ProjectsMain from "../components/projects/projectsMain";
import ProjectsListPlate from "../components/projects/projectsListPlate";
import Redzone from "../components/redzone";
import Layout from "../components/Layout";

const message =
  "С 2006 года до настоящего времени, компанией выпущено 75 электростанций суммарной мощностью более 21 МВт. В производственной линейке газовые электростанции MAN, Liebherr и ЯМЗ единичной мощностью до 1 МВт и напряжением до 10,5 кВ, работающие на природном, сжиженном газе, пропан-бутановой смеси, попутном нефтяном газе.";

const Projects = () => (
  <div>
    <Head
      title='Объекты малой энергетики введённые в эксплуатацию ООО "Газовые машины"'
      description='Каталог проектов газопоршневых электростанций, реализованных ООО "Газовые машины" с описанием и фотограмиями'
    />
    <Layout>
      <div className="container-fluid projects">
        <div className="mycontainer">
          <span className="subheading-red-top pl-3">Портфолио</span>
          <h1 className="header-razdel pl-3">
            Реализованные проекты газовых электростанций
          </h1>
          <p className="subheading-common-3 mt-5">
            В течении 12 лет основным профилем деятельности ООО “Газовые машины”
            является проектирование, производство и поставка "под ключ"
            автономных энергетических центров на базе газопоршневых
            электростанций с технологиями когенерации и тригенерации.
          </p>
          <ProjectsMain />
        </div>
      </div>
      <Redzone>
        С 2006 года до настоящего времени, компанией выпущено 75 электростанций
        суммарной мощностью более 21 МВт. В производственной линейке газовые
        электростанции MAN, Liebherr и ЯМЗ единичной мощностью до 1 МВт и
        напряжением до 10,5 кВ, работающие на природном, сжиженном газе,
        пропан-бутановой смеси, попутном нефтяном газе.
      </Redzone>
      <div className="container-fluid projects-list-plate">
        <div className="mycontainer">
          <ProjectsListPlate />
        </div>
      </div>
      <div className="container-fluid projects-list-plate">
        <div className="mycontainer">
          <div className="referenc-list-container">
            <a
              className="referenc-list"
              href="../static/docs/referenc-list-converted.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Общий референц-лист...
            </a>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);

export default Projects;
