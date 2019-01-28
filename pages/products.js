import React from 'react';
import Link from 'next/link';
// import Head from '../components/head';
import NextHead from 'next/head';
import Layout from '../components/Layout';
import productsList from '../components/tables/productsList';
import ProductsListPlate from '../components/products/ProductsListPlate';
import ProductsNew from '../components/products/ProductsNewContainer';

const Products = data => (
  <div>
    <NextHead>
      <title>
        Автономные газовые электростанции. Каталог продукции ООО "Газовые
        машины"
      </title>
      <meta
        name="description"
        content="Каталог готовых решений газопоршневых электростанций на базе двигателей: MAN, LIEBHERR, MTU и ЯМЗ."
      />
    </NextHead>
    <Layout>
      <div className="container-fluid products">
        <div className="mycontainer mb-5">
          <div className="row m-0">
            <div className="col-12 col-xl-8">
              <span className="subheading-red-top">Продукция</span>
              <h1 className="header-razdel mb-4">Газовые электростанции</h1>
              <p className="text-min">
                Занимаясь проектированием, сборкой и обслуживанием газовых
                электростанций уже более 12 лет, мы протестировали достаточное
                количество комплектующих и схем сборки, и нашли лучшие решения,
                которые позволяют получить превосходный результат при минимуме
                издержек. Силовые установки использующиеся при проектировании
                газовых электростанций прошли многолетнюю проверку в рабочих
                условиях и гарантирют исправную работу в течение многих лет.
              </p>
            </div>
            <div className="col-12 col-xl-4 d-none d-xl-block">
              <div className="img-container">
                <img
                  src="../static/images/products-img.png"
                  alt="Силовые установки любой мощности"
                  className="products-img"
                />
              </div>
            </div>
          </div>
        </div>

        <ProductsNew />
      </div>
    </Layout>
  </div>
);

Products.getInitialProps = async function(context) {
  if (context.query.category !== undefined) {
    const category = context.query.category.toUpperCase();
    const data = [];
    data.category = '';

    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }
    return { data };
  } else {
    const category = 'MAN';

    let data = [];
    data.category = '';
    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);

          data.push(element.category);
        }
      }
    }
    return { data };
  }
};

export default Products;
