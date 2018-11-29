import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import projectList from '../components/tables/projectList';
import Layout from '../components/Layout';

const Project = props => (
  <div>
    <Head title="Проект" description="Лучший проект" />
    <Layout>
      <div className="container-fluid">
        <div className="mycontainer">
          <div className="breadcrumbs">
            <Link href="/">
              <a>Главная > </a>
            </Link>
            <Link href="/projects">
              <a>Проекты > </a>
            </Link>
            <span>{props.project.label}</span>
          </div>
        </div>
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-md-8">
              <h2 className="header-detail">{props.project.label}</h2>
              <span className="subheading-detail">{props.project.city}</span>
              <p className="text-common">{props.project.description}</p>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-container">
                <img
                  src={`../static/images/${props.project.img}`}
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
    </Layout>
  </div>
);

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const project = projectList[id];

  return { project };
};

export default Project;
