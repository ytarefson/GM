import React, { Component } from 'react';
import productsList from '../tables/productsList';
import ProductsByCategories from '../products/ProductsByCategories';
import Link from '../Link';
import '../../static/scss/products/ProductListPlate.scss';

export class ProductsListPlate extends Component {
  render() {
    const data = this.props.data.data[0];
    return (
      <div className="mycontainer">
        <div className="row m-0">
          <div className="col-12 col-md-3">
            <ul className="category-list">
              <li className="category-li">
                <Link activeClassName="active" href="/products/man">
                  <a className="nav-link">MAN</a>
                </Link>
              </li>
              <li className="category-li">
                <Link activeClassName="active" href="/products/liebherr">
                  <a className="nav-link">Liebherr</a>
                </Link>
              </li>
              <li className="category-li">
                <Link activeClassName="active" href="/products/yamz">
                  <a className="nav-link">ЯМЗ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-9">
            {data.map(item => (
              <div key={`${item.id}+${item.electricPower}`}>{item.label}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsListPlate;
