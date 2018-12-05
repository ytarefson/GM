import React, { Component } from 'react';
import Link from 'next/link';

import '../../scss/products/SimilarProducts.scss';

export class SimilarProducts extends Component {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;

    return (
      <div className="mycontainer similar-products">
        {similar.map(({ label, key, id, img }) => (
          <Link href={`/products/${category}/${id}`} key={`${key}+${id}`}>
            <a className="d-block similar-card">
              <img
                src={`../../static/images/products/${img}`}
                alt={label}
                className="similar-card-img"
              />
            </a>
          </Link>
        ))}
      </div>
    );
  }
}
export default SimilarProducts;
