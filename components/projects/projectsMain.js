import React, { Component } from "react";
import projectListShort from "../projectListShort";
import Link from "next/link";
import "../../scss/projects/projectsMain.scss";

export class ProjectsMain extends Component {
  render() {
    const data = projectListShort;
    return (
      <div className="project-cards-plate mb-5">
        {data.map(({ key, id, city, energy, label, as, img }) => (
          <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`} key={key}>
            <a className="project-card">
              <div className="img-container">
                <img
                  src={`../../static/images/${img}`}
                  alt=""
                  className="project-card-img"
                />
              </div>
              <div className="project-card-header-container">
                <div className="head-wrap">
                  <span className="project-card-header">{label}</span>
                  <span className="project-card-energy">{energy}</span>
                </div>
                <span className="project-card-city">{city}</span>
              </div>
            </a>
          </Link>
        ))}
      </div>
    );
  }
}

export default ProjectsMain;
