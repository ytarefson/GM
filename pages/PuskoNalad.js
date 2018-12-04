import React from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';

const PuskoNalad = serviceName => (
  <Layout>
    <ServiceUnitPlate serviceName={serviceName} />
  </Layout>
);

PuskoNalad.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default PuskoNalad;
