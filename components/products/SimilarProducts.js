import React, { Component } from "react";
import Link from "next/link";

import "../../scss/products/SimilarProducts.scss";
import productsList from "../tables/productsList";

export class SimilarProducts extends Component {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;

    return (
      <div className="mycontainer section-plate">
        <div className="row">
          <div className="col-12">
            <h4 id="power-header" className="header-min-colored pt-2 pb-1">
              Силовые установки{" "}
              <span className="dark-color">на базе двигателей {category}</span>
            </h4>
            <div className="similar-products pb-3">
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
                      <span className="similar-card-title">{`Газопоршневая электростанция ${label}`}</span>
                    </a>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default SimilarProducts;
