import React, { Component } from 'react';
import Layout from '../components/Layout';
// import NextHead from 'next/head';
import ProductUnitPlate from '../components/products/ProductUnitPlate';

class Product extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <Layout>
          <div className="container-fluid product-unit-wrapper pb-5">
            <ProductUnitPlate data={data} />
          </div>
        </Layout>
        <style jsx>{`
          .product-unit-wrapper {
            position: relative;
            padding-bottom: 80px;
            padding: 0;
          }
        `}</style>
      </div>
    );
  }
}

Product.getInitialProps = async function(context) {
  const data = { id: '', category: '' };
  data.id = context.query.id;
  data.category = context.query.category;
  return { data };
};

export default Product;
