import React, { Component } from "react";
import Lightbox from "react-image-lightbox";

export class AboutTechnology2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }
  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <div className="container-fluid aboutTechnology">
        <div className="mycontainer">
          <div className="row m-0">
            <div className="col-12 col-md-6">
              <div className="img-container">
                <img
                  src="../../static/images/about-tech-2.jpg"
                  alt="Малая энергетика"
                  className="about-tech-pic"
                  onClick={() => this.setState({ isOpen: true })}
                />
                {isOpen && (
                  <Lightbox
                    mainSrc={`../../static/images/about-tech-2.jpg`}
                    onCloseRequest={() => this.setState({ isOpen: false })}
                  />
                )}
              </div>
            </div>
            <div className="col-12 col-md-6 tm-cont">
              <p className="text-min">
                Развитие технологий существенно повысило производительность
                труда и энергетическую эффективность оборудования, используемую
                при производстве той или иной продукции. В экономике появилось
                множество предприятий малого бизнеса. Использование
                электроэнергии крупной генерации для многих предприятий стало
                нецелесообразным ввиду большой удаленности, необходимости
                резервирования мощностей при высоких колебаниях потребления.
                Проще говоря, большая генерация не способна обеспечивать
                необходимую гибкость ,что приводит в конечном итоге к высокой
                стоимости энергетических ресурсов, поставляемых на предприятия.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AboutTechnology2;
