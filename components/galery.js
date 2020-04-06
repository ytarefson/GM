import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const images = this.props.project.galery;
    const project = this.props.project;
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="container-fluid white-section p-0 pt-3 pb-4">
        <div className="mycontainer section-plate galery-plate">
          <div className="galery row m-0">
            <div className="col-12">
              <h4 className="header-min-colored pb-1">
                Дополнительные изображения -{' '}
                <span className="dark-color">{project.label}</span>
              </h4>
            </div>
            <div className="col-12 img-container-plate">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`/images/${images[0]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
                  title={project.label}
                />
              </div>

              <div className="img-container">
                <img
                  className="detail-img"
                  src={`/images/${images[1]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                  title={project.label}
                />
              </div>

              <div className="img-container">
                <img
                  className="detail-img"
                  src={`/images/${images[2]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
                  title={project.label}
                />
              </div>

              <div className="img-container">
                <img
                  className="detail-img"
                  src={`/images/${images[3]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
                  title={project.label}
                />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={`/images/${images[photoIndex]}`} // /products/
            nextSrc={`/images/${
              // /products/
              images[(photoIndex + 1) % images.length]
            }`}
            prevSrc={`/images/${
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

export default Galery;
