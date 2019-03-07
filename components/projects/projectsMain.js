import React, { Component } from "react";
import projectListShort from "../tables/projectListShort";
import Link from "next/link";
import "../../scss/projects/projectsMain.scss";

export class ProjectsMain extends Component {
  render() {
    const data = projectListShort;
    return (
      <div className="project-cards-plate">
        {data.map(
          ({
            key,
            id,
            city,
            energy,
            tenergy,
            client,
            year,
            label,
            as,
            img
          }) => (
            <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`} key={key}>
              <div className="project-card-container">
                <a className="project-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/${img}`}
                      alt={`${label} - ${client}`}
                      title={`${label} - ${client}`}
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-header-container">
                    <div className="flex-top">
                      <span className="project-card-client">{client}</span>
                      <span className="project-card-header">{label}</span>
                    </div>
                    <div className="flex-bot">
                      <span className="project-card-city">{city}</span>
                      <span className="project-card-energy">{energy}</span>
                    </div>
                  </div>
                </a>
              </div>
            </Link>
          )
        )}
      </div>
    );
  }
}

export default ProjectsMain;
