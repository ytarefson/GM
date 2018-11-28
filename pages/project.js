import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import projectList from '../components/projectList';

const Project = props => (
  <div>
    <Head title="Проект" description="Лучший проект" />
    <div className="container-fluid">
      <div className="mycontainer">
        <div className="breadcrumbs" />
      </div>
    </div>
    <div>{props.project.label}</div>
    <div>{props.project.id}</div>
  </div>
);

Project.getInitialProps = async function(context) {
  const { id } = context.query;
  const project = projectList[id];

  return { project };
};

export default Project;
