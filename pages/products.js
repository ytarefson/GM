import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';
import productsList from '../components/tables/productsList';
import ProductListPlate from '../components/products/ProductListPlate';

// console.log(productsList);
// const data = [];
// for (const category in productsList) {
//   if (productsList.hasOwnProperty(category)) {
//     const element = productsList[category];
//     if (element.category == 'MAN') {
//       data.push(element.products);
//     }
//     console.log(element);
//     console.log(element.category);
//     console.log(data);
//   }
// }

const Products = data => (
  <div>
    <Head
      title="Продукция - Газовые машины"
      description="Каталог продукции для любой техники"
    />
    <Layout>
      <div className="container-fluid products">
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-md-8">
              <span className="subheading-red-top">Продукция</span>
              <h2 className="header-razdel">Каталог силовых агрегатов</h2>
              <p className="text-common">
                Занимаясь проектированием, сборкой и обслуживанием газовых
                электростанций уже более 12 лет, мы протестировали достаточное
                количество комплектующих и схем сборки, и нашли лучшие решения,
                которые позволяют получить превосходный результат при минимуме
                издержек. Силовые установки используещиеся при проектировании
                газовых электростанций прошли многолетнюю проверку в рабочих
                условиях и гарантирют исправную работу в течение многих лет.
              </p>
            </div>
            <div className="col-12 col-md-4">
              <div className="img-container">
                <img
                  src="../static/images/engine.png"
                  alt=""
                  className="products-img"
                />
              </div>
            </div>
          </div>
        </div>
        <ProductListPlate data={data} />
      </div>
    </Layout>
  </div>
);

Products.getInitialProps = async function(context) {
  console.log(context.query);
  if (!context.query === {}) {
    const { category } = context.query.toUpperCase();
    const data = [];
    console.log(category);
    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);
        }
      }
    }

    return { data };
  } else {
    const category = 'MAN';
    console.log(category);
    let data = [];
    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);
          // data = element.products;
          //console.log(data);
        }
      }
    }

    return { data };
  }
};

export default Products;
