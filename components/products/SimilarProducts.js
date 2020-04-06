import React, { Component } from 'react';
import Link from 'next/link';
import productsList from '../tables/productsList';

export class SimilarProducts extends Component {
  render() {
    const similar = this.props.similar;
    const category = this.props.category;

    return (
      <div className="mycontainer section-plate">
        <div className="row">
          <div className="col-12 border-simprod">
            <h4 id="power-header" className="header-min-colored pt-2 pb-1">
              Силовые установки{' '}
              <span className="dark-color">на базе двигателей {category}</span>
            </h4>
            <div className="similar-products">
              {similar.map(({ label, key, id, img }) => (
                <Link href={`/products/${category}/${id}`} key={`${key}+${id}`}>
                  <div className="similar-card-container">
                    <a className="d-block similar-card">
                      <div className="img-container">
                        <img
                          src={`/images/products/${img}`}
                          alt={label}
                          title={label}
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
        <style jsx>{`
          .header-red-2 {
            padding-top: 15px;
            margin-left: 0;
          }
          .similar-products {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr;
            grid-gap: 15px;
            margin: 0;
            margin-bottom: 20px;
            border-radius: 3px;
          }
          .similar-products .similar-card-container .similar-card {
            width: 100%;
            height: 100%;
            max-width: 270px;
            max-height: auto;
            cursor: pointer;
          }
          .similar-products
            .similar-card-container
            .similar-card
            .img-container {
            border-radius: var(--border-radius);
            overflow: hidden;
          }
          .similar-products
            .similar-card-container
            .similar-card
            .img-container
            .similar-card-img {
            width: 100%;
            object-fit: cover;
            height: 100%;
          }
          .similar-products
            .similar-card-container
            .similar-card
            .similar-card-title {
            padding-top: 5px;
            padding-left: 5px;
            padding-right: 5px;
            display: block;
            font-size: 12px;
            font-weight: 700;
            text-align: center;
            line-height: 16px;
          }
          @media (min-width: 576px) {
            .similar-products .similar-card-container .similar-card {
              cursor: pointer;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .similar-card-title {
              padding-top: 8px;
              padding-left: 0px;
              padding-right: 35px;
              display: block;
              font-size: 14px;
              font-weight: 500;
              text-align: left;
              line-height: 18px;
            }
          }

          @media (min-width: 768px) {
            .similar-products {
              margin-bottom: 20px;
              grid-gap: 30px;
            }
            .similar-products .similar-card-container {
              height: auto;
              max-height: auto;
            }
            .similar-products .similar-card-container .similar-card {
              height: auto;
              max-height: auto;
              max-width: 360px;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .img-container
              .similar-card-img {
              width: 100%;
              object-fit: cover;
              height: 100%;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .similar-card-title {
              padding-top: 12px;
              padding-left: 0px;
              padding-right: 65px;
              display: block;
              font-size: 16px;
              font-weight: 500;
              text-align: left;
              line-height: 24px;
            }
          }

          @media (min-width: 992px) {
            .similar-products {
              display: grid;
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 15px;
              margin: 0;
              margin-bottom: 20px;
            }
            .similar-products .similar-card-container .similar-card {
              max-width: 360px;
              cursor: pointer;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .img-container {
              border-radius: 3px;
              max-height: 154px;
              overflow: hidden;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .similar-card-title {
              font-size: 18px;
            }
          }

          @media (min-width: 1200px) {
            #power-header {
              margin-top: 30px;
              padding-left: 15px;
            }
            .bg-gradient-white {
              background: linear-gradient(to bottom, #fff 0%, #fafafa 100%);
            }
            .similar-products {
              margin: 0 15px;
              margin-bottom: 60px;
              grid-gap: 30px;
            }
            .similar-products
              .similar-card-container
              .similar-card:hover
              .img-container {
              box-shadow: 5px 25px 25px -15px rgba(0, 0, 0, 0.35);
            }
            .similar-products
              .similar-card-container
              .similar-card
              .img-container {
              height: 180px;
              border-radius: var(--border-radius);
              overflow: hidden;
              box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.2);
              transition: all 0.1s ease-in;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .img-container
              .similar-card-img {
              width: 100%;
              object-fit: cover;
              height: 100%;
              transition: all 0.2s ease-in;
            }
            .similar-products
              .similar-card-container
              .similar-card
              .similar-card-title {
              display: block;
              font-size: 17px;
              padding-right: 0;
              font-weight: 300;
              line-height: 22px;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default SimilarProducts;
