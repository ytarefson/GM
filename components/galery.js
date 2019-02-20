import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

import "../scss/galery.scss";

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
      <div className="container-fluid white-section p-0 pt-3 pb-4">
        <div className="mycontainer section-plate galery-plate">
          <div className="galery row m-0">
            <div className="col-12">
              <h4 className="header-min-colored pb-1">
                Дополнительные изображения -{" "}
                <span className="dark-color">{project.label}</span>
              </h4>
            </div>
            <div className="col-12 img-container-plate">
              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[0]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
                />
              </div>

              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[1]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                />
              </div>

              <div className="img-container">
                <img
                  className="detail-img"
                  src={`../static/images/${images[2]}`} // /products/
                  alt={project.label}
                  onClick={() => this.setState({ isOpen: true, photoIndex: 2 })}
                />
              </div>

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
