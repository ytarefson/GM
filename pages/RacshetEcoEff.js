import React from "react";
import Layout from "../components/Layout";
import FormPage from "../components/form";
import ServiceUnitPlate from "../components/services/ServiceUnitPlate";

const RacshetEcoEff = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
    <FormPage product={serviceName} />
  </Layout>
);

RacshetEcoEff.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default RacshetEcoEff;
