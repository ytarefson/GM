import React from "react";
import Link from "next/link";
import Head from "../components/head";
import projectList from "../components/tables/projectList";
import Layout from "../components/Layout";
import ProjectUnitPlate from "../components/projects/ProjectUnitPlate";

const Project = project => (
  <div>
    <Head title="Проект" description="Лучший проект" />
    <Layout>
      <ProjectUnitPlate project={project} />
    </Layout>
  </div>
);

Project.getInitialProps = async function(context) {
  const id = context.query.id;
  const project = projectList[id];
  return { project };
};

export default Project;
