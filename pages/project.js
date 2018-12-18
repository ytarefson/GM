import React from 'react';
import projectList from '../components/tables/projectList';
import Layout from '../components/Layout';
import ProjectUnitPlate from '../components/projects/ProjectUnitPlate';
import Galery from '../components/Galery';

const Project = project => (
  <div>
    <Layout>
      <ProjectUnitPlate project={project} />
      <Galery project={project} />
    </Layout>
  </div>
);

Project.getInitialProps = async function(context) {
  const id = context.query.id;
  const project = projectList[id];
  return { project };
};

export default Project;
