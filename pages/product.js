import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import ProductUnitPlate from '../components/products/ProductUnitPlate';

const Product = data => (
  <div>
    <Head
      title="Детальная новость - Газовые Машины"
      description='Подбробная информация о деятельности компании ООО "Газовые машины"'
    />
    <Layout>
      <div className="container-fluid news">
        <div className="mycontainer">
          <div className="breadcrumbs">
            <Link href="/">
              <a>Главная > </a>
            </Link>
            <Link href="/products">
              <a>Продукты > </a>
            </Link>
          </div>

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
  //console.log(data);
  return { data };
};

export default Product;
