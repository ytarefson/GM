import React, { Component } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import productsList from '../tables/productsList';

class LizingList extends Component {
  render() {
    const { idlist } = this.props;
    let needProducts = [];
    let content = '';
    productsList.map(category => {
      category.products.map(product => {
        if (idlist.includes(product.id)) {
          let prod = product;
          prod.cat = category.category;
          needProducts.push(prod);
        }
      });
    });
    content = needProducts.map((product, index) => (
      // <div className="row">
      <Link
        key={`${index}-item`}
        href={`/products/${product.cat}/${product.id}`}
      >
        <a key={`${index}-item`} className="item">
          <span className="item-title">{product.label}</span>
          <div className="item-props">
            <span className="item-engine">{product.motorMark}</span>
            <span className="item-power">{product.electricPower} кВт</span>
          </div>
        </a>
      </Link>
      // </div>
    ));
    return (
      <div className="items-container">
        {content}
        <Link href="/products">
          <a className="button-lizing-catalog">Перейти в каталог продукции</a>
        </Link>
      </div>
    );
  }
}

LizingList.propTypes = {
  idlist: PropTypes.array.isRequired
};

export default LizingList;
