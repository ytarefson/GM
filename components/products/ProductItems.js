import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class ProductItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.data
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ result: newProps.data });
  }

  render() {
    const { view } = this.props;
    const { result } = this.state;

    // Переключатель вида отображения товаров и его класс

    let plateClass = classNames(
      'col-12 col-md-9 col-lg-10 product-card-plate ',
      view
    );

    return (
      <TransitionGroup className={plateClass}>
        {result.map(item => (
          <CSSTransition
            key={item.id}
            timeout={200}
            className="product-card-container"
          >
            <div>
              <Link
                href={`/products/${item.category}/${item.id}`}
                key={`key0-${item.id}`}
              >
                <a className="product-card">
                  <div className="img-container">
                    <img
                      src={`../../static/images/products/thumb-${item.img}`}
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
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

ProductItems.propTypes = {
  data: PropTypes.array.isRequired,
  view: PropTypes.string
};

export default ProductItems;
