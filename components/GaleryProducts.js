import React, { Component } from "react";
import Lightbox from "react-image-lightbox";
import "../scss/galery.scss";

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
                src={`../../static/images/products/thumb-${images[0]}`} // /products/
                alt={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`../../static/images/products/thumb-${images[1]}`} // /products/
                alt={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`../../static/images/products/thumb-${images[2]}`} // /products/
                alt={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="img-container">
              <img
                className="detail-img"
                src={`../../static/images/products/thumb-${images[3]}`} // /products/
                alt={product.label}
                onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
              />
            </div>
          </div>
        </div>
        {isOpen && (
          <Lightbox
            mainSrc={`../../static/images/products/${images[photoIndex]}`} // /products/
            nextSrc={`../../static/images/products/${
              // /products/
              images[(photoIndex + 1) % images.length]
            }`}
            prevSrc={`../../static/images/products/${
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
      </div>
    );
  }
}
