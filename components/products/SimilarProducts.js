import React, { Component } from "react";
import Link from "next/link";

import "../../scss/products/SimilarProducts.scss";
import productsList from "../tables/productsList";

export class SimilarProducts extends Component {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;

    return (
      <div className="mycontainer section-plate p-0">
        <span className="header-red header-red-2 pl-3">
          Силовые установки на базе двигателей {category}
        </span>
        <div className="similar-products">
          {similar.map(({ label, key, id, img }) => (
            <Link href={`/products/${category}/${id}`} key={`${key}+${id}`}>
              <div className="similar-card-container">
                <a className="d-block similar-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/products/${img}`}
                      alt={label}
                      className="similar-card-img"
                    />
                  </div>
                  <span className="similar-card-title">{`${label}`}</span>
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
