import React, { Component } from "react";
import PropTypes from "prop-types";
import productsList from "../tables/productsList";

class LizingList extends Component {
  render() {
    const { idlist } = this.props;
    let needProducts = [];
    let content = "";
    productsList.map(category => {
      category.products.map(product => {
        if (idlist.includes(product.id)) {
          needProducts.push(product);
        }
      });
    });
    content = needProducts.map((product, index) => (
      // <div className="row">
      <div key={index} className="item">
        <span className="item-title">{product.label}</span>
        <div className="item-props">
          <span className="item-engine">{product.motorMark}</span>
          <span className="item-power">{product.electricPower} кВт</span>
        </div>
      </div>
      // </div>
    ));
    return <div className="items-container">{content}</div>;
  }
}

LizingList.propTypes = {
  idlist: PropTypes.array.isRequired
};

export default LizingList;
