import React, { Component } from 'react';
import productsList from '../tables/productsList';
import ProductsByCategories from '../products/ProductsByCategories';
import Link from '../Link';
import '../../scss/products/ProductListPlate.scss';

export class ProductsListPlate extends Component {
  render() {
    const data = this.props.data.data[0];
    const category = this.props.data.data[1];
    return (
      <div className="mycontainer">
        <div className="row m-0">
          <div className="col-12 col-md-3">
            <span className="category-header">Бренды:</span>
            <ul className="category-list">
              <li className="category-li">
                <Link activeClassName="active" href="/products?category=man">
                  <a className="category-link">MAN</a>
                </Link>
              </li>
              <li className="category-li">
                <Link
                  activeClassName="active"
                  href="/products?category=liebherr"
                >
                  <a className="category-link">Liebherr</a>
                </Link>
              </li>
              <li className="category-li">
                <Link activeClassName="active" href="/products?category=yamz">
                  <a className="category-link">ЯМЗ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-9 product-card-plate">
            {data.map(item => (
              <Link
                href={`/products/${category}/${item.id}`}
                key={`${item.id}+${item.electricPower}`}
              >
                <a className="product-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/products/${item.img}`}
                      alt={item.label}
                      className="product-card-img"
                    />
                  </div>
                  <span className="product-name">{item.label}</span>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsListPlate;
