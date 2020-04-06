import React, { Component } from 'react';
import productsList from '../tables/productsList';
import { Player } from 'video-react';
import YoutubeVideo from '../YoutubeVideo';
import YoutubeVideoMan from '../YoutubeVideoMan';
import YoutubeVideoMan2 from '../YoutubeVideoMan2';
import YoutubeVideo1 from '../YoutubeVideo1';
import YoutubeVideoLiebherr2 from '../YoutubeVideoLiebherr2';
import Link from '../Link';
import PropTypes from 'prop-types';
import Filter from './Filter';
import ProductPlate from './ProductPlate';
import classNames from 'classnames';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList,
      itemsSelected: [],
      minValue: 100,
      maxValue: 4000,
      view: 'list',
      foundItems: 0
    };
    this.onFilterChange = this.onFilterChange.bind(this);
    this.onViewTypeChange = this.onViewTypeChange.bind(this);
  }

  componentDidMount() {
    const brand = this.props.brand;

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

  onFilterChange(minValue, maxValue) {
    this.setState({ minValue, maxValue });
  }
  onViewTypeChange(view) {
    this.setState({ view });
  }

  render() {
    // const data = this.state.itemsSelected;
    const category = this.props.brand;
    const brand = this.props.brand;
    const { minValue, maxValue, foundItems } = this.state;

    let data = [];
    if (brand == 'ALL') {
      this.state.items.map(category => {
        data.push(category.products);
      });
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
    let view = true;
    if (this.state.view == 'list') {
      view = true;
    } else {
      view = false;
    }
    let buttonListClass = classNames('view-item list-icon ', {
      active: view
    });
    let buttonPlateClass = classNames('view-item plate-icon ', {
      active: !view
    });

    return (
      <div className="container-fluid products">
        <div className="container">
          <div className="row filter">
            <div className="col-12">
              <div className="filter-component">
                <div className="filter-group">
                  <Filter
                    foundItems={foundItems}
                    onFilterChange={this.onFilterChange}
                  />
                </div>
                <div className="button-group">
                  <button
                    onClick={() => this.onViewTypeChange('plate')}
                    className={buttonPlateClass}
                  >
                    <div className="block block-1" />
                    <div className="block block-2" />
                    <div className="block block-3" />
                    <div className="block block-4" />
                    <div className="block block-5" />
                    <div className="block block-6" />
                    <div className="block block-7" />
                    <div className="block block-8" />
                    <div className="block block-9" />
                  </button>
                  <button
                    onClick={() => this.onViewTypeChange('list')}
                    className={buttonListClass}
                  >
                    <div className="block-min block-1" />
                    <div className="block-min block-2" />
                    <div className="block-min block-3" />
                    <div className="block-max block-4" />
                    <div className="block-max block-5" />
                    <div className="block-max block-6" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-3 col-lg-2">
              <span className="category-header">Бренды:</span>
              <ul className="category-list">
                <li
                  className={
                    category == 'ALL' ? 'category-li active' : 'category-li'
                  }
                >
                  <Link href="/products?brand=ALL" scroll={false}>
                    <a className="category-link">Все</a>
                  </Link>
                </li>
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

            <ProductPlate
              data={data}
              brand={brand}
              minValue={minValue}
              maxValue={maxValue}
              view={this.state.view}
              onFoundChange={this.onFoundChange}
            />
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
        <style jsx>{`
          @import '../node_modules/video-react/dist/video-react';
          .myVideo {
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            height: 300px;
          }
          .video-react-poster {
            top: 0;
          }

          .myVideoKompleks-2 {
            width: auto;
            overflow: hidden;
          }

          @media (min-width: 992px) {
            .myVideo {
              height: 400px;
            }
          }
          @media (min-width: 1200px) {
            .myVideo {
              height: 400px;
            }
          }
        `}</style>
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
