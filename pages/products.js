import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/Layout";
import productsList from "../components/tables/productsList";
import ProductListPlate from "../components/products/ProductListPlate";

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
              <h2 className="header-razdel">Каталог готовых решений</h2>
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
                  src="../static/images/63_63_aura.png"
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
  if (context.query.category !== undefined) {
    console.log("Here we are " + context.query.category.toUpperCase());
    const category = context.query.category.toUpperCase();
    const data = [];
    data.category = "";
    console.log("1st " + category);
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
    const category = "MAN";
    console.log(category);
    let data = [];
    data.category = "";
    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);
          // data = element.products;
          //console.log(data);
          data.push(element.category);
        }
      }
    }
    return { data };
  }
};

export default Products;
