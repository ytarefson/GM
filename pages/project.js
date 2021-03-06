import React, { Component } from 'react';
import projectList from '../components/tables/projectList';
import Layout from '../components/Layout';
import ProjectUnitPlate from '../components/projects/ProjectUnitPlate';
import FormPage from '../components/form';
import Galery from '../components/galery';

class Project extends Component {
  render() {
    const { project } = this.props;
    return (
      <div>
        <Layout>
          <ProjectUnitPlate project={project} />
          <Galery project={project} />

          <FormPage product={project.label} />
        </Layout>
      </div>
    );
  }
}

Project.getInitialProps = async function(context) {
  const id = context.query.id;
  const project = projectList[id];
  return { project };
};

export default Project;
