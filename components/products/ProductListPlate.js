import React, { Component } from "react";
import productsList from "../tables/productsList";
import ProductsByCategories from "../products/ProductsByCategories";
import Link from "../Link";
import "../../scss/products/ProductListPlate.scss";

export class ProductsListPlate extends Component {
  render() {
    const data = this.props.data.data[0];
    const category = this.props.data.data[1];
    return (
      <div className="mycontainer mt-5">
        <div className="row m-0">
          <div className="col-12 col-md-2">
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
          <div className="col-12 col-md-10 product-card-plate">
            {data.map(item => (
              <div className="product-card-container">
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
                    <div className="text-container">
                      <div className="flex-top">
                        <span className="product-name">{item.label}</span>
                      </div>
                      <div className="flex-bot">
                        <div className="flex-row">
                          <span className="product-card-motor-title">
                            Двигатель:
                          </span>
                          <span className="product-card-motor">
                            {item.motorMark}
                          </span>
                        </div>
                        <div className="flex-row">
                          <span className="product-card-power-title">
                            Мощность:
                          </span>
                          <span className="product-card-power">
                            {item.electricPower} кВт
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default ProductsListPlate;
