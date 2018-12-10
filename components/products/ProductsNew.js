import React, { Component } from 'react';
import productsList from '../tables/productsList';

class ProductsNew extends Component {
  state = {
    items: productsList,
    categorySelected: 'MAN',
    itemsSelected: []
  };

  componentDidMount() {}

  clickHandle(e) {}

  render() {
    const products = this.state.itemsSelected;

    return <div>{products.map(item => {})}</div>;
  }
}

export default ProductsNew;
