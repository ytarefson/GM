import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

export default class GaleryProducts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const images = this.props.product.galery;
    const product = this.props.product;
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="mycontainer section-plate galery-plate galery-products">
        {/* <span className="header-red header-red-2 pl-3">
          Дополнительные изображения - {product.label}
        </span> */}
        <div className="galery row m-0">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`/images/products/thumb-${images[0]}`} // /products/
                alt={product.label}
                title={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`/images/products/thumb-${images[1]}`} // /products/
                alt={product.label}
                title={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`/images/products/thumb-${images[2]}`} // /products/
                alt={product.label}
                title={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`/images/products/thumb-${images[3]}`} // /products/
                alt={product.label}
                title={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={`/images/products/${images[photoIndex]}`} // /products/
            nextSrc={`/images/products/${
              // /products/
              images[(photoIndex + 1) % images.length]
            }`}
            prevSrc={`/images/products/${
              // /products/
              images[(photoIndex + images.length - 1) % images.length]
            }`}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
        <style jsx>{`
          .galery-plate {
            margin-bottom: 30px;
          }
          .galery-products {
            margin-bottom: 0;
          }
          .galery {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .galery .img-container-plate {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 120px 120px;
            grid-gap: 15px;
          }
          .galery .img-container-plate .img-container {
            margin: 0px;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
          }
          .galery .img-container-plate .img-container .detail-img {
            width: auto;
            height: 100%;
          }

          @media (min-width: 768px) {
            .galery .img-container-plate {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 120px;
              grid-gap: 15px;
            }
          }
          @media (min-width: 992px) {
            .galery .img-container-plate {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 150px;
            }
          }
          @media (min-width: 1200px) {
            .galery .img-container-plate {
              display: grid;
              grid-template-columns: 1fr 1fr 1fr 1fr;
              grid-template-rows: 180px;
              grid-gap: 30px;
            }
          }
        `}</style>
      </div>
    );
  }
}
