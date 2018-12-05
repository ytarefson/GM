import React from 'react';
import Layout from '../components/Layout';
import ProductUnitPlate from '../components/products/ProductUnitPlate';
import '../scss/product.scss';

const Product = data => (
  <div>
    <Layout>
      <div className="container-fluid news">
        <div className="mycontainer">
          <ProductUnitPlate data={data} />
        </div>
      </div>
    </Layout>
  </div>
);

Product.getInitialProps = async function(context) {
  const data = { id: '', category: '' };
  data.id = context.query.id;
  data.category = context.query.category;
  return { data };
};

export default Product;
