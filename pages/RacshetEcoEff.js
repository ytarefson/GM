import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';

class RacshetEcoEff extends Component {
  render() {
    const { serviceName } = this.props;
    return (
      <Layout>
        <ServiceUnitPlate serviceName={serviceName} />
        <FormPage product={serviceName} />
      </Layout>
    );
  }
}

RacshetEcoEff.getInitialProps = async function(context) {
  const serviceName = context.query.serviceName;
  return { serviceName };
};

export default RacshetEcoEff;
