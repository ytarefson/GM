import React, { Component } from 'react';
import projectList from '../projectList';
import Link from 'next/link';
import '../../scss/projects/projectsListPlate.scss';

export class ProjectsListPlate extends Component {
  render() {
    const data = projectList;
    const shortData = [];
    data.map(item => {
      if (item.id > 3) {
        shortData.push(item);
      }
    });
    console.log(projectList);
    console.log(data);
    console.log(shortData);

    return (
      <div className="project-cards-small-plate">
        {shortData.map(({ key, id, city, energy, label, img }) => (
          <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`} key={key}>
            <div className="project-card-small ">
              <div className="img-container">
                <img
                  src={`../../static/images/${img}`}
                  alt=""
                  className="project-card-img"
                />
              </div>
              <div className="project-card-header-container">
                <span className="project-card-header">{label}</span>
                <div>
                  <span className="project-card-energy">Мощность: </span>
                  <span className="project-card-energy">{energy}</span>
                </div>
                <span className="project-card-city">{city}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    );
  }
}

export default ProjectsListPlate;
