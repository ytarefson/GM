import React, { Component } from 'react';
import Link from 'next/link';
import productsList from '../tables/productsList';
import '../../scss/products/ProductUnitPlate.scss';

export class ProductsUnitPlate extends Component {
  render() {
    const { id, category } = this.props.data.data;
    const data = productsList;
    let products = [];
    let product = [];
    data.map(item => {
      if (item.category === category) {
        products = item.products;
        products.map(item => {
          if (item.id === Number(id)) {
            product = item;
          }
        });
      }
    });
    return (
      <div className="container-fluid product-unit">
        <div className="mycontainer">
          <div className="breadcrumbs">
            <Link href="/">
              <a>Главная > </a>
            </Link>
            <Link href="/products">
              <a>Продукты > </a>
            </Link>
            <Link href={`/products?category=${category}`}>
              <a>{category} > </a>
            </Link>
            <span>{product.label}</span>
          </div>
        </div>
        <div className="mycontainer">{product.label}</div>
      </div>
    );
  }
}
export default ProductsUnitPlate;
