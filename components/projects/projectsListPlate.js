import React, { Component } from 'react';
import projectList from '../projectList';
import Link from 'next/link';
import '../../scss/projects/projectsListPlate.scss';

export class ProjectsListPlate extends Component {
  render() {
    const data = projectList;
    return (
      <div className="container-fluid projects-list-plate">
        <div className="mycontainer">
          <div className="project-cards-plate">
            {data.map(({ key, id, city, energy, label, as, img }) => (
              <Link href={`/projects/id${id}`} as={`/proekti${as}`} key={key}>
                <div className="project-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/${img}`}
                      alt=""
                      className="project-card-img"
                    />
                  </div>
                  <div className="project-card-header-container">
                    <span className="project-card-header">{label}</span>
                    <span className="project-card-energy">{energy}</span>
                    <span className="project-card-city">{city}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectsListPlate;
