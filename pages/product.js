import React from "react";
import Layout from "../components/Layout";
// import NextHead from 'next/head';
import ProductUnitPlate from "../components/products/ProductUnitPlate";
import "../scss/product.scss";

const Product = data => (
  <div>
    {/* <NextHead>
      <link rel="icon" href="../../../static/images/favicon/favicon.ico" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="../../../static/images/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="../../../static/images/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="../../../static/images/favicon/favicon-16x16.png"
      />
      <link
        rel="manifest"
        href="../../../static/images/favicon/site.webmanifest"
      />
      <link
        rel="mask-icon"
        href="../../../static/images/favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
    </NextHead> */}
    <Layout>
      <div className="container-fluid product-unit-wrapper pb-5">
        <ProductUnitPlate data={data} />
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
