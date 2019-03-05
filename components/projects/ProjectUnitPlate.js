import React, { Component } from "react";
import Head from "../../components/head";
import Link from "../Link";
import Video from "../Video";
import "../../scss/projects/ProjectsUnitPlate.scss";

export class ProjectUnitPlate extends Component {
  render() {
    const project = this.props.project.project;
    let isVideo = false;
    if (project.id == 6) {
      isVideo = true;
    }
    return (
      <div className="project-detail">
        <Head
          title={`${project.label}. Газовая электростанция`}
          description={`${project.description}`}
        />
        <div className="container-fluid">
          <div className="mycontainer section-plate">
            <div className="breadcrumbs">
              <Link href="/">
                <a className="crambs">Главная > </a>
              </Link>
              <Link href="/proekti">
                <a className="crambs">Проекты > </a>
              </Link>
              <span className="crambs cramb-main">{project.label}</span>
            </div>
          </div>
        </div>
        <div className="container-fluid color-section">
          <div className="border-left" />
          <div className="border-right" />
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 col-md-6 col-xl-5 order-2 order-md-1 mt-3">
                <span className="text-min">{project.client}</span>
                <h1 className="header-red">{project.label}</h1>
                <div className="project-energy-container">
                  <span className="project-energy">{project.energy}</span>
                </div>
                <div className="project-unitplate-props-container">
                  <span className="text-min">
                    Город: <b>{project.city}</b>
                  </span>
                  <span className="text-min project-unitplate-label">
                    Заказчик: <b>{project.client}</b>
                  </span>
                  <span className="text-min project-unitplate-class">
                    Класс объекта: <b>{project.class}</b>
                  </span>
                  <span className="text-min project-unitplate-year">
                    Год ввода в эксплуатацию: <b>{project.year}</b>
                  </span>
                  <span className="text-min project-unitplate-energy">
                    Тепловая мощность: <b> {project.tenergy}</b>
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-5 offset-md-1 col-xl-6 order-1 order-md-2 img-main-container">
                <div className="img-container">
                  <img
                    src={`../static/images/${project.img}`}
                    alt="Газовая мини-ТЭЦ"
                    className="detail-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="container-fluid pt-4 pb-5">
          <div className="mycontainer section-plate">
            <div className="row">
              <div className="col-12">
                <h4 className="header-min-colored pb-1">
                  Описание проекта -{" "}
                  <span className="dark-color">{project.label}</span>
                </h4>
                <p className="text">{project.description}</p>
              </div>
            </div>
          </div>
        </section>
        {isVideo && <Video />}
      </div>
    );
  }
}
export default ProjectUnitPlate;
