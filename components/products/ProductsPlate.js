import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
// import { CSSTransition, TransitionGroup } from "react-transition-group";
import gsap from 'gsap';

class ProductsPlate extends Component {
  componentDidMount() {
    console.log('here we are');
    const tl = gsap.timeline();
    tl.from('.product-card-container', {
      duration: 0.75,
      scale: 0.75,
      opacity: 0,
      ease: 'power2'
    });
  }

  render() {
    const { brand, minValue, maxValue, data, view } = this.props;
    let productsContent = '';

    let productItems = [];

    if (brand == 'ALL') {
      data.map(category => {
        category.map(item => {
          productItems.push(item);
        });
      });
    } else {
      productItems = data;
    }

    const result = productItems.filter(
      item => item.electricPower <= maxValue && item.electricPower >= minValue
    );

    result.sort(function(a, b) {
      return a.electricPower - b.electricPower;
    });

    productsContent = (
      <>
        {result.map(item => (
          <div className="product-card-container">
            <Link
              href={`/products/${item.category}/${item.id}`}
              key={`key0-${item.id}`}
            >
              <a className="product-card">
                <div className="img-container">
                  <img
                    src={`/images/products/thumb-${item.img}`}
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
                    <span className="product-card-details">Подробнее</span>
                  </div>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </>
    );
    let viewSwitch = true;

    if (view == 'list') {
      viewSwitch = true;
    } else {
      viewSwitch = false;
    }

    let plateClass = classNames(
      'col-12 col-md-9 col-lg-10 product-card-plate ',
      view
    );

    return <>{productsContent}</>;
  }
}

ProductsPlate.propTypes = {
  brand: PropTypes.string.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  view: PropTypes.string
};

ProductsPlate.defaultProps = {
  minValue: 100,
  maxValue: 4000,
  view: 'list'
};

export default ProductsPlate;
