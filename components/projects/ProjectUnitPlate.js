import React, { Component } from 'react';
import Head from '../../components/head';
import Link from '../Link';
import Video from '../Video';

export class ProjectUnitPlate extends Component {
  render() {
    const project = this.props.project;
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
                    src={`/images/${project.img}`}
                    alt="Газовая мини-ТЭЦ"
                    title="Газовая мини-ТЭЦ"
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
                  Описание проекта -{' '}
                  <span className="dark-color">{project.label}</span>
                </h4>
                <p className="text">{project.description}</p>
              </div>
            </div>
          </div>
        </section>
        {isVideo && <Video />}
        <style jsx>{`
          .project-detail {
            overflow: hidden;
          }
          .project-detail .container-fluid {
            padding: 0;
          }
          .project-detail .container-fluid .mycontainer {
            padding-left: 15px;
            padding-right: 15px;
          }
          .project-detail .container-fluid .mycontainer .row {
            margin: 0;
          }
          .project-detail .color-section {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .project-detail .color-section .header-red {
            margin: 0;
            margin-bottom: 5px;
          }
          .project-detail
            .color-section
            .project-unitplate-props-container
            .text-min {
            font-weight: 300;
            letter-spacing: 0.3px;
            display: block;
            line-height: 22px;
          }
          .project-detail
            .color-section
            .project-unitplate-props-container
            .text-min
            b {
            color: #353535;
            font-weight: 700;
          }
          .project-detail .color-section .project-energy-container {
            display: flex;
            position: relative;
            flex-direction: row-reverse;
            width: 100%;
          }
          .project-detail .color-section .project-energy-container::after {
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background-color: var(--l-grey);
            top: 50%;
            z-index: 0;
            transform: translateY(-50%);
          }
          .project-detail
            .color-section
            .project-energy-container
            .project-energy {
            z-index: 1;
            color: white;
            margin: 0px 0 0px auto;
            background-color: var(--accent-red);
            display: block;
            font-weight: 900;
            padding: 5px 15px;
            border-radius: 30px;
            border: 2px solid var(--l-grey);
          }
          .project-detail .color-section .img-main-container {
            height: auto;
            justify-content: center;
            align-items: center;
          }
          .project-detail .color-section .img-main-container .img-container {
            display: block;
            justify-content: center;
            max-height: 270px;
            overflow: hidden;
            border-radius: 3px;
          }
          .project-detail
            .color-section
            .img-main-container
            .img-container
            .detail-img {
            display: block;
            width: 100%;
            height: auto;
          }

          @media (min-width: 576px) {
            .project-detail .mycontainer .img-main-container .img-container {
              max-height: 360px;
            }
          }
          @media (min-width: 992px) {
            .project-detail .color-section {
              position: relative;
            }
            .project-detail .color-section .border-left {
              display: block;
              position: absolute;
              z-index: 1;
              top: 50%;
              left: -40px;
              width: 70px;
              height: 70%;
              transform: translateY(-50%);
              border: 7px solid rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            .project-detail .color-section .border-right {
              display: block;
              position: absolute;
              z-index: 1;
              top: 50%;
              right: -40px;
              width: 70px;
              height: 70%;
              transform: translateY(-50%);
              border: 7px solid rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            .project-detail
              .color-section
              .project-unitplate-props-container
              .text-min {
              font-weight: 300;
              display: block;
              line-height: 28px;
            }
            .project-detail
              .color-section
              .project-unitplate-props-container
              .text-min
              b {
              color: #353535;
              font-weight: 700;
            }
            .project-detail
              .color-section
              .project-energy-container
              .project-energy {
              font-size: 18px;
              padding: 3px 12px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ProjectUnitPlate;
