import React, { Component } from "react";
import Link from "next/link";

import "../../scss/products/SimilarProducts.scss";

export class SimilarProducts extends Component {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;

    return (
      <div className="similar-products-wrapper">
        <span className="similar-products-header">
          Другие установки на базе двигателей {category}:
        </span>
        <div className="mycontainer similar-product-card-plate">
          {similar.map(({ label, key, id, img }) => (
            <Link href={`/products/${category}/${id}`} key={`${key}+${id}`}>
              <div className="similar-product-card-container">
                <a className="d-block similar-product-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/products/${img}`}
                      alt={label}
                      className="similar-card-img"
                    />
                  </div>
                  <span className="similar-product-card-header">{label}</span>
                </a>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}
export default SimilarProducts;
