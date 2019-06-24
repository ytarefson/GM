import React, { Component } from 'react';
import Layout from '../components/Layout';
import ServiceUnitPlate from '../components/services/ServiceUnitPlate';
import FormPage from '../components/form';
import ym from 'react-yandex-metrika';

class RacshetEcoEff extends Component {
  componentDidMount() {
    ym('hit', '/uslugi/racshet-ekonomicheskoi-effektivnosti');
  }
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
