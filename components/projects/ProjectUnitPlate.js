import React, { Component } from 'react';
import Link from '../Link';
import '../../scss/projects/ProjectsUnitPlate.scss';

export class ProjectUnitPlate extends Component {
  render() {
    const project = this.props.project.project;
    return (
      <div className="container-fluid product-detail">
        <div className="mycontainer">
          <div className="breadcrumbs">
            <Link href="/">
              <a>Главная > </a>
            </Link>
            <Link href="/projects">
              <a>Проекты > </a>
            </Link>
            <span>{project.label}</span>
          </div>
        </div>
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-md-8">
              <h2 className="header-detail">{project.label}</h2>
              <span className="subheading-detail">{project.city}</span>
              <p className="text-common">{project.description}</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-container">
                <img
                  src={`../static/images/${project.img}`}
                  alt=""
                  className="detail-img"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mycontainer">
          <div className="">hello</div>
        </div>
      </div>
    );
  }
}
export default ProjectUnitPlate;
