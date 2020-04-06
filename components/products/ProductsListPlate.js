import React, { Component } from 'react';
import Link from '../Link';

export class ProductsListPlate extends Component {
  render() {
    const data = this.props.data.data[0];
    const category = this.props.data.data[1];
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-2">
            <span className="category-header">Бренды:</span>
            <ul className="category-list">
              <li className="category-li">
                <Link activeClassName="active" href="/products?category=mtu">
                  <a className="category-link">MTU</a>
                </Link>
              </li>
              <li className="category-li">
                <Link activeClassName="active" href="/products?category=man">
                  <a className="category-link">MAN</a>
                </Link>
              </li>
              <li className="category-li">
                <Link
                  activeClassName="active"
                  href="/products?category=liebherr"
                >
                  <a className="category-link">Liebherr</a>
                </Link>
              </li>
              <li className="category-li">
                <Link activeClassName="active" href="/products?category=yamz">
                  <a className="category-link">ЯМЗ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-10 product-card-plate">
            {data.map((item) => (
              <div className="product-card-container" key={item.key}>
                <Link
                  href={{
                    pathname: '/product',
                    query: { category: category, id: item.id },
                  }}
                  as={`/products/${category}/${item.id}`}
                  key={item.key}
                >
                  <a className="product-card">
                    <div className="img-container">
                      <img
                        src={`/images/products/thumb-${item.img}`}
                        alt={item.label}
                        title={item.label}
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
                          <span className="product-card-motor pb-1">
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
        <style jsx global>{`
          .enter {
            opacity: 0;
          }
          .enter-active {
            transition: opacity 200ms ease-in;
            opacity: 1;
          }
          .enter-done {
            opacity: 1;
          }
          .exit {
            opacity: 1;
          }
          .exit-active {
            transition: opacity 200ms ease-in;
            opacity: 0;
          }

          .products-promo {
            background: linear-gradient(to right, #e1e1e1 0%, #b1b1b1 100%);
            padding-top: 30px;
            padding-bottom: 30px;
            box-shadow: inset 0 10px 15px -5px rgba(0, 0, 0, 0.2);
          }
          .products-promo .text-container .header-min-colored {
            display: block;
            margin-bottom: 15px;
            color: white;
            font-size: 27px;
            line-height: 32px;
            letter-spacing: 1px;
            text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
          }
          .products-promo .text-container .text-min {
            display: block;
            margin-bottom: 15px;
            line-height: 18px;
          }
          .products-promo .cards-plate {
            display: none;
          }

          .products {
            padding-top: 30px;
          }
          .products .category-header {
            font-family: var(--molot-font);
            font-size: 20px;
            color: grey;
            letter-spacing: 4px;
          }
          .products .filter .filter-component {
            margin-bottom: 40px;
            margin-top: 15px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
          }
          .products .filter .filter-component .filter-group {
            width: 70%;
          }
          .products .filter .filter-component .filter-group .text-container {
            display: none;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range {
            position: relative;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__label--min {
            position: absolute;
            font-size: 12px;
            bottom: -35px;
            left: 0;
            color: var(--sub-color);
            font-weight: 300;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__label--min::after {
            content: ' кВт';
            color: var(--sub-color);
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__label--max {
            position: absolute;
            font-size: 12px;
            bottom: -35px;
            right: 0;
            color: var(--sub-color);
            font-weight: 300;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__label--max::after {
            content: ' кВт';
            color: var(--sub-color);
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__track--background {
            background-color: #fafafa;
            border: 1px solid #dddddd;
            height: 15px;
            border-radius: 15px;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__track--background
            .input-range__track--active {
            background: rgb(242, 125, 14);
            opacity: 0.3;
            height: 15px;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__track--background
            .input-range__slider-container {
            position: relative;
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__track--background
            .input-range__slider-container
            .input-range__label--value {
            position: absolute;
            top: -10px;
            left: 50%;
            transform: translateX(-50%);
            color: var(--accent-red);
            font-weight: 600;
            text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
          }
          .products
            .filter
            .filter-component
            .filter-group
            .filter-block
            .input-block
            .input-range
            .input-range__track--background
            .input-range__slider-container
            .input-range__slider {
            position: absolute;
            background: var(--accent-red);
            box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
            border-radius: 11px;
            height: 35px;
            position: relative;
            top: 0;
            transform: translateY(35%);
          }
          .products .filter .filter-component .button-group {
            width: auto;
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            align-items: center;
            border-left: 1px solid rgba(0, 0, 0, 0.125);
          }
          .products .filter .filter-component .button-group .view-item {
            z-index: 0;
            display: block;
            position: relative;
            width: 22px;
            height: 24px;
            background-color: transparent;
            border: none;
            margin-left: 8px;
            cursor: pointer;
            outline: none;
          }
          .products .filter .filter-component .button-group .active {
            background-color: var(--accent-red);
            border-radius: 3px;
          }
          .products .filter .filter-component .button-group .active .block {
            background-color: #fff !important;
          }
          .products .filter .filter-component .button-group .active .block-min,
          .block-max {
            background-color: #fff !important;
          }
          .products .filter .filter-component .button-group .plate-icon {
            position: relative;
          }
          .products .filter .filter-component .button-group .plate-icon .block {
            z-index: 1;
            position: absolute;
            display: block;
            background-color: #bababa;
            width: 4px;
            height: 4px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-1 {
            top: 2px;
            left: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-2 {
            top: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-3 {
            top: 2px;
            right: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-4 {
            top: 50%;
            transform: translateY(-50%);
            left: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-5 {
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-6 {
            top: 50%;
            right: 2px;
            transform: translateY(-50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-7 {
            bottom: 2px;
            left: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-8 {
            bottom: 2px;
            left: 50%;
            transform: translateX(-50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .plate-icon
            .block-9 {
            bottom: 2px;
            right: 2px;
          }
          .products .filter .filter-component .button-group .list-icon {
            position: relative;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-min {
            z-index: 1;
            position: absolute;
            display: block;
            background-color: #bababa;
            width: 4px;
            height: 4px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-max {
            z-index: 1;
            position: absolute;
            display: block;
            background-color: #bababa;
            width: 12px;
            height: 4px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-1 {
            top: 2px;
            left: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-2 {
            top: 50%;
            left: 2px;
            transform: translateY(-50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-3 {
            bottom: 2px;
            left: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-4 {
            top: 2px;
            right: 2px;
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-5 {
            top: 50%;
            right: 2px;
            transform: translateY(-50%);
          }
          .products
            .filter
            .filter-component
            .button-group
            .list-icon
            .block-6 {
            bottom: 2px;
            right: 2px;
          }
          .products .category-list {
            padding: 0;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            flex-wrap: wrap;
            margin-top: 10px;
          }
          .products .category-list .category-li {
            border-radius: 30px;
            border: 1px solid grey;
            cursor: pointer;
            margin: 5px;
          }
          .products .category-list .category-li .category-link {
            display: block;
            width: 100%;
            height: 100%;
            font-weight: 300;
            font-size: 14px;
            text-transform: uppercase;
            transition: all 0.2s ease-in;
            color: grey;
          }
          .products .category-list .active {
            background-color: var(--accent-red);
            border: none;
          }
          .products .category-list .active .category-link {
            color: white;
          }
          .products .plate {
            padding: 0;
            padding-bottom: 30px;
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-auto-rows: auto;
            grid-gap: 15px;
            justify-items: center;
            align-items: center;
          }
          .products .plate .product-card-container {
            width: 100%;
            height: 100%;
          }
          .products .plate .product-card-container .product-card {
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: var(--border-radius);
            display: block;
            margin: 0 auto;
            background: #fff;
            max-width: 230px;
            width: 100%;
            height: 245px;
            box-shadow: var(--box-shadow);
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
            transition: box-shadow 0.2s ease-out;
          }
          .products .plate .product-card-container .product-card:hover {
            box-shadow: var(--box-shadow-up);
          }
          .products
            .plate
            .product-card-container
            .product-card
            .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100px;
            width: 100%;
            overflow: hidden;
            border-radius: 7px 7px 0 0;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .img-container
            .product-card-img {
            height: auto;
            width: 100%;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container {
            height: 120px;
            padding: 15px 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-top
            .product-name {
            display: block;
            font-family: var(--molot-font);
            font-size: 17px;
            line-height: 18px;
            color: var(--accent-red);
            margin-bottom: 10px;
            font-weight: 700;
            letter-spacing: 0.3px;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-top
            .product-name::first-word() {
            color: #353535;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row {
            height: auto;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-motor-title {
            font-size: 10px;
            line-height: 13px;
            color: #313131;
            display: block;
            padding-bottom: 2px;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-motor {
            font-size: 11px;
            font-weight: 700;
            letter-spacing: -0.6px;
            color: grey;
            display: block;
            line-height: 14px;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-power-title {
            line-height: 13px;
            font-size: 10px;
            color: #313131;
            display: block;
            padding-bottom: 2px;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-power {
            font-size: 11px;
            font-weight: 700;
            color: grey;
            letter-spacing: -0.6px;
            display: block;
            line-height: 14px;
            margin-bottom: 10px;
          }
          .products
            .plate
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-details {
            font-size: 9px;
            text-align: right;
            display: block;
            color: var(--accent-red);
          }
          .products .list {
            margin-top: 15px;
            padding: 0;
            padding-bottom: 30px;
            display: grid;
            grid-template-columns: 1fr;
            grid-auto-rows: auto;
            grid-gap: 15px;
            justify-items: center;
            align-items: center;
          }
          .products .list .product-card-container {
            width: 100%;
            height: 100%;
            padding-left: 15px;
            padding-right: 15px;
          }
          .products .list .product-card-container .product-card {
            cursor: pointer;
            position: relative;
            z-index: 0;
            border-radius: 0;
            display: grid;
            grid-template-columns: 2fr 3fr;
            width: 100%;
            height: auto;
            padding-bottom: 15px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            transition: box-shadow 0.2s ease-out;
          }
          .products .list .product-card-container .product-card .img-container {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            width: 100%;
            overflow: hidden;
          }
          .products
            .list
            .product-card-container
            .product-card
            .img-container
            .product-card-img {
            height: auto;
            width: 100%;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container {
            padding: 0px 15px;
            display: block;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-top
            .product-name {
            display: block;
            font-family: var(--molot-font);
            font-size: 17px;
            line-height: 18px;
            color: var(--accent-red);
            margin-bottom: 20px;
            font-weight: 700;
            letter-spacing: 0.3px;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-top
            .product-name::first-word() {
            color: #353535;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row {
            height: auto;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-motor-title {
            font-size: 10px;
            line-height: 13px;
            color: var(--sub-color);
            display: block;
            padding-bottom: 2px;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-motor {
            font-size: 13px;
            font-weight: 700;
            letter-spacing: -0.6px;
            color: black;
            display: block;
            line-height: 14px;
            margin-bottom: 5px;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-power-title {
            line-height: 13px;
            font-size: 10px;
            color: var(--sub-color);
            display: block;
            padding-bottom: 2px;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .flex-row
            .product-card-power {
            font-size: 13px;
            font-weight: 700;
            color: black;
            letter-spacing: -0.6px;
            display: block;
            line-height: 14px;
          }
          .products
            .list
            .product-card-container
            .product-card
            .text-container
            .flex-bot
            .product-card-details {
            font-size: 9px;
            text-align: right;
            display: none;
            color: var(--accent-red);
          }
          .products-text {
            display: block;
            margin-top: 15px;
            margin-bottom: 15px;
            overflow: hidden;
          }
          .products-text .text-wrapper .header-min-colored {
            margin: 0;
          }
          .products-text .text-wrapper .subheading-common {
            margin: 0;
            color: var(--accent-red);
          }
          .products-text .text-wrapper .text {
            margin-top: 15px;
            margin-bottom: 15px;
            line-height: 20px;
          }
          .promo-projects-product-page {
            margin-top: 15px;
            margin-bottom: 15px;
            padding-bottom: 15px;
          }
          .promo-projects-product-page .section-wrapper .proj-feed {
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr;
            grid-gap: 15px;
          }
          .promo-projects-product-page
            .section-wrapper
            .proj-feed
            .promoproj-card
            .proj-img {
            border-radius: var(--border-radius);
            overflow: hidden;
          }
          .promo-projects-product-page
            .section-wrapper
            .proj-feed
            .promoproj-card
            .text-common {
            margin-top: 5px;
            font-size: 13px;
            line-height: 15px;
          }

          @media (min-width: 576px) {
            .products-promo {
              padding-top: 60px;
              padding-bottom: 60px;
            }
            .products-promo .promo-text-container .header-min-colored {
              font-size: 36px;
              line-height: 42px;
              margin-bottom: 30px;
            }
            .products-promo
              .promo-text-container
              .text-min-container
              .text-min {
              font-size: 20px;
              line-height: 24px;
              padding-bottom: 15px;
            }

            .products .plate {
              grid-row-gap: 0;
            }
            .products .plate .product-card-container {
              padding: 25px 15px;
            }
            .products .plate .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              z-index: 0;
              display: block;
              margin: 0 auto;
              background: #fff;
              width: 100%;
              height: 380px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .img-container {
              height: 160px;
              overflow: hidden;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              width: 100%;
              height: auto;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container {
              height: 190px;
              padding: 35px 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              font-size: 25px;
              line-height: 22px;
              margin-bottom: 20px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              height: auto;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 14px;
              line-height: 13px;
              color: #313131;
              display: block;
              margin-bottom: 6px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 14px;
              color: grey;
              display: block;
              line-height: 14px;
              margin-bottom: 10px;
              letter-spacing: normal;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              line-height: 13px;
              font-size: 14px;
              color: #313131;
              display: block;
              margin-bottom: 6px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 16px;
              font-weight: 700;
              color: grey;
              letter-spacing: normal;
              display: block;
              line-height: 14px;
              margin-bottom: 15px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-details {
              font-size: 12px;
              text-align: right;
              display: block;
            }
            .products .list {
              margin-top: 15px;
              padding: 0;
              padding-bottom: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
              grid-gap: 15px;
              justify-items: center;
              align-items: center;
            }
            .products .list .product-card-container {
              width: 100%;
              height: 100%;
              padding-left: 15px;
              padding-right: 15px;
            }
            .products .list .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              z-index: 0;
              display: grid;
              grid-template-columns: 1fr 2fr;
              width: 100%;
              height: auto;
              padding-bottom: 15px;
              border-bottom: 1px solid rgba(0, 0, 0, 0.125);
              transition: box-shadow 0.2s ease-out;
            }
            .products .list .product-card-container .product-card:hover {
              box-shadow: var(--box-shadow-up);
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              overflow: hidden;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              height: auto;
              width: 100%;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container {
              padding: 0px 30px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              display: block;
              font-family: var(--molot-font);
              font-size: 24px;
              line-height: 24px;
              color: var(--accent-red);
              margin-bottom: 0px;
              letter-spacing: 0.3px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name::first-word() {
              color: #353535;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              flex-wrap: nowrap;
              margin-bottom: 5px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 13px;
              line-height: 14px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 16px;
              font-weight: 700;
              letter-spacing: -0.6px;
              color: grey;
              display: block;
              line-height: 14px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              line-height: 14px;
              font-size: 14px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 16px;
              font-weight: 700;
              color: grey;
              letter-spacing: -0.6px;
              display: block;
              line-height: 14px;
              margin-bottom: 10px;
            }
            .products-text {
              display: block;
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .products-text .text-wrapper .header-min-colored {
              margin: 0;
            }
            .products-text .text-wrapper .subheading-common {
              margin: 0;
              color: var(--accent-red);
            }
            .products-text .text-wrapper .text {
              font-size: 16px;
              line-height: 21px;
            }
            .promo-projects-product-page {
              margin-top: 15px;
              margin-bottom: 15px;
              padding-bottom: 15px;
            }
            .promo-projects-product-page .section-wrapper .proj-feed {
              display: grid;
              grid-template: 1fr 1fr / 1fr 1fr;
              grid-gap: 30px;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .proj-img {
              box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
              border-radius: var(--border-radius);
              overflow: hidden;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .text-common {
              margin-top: 10px;
              font-size: 18px;
              line-height: 22px;
            }
          }

          @media (min-width: 768px) {
            .products-promo {
              padding-bottom: 30px;
            }
            .products-promo .promo-text-container .header-min-colored {
              display: block;
              margin-bottom: 15px;
              color: white;
              font-size: 47px;
              line-height: 56px;
              text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
            }
            .products-promo .cards-plate {
              margin-top: 30px;
              display: grid;
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 15px;
            }
            .products-promo .cards-plate .card-container .card {
              border-radius: var(--border-radius);
              border: 3px solid white;
              background: none;
              padding: 15px;
              width: 100%;
              height: 100%;
            }
            .products-promo .cards-plate .card-container .card .icon-container {
              margin-bottom: 15px;
            }
            .products-promo
              .cards-plate
              .card-container
              .card
              .text-container
              .card-title {
              font-size: 17px;
              color: white;
              letter-spacing: 1px;
              display: block;
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
              font-family: var(--molot-font), serif;
              margin-bottom: 5px;
            }
            .products-promo
              .cards-plate
              .card-container
              .card
              .text-container
              .card-description {
              display: none;
              font-size: 12px;
              line-height: 15px;
              margin-bottom: 0;
            }

            .products .filter {
              margin-bottom: 30px;
            }
            .products .category-header {
              display: block;
              position: absolute;
              letter-spacing: 1px;
              top: 475px;
              transform: rotate(-90deg);
              left: -72px;
              color: #d5d5d5;
              font-size: 48px;
              line-height: 26px;
            }
            .products .category-list {
              padding: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              margin-top: 0px;
              border-bottom: none;
              position: relative;
            }
            .products .category-list .category-li {
              height: 50px;
              cursor: pointer;
              margin-top: 5px;
              margin-bottom: 5px;
            }
            .products .category-list .category-li:first-child {
              margin-top: 0;
            }
            .products .category-list .category-li .category-link {
              text-align: center;
              line-height: 40px;
              font-weight: 700;
              font-size: 16px;
              color: #313131;
              letter-spacing: 1px;
              text-transform: uppercase;
              transition: all 0.2s;
            }
            .products .category-list .active .category-link {
              color: white;
            }
            .products .plate {
              padding-left: 30px;
              padding-right: 15px;
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-template-rows: 270px;
              grid-auto-rows: auto;
              grid-gap: 20px;
            }
            .products .plate .product-card-container {
              width: 100%;
              height: 100%;
              padding: 0;
            }
            .products .plate .product-card-container .product-card {
              z-index: 0;
              border-radius: var(--border-radius);
              height: 100%;
            }
            .products .plate .product-card-container .product-card:hover {
              box-shadow: var(--box-shadow-up);
            }
            .products
              .plate
              .product-card-container
              .product-card
              .img-container {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 120px;
              width: 100%;
              overflow: hidden;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container {
              height: auto;
              padding: 20px 10px 15px 20px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              display: block;
              font-size: 17px;
              line-height: 18px;
              color: var(--accent-red);
              margin-bottom: 15px;
              font-weight: 700;
              letter-spacing: 0.3px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name::first-word() {
              color: #353535;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              height: auto;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 10px;
              line-height: 11px;
              color: #313131;
              display: block;
              padding-bottom: 0px;
              margin-bottom: 3px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 11px;
              font-weight: 700;
              letter-spacing: -0.6px;
              color: grey;
              display: block;
              line-height: 14px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              line-height: 11px;
              font-size: 10px;
              color: #313131;
              display: block;
              padding-bottom: 0px;
              margin-bottom: 3px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 11px;
              font-weight: 700;
              color: grey;
              letter-spacing: -0.6px;
              display: block;
              line-height: 14px;
              margin-bottom: 0px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-details {
              font-size: 9px;
              text-align: right;
              display: block;
              color: var(--accent-red);
            }
            .products .list {
              margin-top: 0px;
              padding: 0;
              padding-bottom: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
              grid-gap: 8px;
              justify-items: center;
              align-items: center;
            }
            .products .list .product-card-container {
              width: 100%;
              height: 100%;
              padding-left: 15px;
              padding-right: 15px;
            }
            .products .list .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              overflow: hidden;
              z-index: 0;
              display: grid;
              grid-template-columns: 1fr 3fr;
              width: 100%;
              height: auto;
              padding-bottom: 0px;
              border-radius: var(--border-radius);
              border: 1px solid rgba(0, 0, 0, 0.125);
              transition: box-shadow 0.2s ease-out;
            }
            .products .list .product-card-container .product-card:hover {
              box-shadow: var(--box-shadow-up);
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              overflow: hidden;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              height: auto;
              width: 100%;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container {
              padding: 10px 30px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              display: block;
              font-family: var(--molot-font);
              font-size: 24px;
              line-height: 24px;
              color: var(--accent-red);
              margin-bottom: 0px;
              letter-spacing: 0.3px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name::first-word() {
              color: #353535;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              flex-wrap: nowrap;
              margin-bottom: 5px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 12px;
              line-height: 14px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 14px;
              font-weight: 700;
              letter-spacing: -0.6px;
              color: grey;
              display: block;
              line-height: 14px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              line-height: 14px;
              font-size: 12px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 14px;
              font-weight: 700;
              color: grey;
              letter-spacing: -0.6px;
              display: block;
              line-height: 14px;
              margin-bottom: 0px;
            }

            .products-text .text-wrapper .text {
              font-size: 19px;
              line-height: 25px;
              color: var(--accent-grey);
            }

            .promo-projects-product-page {
              margin-top: 30px;
              margin-bottom: 30px;
              padding-bottom: 15px;
            }
            .promo-projects-product-page .section-wrapper .header-min-colored {
              margin-bottom: 15px;
            }
            .promo-projects-product-page .section-wrapper .proj-feed {
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 15px;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .proj-img {
              border-radius: var(--border-radius);
              overflow: hidden;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .text-common {
              margin-top: 10px;
              font-size: 17px;
              line-height: 22px;
            }
          }

          @media (min-width: 992px) {
            .products-promo {
              padding-bottom: 30px;
            }
            .products {
              padding-bottom: 30px;
            }
            .products .category-header {
              letter-spacing: 1px;
              font-size: 48px;
            }
            .products .filter .filter-component {
              box-shadow: none;
              border-radius: 10px;
              padding: 30px 15px 25px;
              margin-bottom: 0px;
              margin-top: 0;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              background-color: #fafafa;
            }
            .products .filter .filter-component .filter-group {
              width: 70%;
            }
            .products .filter .filter-component .filter-group .filter-block {
              margin-left: 90px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--min {
              font-size: 16px;
              position: absolute;
              bottom: -2px;
              left: -74px;
              color: var(--sub-color);
              font-weight: 300;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--min::after {
              content: ' кВт';
              color: var(--sub-color);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--max {
              font-size: 16px;
              position: absolute;
              bottom: -2px;
              right: -90px;
              color: var(--sub-color);
              font-weight: 300;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--max::after {
              content: ' кВт';
              color: var(--sub-color);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background {
              background-color: #fafafa;
              border: 1px solid #dddddd;
              border-radius: 15px;
              height: 22px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__track--active {
              background: rgb(242, 125, 14);
              opacity: 0.3;
              height: 22px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container
              .input-range__label--value {
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              color: var(--accent-red);
              font-weight: 600;
              text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container
              .input-range__slider {
              position: absolute;
              background: var(--accent-red);
              box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
              border-radius: 11px;
              height: 35px;
              position: relative;
              top: 0;
              transform: translateY(42%);
            }
            .products .filter .filter-component .button-group {
              width: auto;
              height: 100%;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              align-items: center;
            }
            .products .filter .filter-component .button-group .view-item {
              z-index: 0;
              display: block;
              position: relative;
              width: 26px;
              height: 28px;
              border: none;
              margin-left: 15px;
              cursor: pointer;
            }
            .products .filter .filter-component .button-group .plate-icon {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block {
              z-index: 1;
              position: absolute;
              display: block;
              width: 4px;
              height: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-1 {
              top: 4px;
              left: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-2 {
              top: 4px;
              left: 50%;
              transform: translateX(-50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-3 {
              top: 4px;
              right: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-4 {
              top: 50%;
              transform: translateY(-50%);
              left: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-5 {
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-6 {
              top: 50%;
              right: 4px;
              transform: translateY(-50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-7 {
              bottom: 4px;
              left: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-8 {
              bottom: 4px;
              left: 50%;
              transform: translateX(-50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .plate-icon
              .block-9 {
              bottom: 4px;
              right: 4px;
            }
            .products .filter .filter-component .button-group .list-icon {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-min {
              z-index: 1;
              position: absolute;
              display: block;
              width: 4px;
              height: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-max {
              z-index: 1;
              position: absolute;
              display: block;
              width: 12px;
              height: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-1 {
              top: 4px;
              left: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-2 {
              top: 50%;
              left: 4px;
              transform: translateY(-50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-3 {
              bottom: 4px;
              left: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-4 {
              top: 4px;
              right: 4px;
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-5 {
              top: 50%;
              right: 4px;
              transform: translateY(-50%);
            }
            .products
              .filter
              .filter-component
              .button-group
              .list-icon
              .block-6 {
              bottom: 4px;
              right: 4px;
            }
            .products .category-list {
              padding: 0;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              margin-top: 0px;
              border-bottom: none;
            }
            .products .category-list .category-li {
              height: 50px;
              cursor: pointer;
              margin: 5px 0px;
              border-radius: 10px;
              border: 1px solid #7b7b7b;
              transition: all 0.2s;
            }
            .products .category-list .category-li .category-link {
              text-align: center;
              background-color: rgba(255, 255, 255, 0.05);
              line-height: 40px;
              font-weight: 500;
              font-size: 16px;
              color: var(--accent-grey);
              letter-spacing: 0.2px;
              text-transform: uppercase;
              transition: all 0.2s;
            }
            .products .category-list .category-li:hover {
              border: 1px solid transparent;
              box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
              background-color: rgba(255, 255, 255, 0.9);
            }
            .products .category-list .category-li:hover .category-link {
              color: var(--accent-grey);
            }
            .products .category-list .active {
              box-shadow: 5px 10px 15px rgba(210, 74, 67, 0.45);
              background-color: var(--accent-red);
              border: none;
            }
            .products .category-list .active .category-link {
              color: white;
            }
            .products .plate {
              display: grid;
              padding-left: 25px;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 270px;
              grid-auto-rows: auto;
              grid-gap: 20px;
            }
            .products .plate .product-card-container {
              width: 100%;
              height: 100%;
              padding: 0;
            }
            .products .list {
              margin-top: 0px;
              padding: 0;
              padding-bottom: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
              grid-gap: 8px;
              justify-items: center;
              align-items: center;
            }
            .products .list .product-card-container {
              width: 100%;
              height: 100%;
              padding-left: 15px;
              padding-right: 15px;
            }
            .products .list .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              overflow: hidden;
              z-index: 0;
              display: grid;
              grid-template-columns: 1fr 5fr;
              width: 100%;
              height: auto;
              padding-bottom: 0px;
              border-radius: var(--border-radius);
              border: 1px solid rgba(0, 0, 0, 0.125);
              transition: box-shadow 0.2s ease-out;
            }
            .products .list .product-card-container .product-card:hover {
              box-shadow: var(--box-shadow-up);
              background-color: #fff;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              overflow: hidden;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              height: auto;
              width: 100%;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container {
              padding: 0px 30px;
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-gap: 15px;
              align-items: center;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              display: block;
              font-family: var(--molot-font);
              font-size: 23px;
              line-height: 24px;
              color: var(--accent-red);
              margin-bottom: 0px;
              letter-spacing: 0.3px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name::first-word() {
              color: #353535;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              flex-wrap: nowrap;
              margin-bottom: 8px;
              margin-top: 8px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 14px;
              line-height: 14px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 16px;
              font-weight: 700;
              letter-spacing: -0.6px;
              color: grey;
              display: block;
              line-height: 14px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              font-size: 14px;
              line-height: 14px;
              color: var(--sub-color);
              display: block;
              padding-bottom: 2px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 16px;
              font-weight: 700;
              color: grey;
              letter-spacing: -0.6px;
              display: block;
              line-height: 14px;
              margin-bottom: 0px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .product-card-details {
              font-size: 12px;
              text-align: right;
              display: none;
              color: var(--accent-red);
            }
            .products-text {
              padding-bottom: 60px;
              padding-top: 60px;
            }
            .products-text .text-wrapper .header-min-colored {
              margin: 0;
            }
            .products-text .text-wrapper .subheading-common {
              margin: 0;
              color: var(--accent-red);
            }
            .products-text .text-wrapper .text {
              margin-top: 19px;
              margin-bottom: 15px;
              line-height: 24px;
            }
            .products-text {
              position: relative;
            }
            .products-text::after {
              display: block;
              position: absolute;
              background: url('/images/IMG_3.jpg') -60px 0 no-repeat;
              background-size: cover;
              content: '';
              top: 0;
              right: -100px;
              height: 95%;
              width: 50%;
              border-radius: 15px;
              box-shadow: -15px 25px 0px rgba(0, 0, 0, 0.125);
              background-color: #fff;
            }
            .products-text .text-wrapper .text {
              font-size: 18px;
              line-height: 24px;
              color: var(--accent-grey);
            }
          }

          @media (min-width: 1200px) {
            .products-promo {
              background: url('/images/products/bg-products.jpg') 50% 0%
                no-repeat;
              background-size: cover;
              padding: 30px;
              border-bottom: 15px solid white;
            }

            .products-promo .promo-text-container {
              display: block;
              height: 100%;
              position: relative;
            }
            .products-promo .promo-text-container .header-min-colored {
              position: absolute;
              display: block;
              width: 770px;
              top: 30px;
              margin-bottom: 15px;
              color: white;
              font-size: 47px;
              line-height: 56px;
              text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.2);
            }
            .products-promo .promo-text-container .text-min-container {
              top: 150px;
              position: absolute;
            }
            .products-promo
              .promo-text-container
              .text-min-container
              .text-min {
              color: rgb(41, 41, 41);
              line-height: 20px;
              font-size: 16px;
              margin-top: 20px;
            }
            .products-promo .cards-plate {
              margin-top: 0px;
              display: grid;
              grid-template: 125px 125px 125px / 330px 330px;
              grid-gap: 15px;
            }
            .products-promo .cards-plate .card-container {
              transition: all 0.15s ease-in-out;
              border-radius: var(--border-radius);
            }
            .products-promo .cards-plate .card-container:hover {
              box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.2);
            }
            .products-promo .cards-plate .card-container:hover .card {
              background: rgba(255, 255, 255, 0.25);
            }
            .products-promo .cards-plate .card-container:active {
              transform: translateY(-10px);
            }
            .products-promo .cards-plate .card-container .card {
              background: rgba(255, 255, 255, 0.05);
              border-radius: var(--border-radius);
              border: 3px solid white;
              background: none;
              padding: 15px;
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: row;
              align-items: center;
            }
            .products-promo .cards-plate .card-container .card .icon-container {
              width: 120px;
              margin-bottom: 0px;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .products-promo .cards-plate .card-container .card .text-container {
              margin-left: 15px;
              padding-left: 15px;
              border-left: 1px solid white;
            }
            .products-promo
              .cards-plate
              .card-container
              .card
              .text-container
              .card-title {
              font-size: 19px;
              color: #fafafa;
              letter-spacing: 2px;
              line-height: 19px;
              display: block;
              text-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
              font-family: var(--molot-font), serif;
              margin-bottom: 5px;
            }
            .products-promo
              .cards-plate
              .card-container
              .card
              .text-container
              .card-description {
              display: block;
              font-size: 14px;
              line-height: 17px;
              margin-bottom: 0;
            }
            .products-promo .cards-plate .container-1 {
              grid-column: 2 / 3;
              grid-row: 1 / 2;
            }
            .products-promo .cards-plate .container-2 {
              grid-column: 2 / 3;
              grid-row: 2 / 3;
            }
            .products-promo .cards-plate .container-3 {
              grid-column: 2 / 3;
              grid-row: 3 / 4;
            }
            .products-promo .cards-plate .container-4 {
              grid-column: 1 / 2;
              grid-row: 3 / 4;
              box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
            }
            .products-promo .cards-plate .container-4 .card {
              background: rgba(255, 255, 255, 0.15);
            }
            .products {
              padding-top: 18px;
            }
            .products .filter .filter-component {
              box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
              border-radius: 10px;
              padding: 20px 15px 17px 25px;
              margin-bottom: 0px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: space-between;
              background-color: #fff;
            }
            .products .filter .filter-component .filter-group {
              display: flex;
              flex-direction: row;
              flex-wrap: nowrap;
              align-items: center;
              width: 100%;
            }
            .products .filter .filter-component .filter-group .text-container {
              display: block;
              padding-right: 25px;
              border-right: 1px solid rgba(0, 0, 0, 0.125);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .text-container
              .filter-text {
              display: block;
              color: var(--sub-color);
              font-weight: 700;
              font-size: 15px;
              line-height: 18px;
              margin-bottom: 0px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .text-container
              .search-text {
              font-size: 12px;
              color: var(--sub-color);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .text-container
              .search-text-value {
              font-size: 12px;
              color: var(--accent-red);
            }
            .products .filter .filter-component .filter-group .filter-block {
              width: 45%;
              margin-left: 110px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--min {
              position: absolute;
              bottom: -2px;
              left: -78px;
              color: var(--sub-color);
              font-weight: 300;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--min::after {
              content: ' кВт';
              color: var(--sub-color);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--max {
              position: absolute;
              bottom: -2px;
              right: -85px;
              color: var(--sub-color);
              font-weight: 300;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__label--max::after {
              content: ' кВт';
              color: var(--sub-color);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background {
              background-color: #fafafa;
              border: 1px solid #dddddd;
              border: none;
              box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.2);
              border-radius: 15px;
              height: 22px;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__track--active {
              background: rgb(231, 172, 117);
              opacity: 1;
              height: 22px;
              box-shadow: inset 1px 1px 1px rgba(255, 255, 255, 0.15),
                inset -1px -1px 1px rgba(0, 0, 0, 0.15),
                1px 1px 1px rgba(0, 0, 0, 0.2);
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container {
              position: relative;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container
              .input-range__label--value {
              position: absolute;
              top: -7px;
              left: 50%;
              transform: translateX(-50%);
              color: var(--accent-red);
              font-weight: 600;
              text-shadow: 3px 3px 2px rgba(0, 0, 0, 0.1);
              text-shadow: none;
            }
            .products
              .filter
              .filter-component
              .filter-group
              .filter-block
              .input-block
              .input-range
              .input-range__track--background
              .input-range__slider-container
              .input-range__slider {
              position: absolute;
              background: var(--accent-red);
              box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
              border-radius: 11px;
              height: 35px;
              position: relative;
              top: 0;
              transform: translateY(42%);
            }
            .products .category-list .category-li {
              height: 50px;
              cursor: pointer;
            }
            .products .category-list .category-li .category-link {
              font-size: 18px;
              letter-spacing: 0.3px;
              text-transform: uppercase;
              transition: text-shadow 0.2s;
            }
            .products .plate {
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 1fr;
              grid-auto-rows: auto;
              grid-gap: 25px;
            }
            .products .plate .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              z-index: 0;
              display: block;
              margin: 0 auto;
              background: #fff;
              width: 100%;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .img-container {
              height: 197px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              max-width: 100%;
              width: auto;
              height: 100%;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container {
              height: 190px;
              padding: 25px 20px 25px 25px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              font-size: 21px;
              line-height: 22px;
              margin-bottom: 15px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              height: auto;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              font-size: 14px;
              line-height: 13px;
              color: #c4c4c4;
              display: block;
              font-weight: 300;
              margin-bottom: 7px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 14px;
              color: var(--accent-grey);
              display: block;
              line-height: 14px;
              margin-bottom: 12px;
              letter-spacing: normal;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              line-height: 13px;
              font-size: 14px;
              color: #c4c4c4;
              font-weight: 300;
              display: block;
              margin-bottom: 7px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 16px;
              font-weight: 700;
              color: var(--accent-grey);
              letter-spacing: normal;
              display: block;
              line-height: 14px;
              margin-bottom: 15px;
            }
            .products
              .plate
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .product-card-details {
              color: var(--accent-red);
              width: 100%;
              font-size: 12px;
              text-align: right;
              display: block;
              font-weight: 700;
            }
            .products .list {
              margin-top: 0px;
              padding: 0;
              padding-bottom: 30px;
              display: grid;
              grid-template-columns: 1fr;
              grid-auto-rows: auto;
              grid-gap: 10px;
              justify-items: center;
              align-items: center;
            }
            .products .list .product-card-container {
              width: 100%;
              height: 100%;
              padding-left: 15px;
              padding-right: 15px;
            }
            .products .list .product-card-container .product-card {
              cursor: pointer;
              position: relative;
              overflow: hidden;
              z-index: 0;
              display: grid;
              grid-template-columns: 1fr 7fr;
              width: 100%;
              height: 100px;
              min-height: 100px;
              padding-bottom: 0px;
              border-radius: var(--border-radius);
              box-shadow: var(--card-shadow);
              border: none;
              transition: box-shadow 0.15s ease-out;
              background-color: #fff;
            }
            .products .list .product-card-container .product-card:hover {
              box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
              background-color: #fff;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container {
              display: flex;
              justify-content: flex-start;
              align-items: flex-start;
              width: 100%;
              height: 100%;
              overflow: hidden;
            }
            .products
              .list
              .product-card-container
              .product-card
              .img-container
              .product-card-img {
              height: auto;
              width: 100%;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container {
              padding: 0px 30px;
              display: grid;
              grid-template-columns: 1fr 3fr;
              grid-gap: 15px;
              align-items: center;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name {
              display: block;
              font-family: var(--noto-font);
              font-size: 18px;
              font-weight: 900;
              line-height: 24px;
              color: var(--accent-grey);
              margin-bottom: 0px;
              letter-spacing: 0px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-top
              .product-name::first-word() {
              color: #353535;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot {
              display: grid;
              grid-template-columns: 2fr 1fr 1fr;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              flex-direction: row;
              flex-wrap: nowrap;
              margin-bottom: 8px;
              margin-top: 8px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor-title {
              display: none;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-motor {
              font-size: 16px;
              font-weight: 300;
              letter-spacing: -0.6px;
              color: grey;
              display: block;
              line-height: 14px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power-title {
              display: none;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .flex-row
              .product-card-power {
              font-size: 16px;
              font-weight: 900;
              color: var(--text);
              letter-spacing: -0.6px;
              display: block;
              line-height: 14px;
              margin-bottom: 0px;
            }
            .products
              .list
              .product-card-container
              .product-card
              .text-container
              .flex-bot
              .product-card-details {
              padding: 10px 15px;
              font-size: 12px;
              line-height: 14px;
              text-align: center;
              display: inline-block;
              color: white;
              background-color: var(--accent-red);
              border-radius: 3px;
            }
            .products-text {
              position: relative;
            }
            .products-text::after {
              display: block;
              position: absolute;
              background: url('/images/IMG_3.jpg') 0 0 no-repeat;
              background-size: cover;
              content: '';
              top: auto;
              bottom: 15px;
              right: -100px;
              height: 80%;
              width: 40%;
              border-radius: 15px;
              box-shadow: -15px 15px 0px rgba(0, 0, 0, 0.125);
              box-shadow: -3px 3px 4px rgba(0, 0, 0, 0.25);
              background-color: #fff;
            }
            .products-text .text-wrapper .text {
              font-size: 17px;
              line-height: 25px;
              color: #313131;
            }
            .promo-projects-product-page {
              margin-top: 30px;
              margin-bottom: 30px;
              padding-bottom: 15px;
            }
            .promo-projects-product-page .section-wrapper .header-min-colored {
              margin-bottom: 15px;
            }
            .promo-projects-product-page .section-wrapper .proj-feed {
              grid-gap: 30px;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card:hover
              .proj-img {
              box-shadow: 0 10px 15px rgba(0, 0, 0, 0.225);
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .proj-img {
              border-radius: 10px;
              overflow: hidden;
              transition: all 0.1s ease-in;
            }
            .promo-projects-product-page
              .section-wrapper
              .proj-feed
              .promoproj-card
              .text-common {
              margin-top: 10px;
              font-size: 18px;
              line-height: 23px;
            }
          }
          @media (min-width: 1500px) {
            .products-text::before {
              display: block;
              position: absolute;
              background: url('/images/IMG_2.jpg') 25% 0 no-repeat;
              background-size: cover;
              content: '';
              top: 0px;
              left: -100px;
              height: 80%;
              width: 18%;
              border-radius: 15px;
              box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
              background-color: #fff;
            }
            .promo-projects-product-page {
              margin-top: 60px;
              margin-bottom: 30px;
              padding-bottom: 15px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ProductsListPlate;
