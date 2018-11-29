import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import productsList from '../components/tables/productsList';

const Products = productsList => (
  <div>
    <Head
      title="Продукция - Газовые машины"
      description="Каталог продукции для любой техники"
    />
    <Layout />
  </div>
);

export default Products;
