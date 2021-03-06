import React, { Component } from 'react';

const ProductsByCategories = data => <div className="mycontainer" />;

ProductsByCategories.getInitialProps = async function(context) {
  if (!context.query) {
    const category = 'MAN';
    return category;
  } else {
    const { category } = context.query;
    return category;
  }

  const data = [];
  for (const cat in productsList) {
    if (productsList.hasOwnProperty(cat)) {
      const element = productsList[cat];
      if (element.category === category) {
        data.push(element.products);
      }
    }
  }

  return { data };
};

export default ProductsByCategories;
