import React from "react";
import Head from "../components/head";
import Layout from "../components/Layout";
import ProductUnitPlate from "../components/products/ProductUnitPlate";
import "../scss/product.scss";

const Product = data => (
  <div>
    <Head
      title="Детальная новость - Газовые Машины"
      description='Подбробная информация о деятельности компании ООО "Газовые машины"'
    />
    <Layout>
      <div className="container-fluid product-main-container">
        <div className="mycontainer">
          <ProductUnitPlate data={data} />
        </div>
      </div>
    </Layout>
  </div>
);

Product.getInitialProps = async function(context) {
  const data = { id: "", category: "" };
  data.id = context.query.id;
  data.category = context.query.category;
  return { data };
};

export default Product;
