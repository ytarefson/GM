import React, { Component } from "react";
import Head from "../../components/head";
import Link from "../Link";
import "../../scss/projects/ProjectsUnitPlate.scss";

export class ProjectUnitPlate extends Component {
  render() {
    const project = this.props.project.project;
    return (
      <div>
        <Head title={`Проект - ${project.label}`} description="Лучший проект" />
        <div className="container-fluid project-detail">
          <div className="mycontainer section-plate">
            <div className="breadcrumbs">
              <Link href="/">
                <a className="crambs">Главная > </a>
              </Link>
              <Link href="/projects">
                <a className="crambs">Проекты > </a>
              </Link>
              <span className="crambs cramb-main">{project.label}</span>
            </div>
          </div>
          <div className="mycontainer section-plate">
            <div className="row m-0">
              <div className="col-12 col-md-7">
                <span className="text-common">{project.client}</span>
                <h2 className="header-detail">{project.label}</h2>
                <span className="subheading-red-bottom">{project.city}</span>
                <p className="text-min">{project.description}</p>
              </div>

              <div className="col-12 col-md-5 img-main-container">
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
          <div className="mycontainer section-plate">
            <div className="row">
              <div className="col-12">
                <div className="project-unitplate-props-container">
                  <span className="project-unitplate-label">
                    Заказчик: {project.label}
                  </span>
                  <span className="project-unitplate-class">
                    Класс объекта: {project.class}
                  </span>
                  <span className="project-unitplate-year">
                    Год ввода в эксплуатацию: {project.year}
                  </span>
                  <span className="project-unitplate-energy">
                    Мощность: {project.energy}
                  </span>
                  <span className="project-unitplate-energy">
                    Тепловая мощьность:
                    {project.tenergy}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ProjectUnitPlate;
