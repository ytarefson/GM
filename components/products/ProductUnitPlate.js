import React, { Component } from 'react';
import productsList from '../tables/productsList';
import '../../scss/products/ProductUnitPlate.scss';

export class ProductsUnitPlate extends Component {
  render() {
    const data = this.props.data.data;
    return <div className="">{data.id}</div>;
  }
}
export default ProductsUnitPlate;
