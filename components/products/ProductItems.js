import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import classNames from 'classnames';
// import { CSSTransition, TransitionGroup } from 'react-transition-group';

export default function ProductItems(props) {
  const [result, setResult] = useState();

  useEffect(() => {
    setResult(props.data);
  }, [props]);

  let plateClass = classNames(
    'col-12 col-md-9 col-lg-10 product-card-plate ',
    props.view
  );

  return (
    <div className={plateClass}>
      {result
        ? result.map(item => (
            <div key={item.id} className="product-card-container">
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
          ))
        : ''}
    </div>
  );
}
