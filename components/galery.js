import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import '../scss/galery.scss';

export default class Galery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const images = this.props.project.project.galery;
    const project = this.props.project.project;
    const { photoIndex, isOpen } = this.state;

    return (
      <div className="container-fluid">
        <div className="mycontainer section-plate galery-plate">
          <span className="header-red header-red-2 pl-3">
            Дополнительные изображения - {project.label}
          </span>
          <div className="galery row m-0">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[0]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[1]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[2]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[3]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 3 })}
                />
              </div>
            </div>
          </div>
        </div>

        {isOpen && (
          <Lightbox
            mainSrc={`../static/images/${images[photoIndex]}`} // /products/
            nextSrc={`../static/images/${
              // /products/
              images[(photoIndex + 1) % images.length]
            }`}
            prevSrc={`../static/images/${
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
