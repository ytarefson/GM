import React, { Component } from 'react';
import projectListShort from '../tables/projectListShort';
import Link from 'next/link';

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
            img,
          }) => (
            <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`} key={key}>
              <div className="project-card-container">
                <a className="project-card">
                  <div className="img-container">
                    <img
                      src={`/images/${img}`}
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

export default ProjectsMain;
