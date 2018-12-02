import React, { Component } from "react";
import projectList from "../tables/projectList";
import Link from "next/link";
import "../../scss/projects/projectsListPlate.scss";

export class ProjectsListPlate extends Component {
  render() {
    const data = projectList;
    const shortData = [];
    data.map(item => {
      if (item.id > 2) {
        shortData.push(item);
      }
    });

    return (
      <div className="project-cards-small-plate">
        {shortData.map(
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
            <div className="project-card-small-container" key={key}>
              <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`}>
                <a className="project-card-small ">
                  <div className="img-container">
                    <img
                      src={`../../static/images/${img}`}
                      alt=""
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
              </Link>
            </div>
          )
        )}
      </div>
    );
  }
}

export default ProjectsListPlate;
