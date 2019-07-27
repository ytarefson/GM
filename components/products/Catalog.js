import React, { Component } from 'react';
import productsList from '../tables/productsList';
import '../../scss/video.scss';
import { Player } from 'video-react';
import YoutubeVideo from '../YoutubeVideo';
import YoutubeVideoMan from '../YoutubeVideoMan';
import YoutubeVideoMan2 from '../YoutubeVideoMan2';
import YoutubeVideo1 from '../YoutubeVideo1';
import YoutubeVideoLiebherr2 from '../YoutubeVideoLiebherr2';
import Link from '../Link';
import PropTypes from 'prop-types';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList,
      itemsSelected: []
    };
  }

  componentWillMount() {
    const brand = this.props.brand;
    console.log('Component will mount got brand - ' + brand);

    let itemsSelected = [];

    if (brand == 'ALL') {
      this.state.items.map(category => {
        itemsSelected.push(category.products);
      });
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];
          if (products.category == brand) {
            itemsSelected = products.products;
          }
        }
      }
    }

    this.setState({ itemsSelected: itemsSelected });
  }

  render() {
    // const data = this.state.itemsSelected;
    const category = this.props.brand;
    const brand = this.props.brand;
    console.log('brand is ' + brand);

    let data = [];

    if (brand == 'ALL') {
      console.log('ALL');
      this.state.items.map(category => {
        data.push(category.products);
      });
      console.log(data);
    } else {
      for (const productsCategory in this.state.items) {
        if (this.state.items.hasOwnProperty(productsCategory)) {
          const products = this.state.items[productsCategory];
          if (products.category == brand) {
            data = products.products;
          }
        }
      }
    }

    return (
      <div className="container-fluid products">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <span className="category-header">Бренды:</span>
              <ul className="category-list">
                <li
                  className={
                    category == 'MTU' ? 'category-li active' : 'category-li'
                  }
                >
                  <Link href="/products?brand=MTU" scroll={false}>
                    <a className="category-link">MTU</a>
                  </Link>
                </li>

                <li
                  className={
                    category == 'MAN' ? 'category-li active' : 'category-li'
                  }
                >
                  <Link href="/products?brand=MAN" scroll={false}>
                    <a className="category-link">MAN</a>
                  </Link>
                </li>

                <li
                  className={
                    category == 'LIEBHERR'
                      ? 'category-li active'
                      : 'category-li'
                  }
                >
                  <Link href="/products?brand=LIEBHERR" scroll={false}>
                    <a className="category-link">Liebherr</a>
                  </Link>
                </li>

                <li
                  className={
                    category == 'YAMZ' ? 'category-li active' : 'category-li'
                  }
                >
                  <Link href="/products?brand=YAMZ" scroll={false}>
                    <a className="category-link">ЯМЗ</a>
                  </Link>
                </li>

                <li
                  className={
                    category == 'JENBACHER'
                      ? 'category-li active'
                      : 'category-li'
                  }
                >
                  <Link href="/products?brand=JENBACHER" scroll={false}>
                    <a className="category-link">Jenbacher</a>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-9 col-lg-10 product-card-plate">
              <input
                type="range"
                min="100"
                max="4100"
                step="100"
                value="500"
                multiple
                className=""
              />
              {data.map(item => (
                <div className="product-card-container" key={item.id}>
                  <Link
                    href={`/products/${category}/${item.id}`}
                    key={item.key}
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
                            <span className="product-card-details">
                              Подробнее...
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
          {category == 'LIEBHERR' && (
            <div className="row mt-5 m-0 d-flex flex-column">
              <div className="col-12 col-md-10 offset-md-2">
                <YoutubeVideo1 className="myVideo" />
              </div>
              <div className="col-12 col-md-10 offset-md-2">
                <YoutubeVideoLiebherr2 className="myVideo" />
              </div>
            </div>
          )}
          {category == 'MAN' && (
            <div className="row mt-5 m-0">
              <div className="col-12 col-md-10 col-xl-6">
                <YoutubeVideoMan className="myVideo" />
              </div>
              <div className="col-12 col-md-10 col-xl-6">
                <YoutubeVideoMan2 className="myVideo" />
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

Catalog.propTypes = {
  brand: PropTypes.string
};
Catalog.defaultProps = {
  brand: 'ALL'
};

export default Catalog;
