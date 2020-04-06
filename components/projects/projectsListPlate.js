import React, { Component } from 'react';
import projectList from '../tables/projectList';
import Link from 'next/link';

export class ProjectsListPlate extends Component {
  render() {
    const data = projectList;
    const shortData = [];

    return (
      <div className="project-cards-small-plate">
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
            <div className="project-card-small-container" key={key}>
              <Link href={`/proekti?id=${id}`} as={`/proekti/${id}`}>
                <a className="project-card-small">
                  <div className="project-card-header-container">
                    <div className="flex-top">
                      <span className="project-card-header">{label}</span>
                      <span className="project-card-city">{city}</span>
                    </div>
                  </div>
                  <div className="project-card-button-container">
                    <div className="button-container">
                      <div className="button-min" />
                    </div>
                  </div>
                  <div className="project-card-energy">{energy}</div>

                  <div className="img-container">
                    <img
                      src={`/images/projects/${img}`}
                      alt={`${label} - ${client}`}
                      title={`${label} - ${client}`}
                      className="project-card-img"
                    />
                  </div>
                </a>
              </Link>
            </div>
          )
        )}
        <style jsx>{`
          .projects-list-plate {
            position: relative;
          }
          .projects-list-plate .project-cards-small-plate {
            display: grid;
            grid-gap: 15px;
            grid-template-columns: 1fr;
            grid-template-rows: 165px 165px 165px 165px 165px 165px 165px 165px 165px;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container:first-child {
            grid-column: 1 / 2;
            grid-row: 1 / 3;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container {
            display: block;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            border-radius: 10px;
            box-shadow: var(--box-shadow);
            transition: box-shadow 0.2s ease-in;
            overflow: hidden;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small {
            display: block;
            width: 100%;
            height: 100%;
            position: relative;
            padding: 0;
            margin: 0;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small::after {
            display: block;
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            right: 0;
            height: 40%;
            background: linear-gradient(
              to top,
              rgba(0, 0, 0, 0.5) 0%,
              rgba(0, 0, 0, 0)
            );
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-header-container {
            z-index: 1;
            position: absolute;
            display: block;
            bottom: 10%;
            left: 10%;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-header-container
            .flex-top {
            display: flex;
            flex-direction: column;
            color: #fff;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-header-container
            .flex-top
            .project-card-header {
            font-size: 18px;
            line-height: 18px;
            font-weight: 700;
            letter-spacing: 0.5px;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-header-container
            .flex-top
            .project-card-city {
            color: var(--accent-red);
            font-size: 15px;
            line-height: 22px;
            font-weight: 500;
            letter-spacing: 1.5px;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-button-container {
            display: block;
            position: absolute;
            z-index: 1;
            bottom: 0;
            right: 0;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .project-card-energy {
            display: none;
            position: absolute;
            z-index: 2;
            width: auto;
            padding: 10px 25px 13px;
            line-height: 14px;
            font-size: 14px;
            font-weight: 700;
            left: 50%;
            transform: translateX(-50%);
            height: auto;
            color: var(--accent-red);
            background-color: white;
            border-bottom-right-radius: 35px;
            border-bottom-left-radius: 35px;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .img-container {
            position: absolute;
            z-index: 0;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
          }
          .projects-list-plate
            .project-cards-small-plate
            .project-card-small-container
            .project-card-small
            .img-container
            .project-card-img {
            z-index: -1;
            width: 100%;
            height: auto;
          }
          .text-area {
            display: block;
            margin-top: 30px;
          }
          .referenc-list-container {
            text-align: center;
            width: 100%;
            margin-bottom: 45px;
          }
          .referenc-list-container .referenc-list-unit {
            box-shadow: var(--box-shadow);
            display: block;
            width: 100%;
            margin-top: 30px;
            padding: 10px;
            background: var(--accent-red);
            color: white;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
            transition: box-shadow 0.2s ease-in;
          }
          .referenc-list-container .referenc-list-unit:hover {
            box-shadow: var(--box-shadow);
          }
          .referenc-list-container .referenc-list-unit .referenc-list {
            color: white;
          }
          @media (min-width: 576px) {
            .projects-list-plate {
              position: relative;
            }
            .projects-list-plate .project-cards-small-plate {
              display: grid;
              grid-gap: 15px;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 140px 140px 140px 140px 140px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container:first-child {
              grid-column: 1 / 2;
              grid-row: 1 / 3;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small::after {
              display: block;
              position: absolute;
              content: '';
              bottom: 0;
              left: 0;
              right: 0;
              height: 40%;
              background: linear-gradient(
                to top,
                rgba(0, 0, 0, 0.5) 0%,
                rgba(0, 0, 0, 0)
              );
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container {
              bottom: 10%;
              left: 10%;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-header {
              font-size: 18px;
              line-height: 18px;
              font-weight: 700;
              letter-spacing: 0.5px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-city {
              font-size: 15px;
              line-height: 22px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-button-container {
              display: block;
              position: absolute;
              z-index: 1;
              bottom: 0;
              right: 0;
            }
          }

          @media (min-width: 768px) {
            .projects-list-plate {
              position: relative;
            }
            .projects-list-plate .project-cards-small-plate {
              display: grid;
              grid-gap: 30px;
              grid-template-columns: 1fr 1fr;
              grid-template-rows: 170px 170px 170px 170px 170px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container:first-child {
              grid-column: 1 / 2;
              grid-row: 1 / 3;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container {
              bottom: 10%;
              left: 10%;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-header {
              font-size: 20px;
              line-height: 18px;
              font-weight: 700;
              letter-spacing: 0.5px;
              padding-bottom: 5px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-city {
              font-size: 15px;
              line-height: 22px;
              font-weight: 700;
              letter-spacing: 1.5px;
              text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-button-container {
              display: block;
              position: absolute;
              z-index: 1;
              bottom: 0;
              right: 0;
            }
          }

          @media (min-width: 992px) {
            .projects-list-plate {
              position: relative;
            }
            .projects-list-plate .project-cards-small-plate {
              display: grid;
              grid-gap: 30px;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 170px 170px 170px;
            }

            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container:first-child {
              grid-column: 1 / 1;
              grid-row: 1 / 3;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container:hover {
              box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.3);
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container {
              bottom: 10%;
              left: 10%;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-header {
              font-size: 20px;
              line-height: 18px;
              font-weight: 700;
              letter-spacing: 0.5px;
              padding-bottom: 5px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-city {
              font-size: 14px;
              text-transform: uppercase;
              line-height: 22px;
              font-weight: 700;
              text-shadow: 0 0 7px rgba(0, 0, 0, 0.5);
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-button-container {
              display: block;
              position: absolute;
              z-index: 1;
              bottom: 0;
              right: 0;
            }
            .referenc-list-container .referenc-list-unit:hover {
              box-shadow: 0px 15px 30px -15px rgba(0, 0, 0, 0.7);
            }
          }

          @media (min-width: 1200px) {
            .projects-list-plate {
              position: relative;
            }
            .projects-list-plate .project-cards-small-plate {
              display: grid;
              grid-gap: 30px;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 200px 200px 200px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container:first-child {
              grid-column: 1 / 2;
              grid-row: 1 / 3;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container {
              display: block;
              margin: 0 auto;
              width: 100%;
              height: 100%;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container {
              z-index: 1;
              position: absolute;
              display: block;
              bottom: 10%;
              left: 10%;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top {
              display: flex;
              flex-direction: column;
              color: #fff;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-header {
              font-size: 22px;
              line-height: 22px;
              font-weight: 900;
              letter-spacing: 0.5px;
              padding-bottom: 5px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-header-container
              .flex-top
              .project-card-city {
              font-size: 15px;
              line-height: 22px;
              font-weight: 700;
              letter-spacing: -0.3px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-button-container {
              display: block;
              position: absolute;
              z-index: 1;
              bottom: 0;
              right: 0;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .project-card-energy {
              display: none;
              position: absolute;
              z-index: 2;
              width: auto;
              padding: 10px 25px 13px;
              line-height: 14px;
              font-size: 14px;
              font-weight: 700;
              left: 50%;
              transform: translateX(-50%);
              height: auto;
              color: var(--accent-red);
              background-color: white;
              border-bottom-right-radius: 35px;
              border-bottom-left-radius: 35px;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .img-container {
              position: absolute;
              z-index: 0;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              display: flex;
              justify-content: center;
              align-items: center;
              overflow: hidden;
            }
            .projects-list-plate
              .project-cards-small-plate
              .project-card-small-container
              .project-card-small
              .img-container
              .project-card-img {
              z-index: -1;
              width: 100%;
              height: auto;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ProjectsListPlate;
