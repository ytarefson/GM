import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';

const images = ['/images/potential-1.jpg', '/images/potential-2.jpg'];
export class PotencialRynka extends Component {
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
      <div className="container-fluid potencialRynka">
        <div className="mycontainer">
          <h2 className="header-sections">Потенциал Российского рынка</h2>
          {/* <span className="subheading-red-bottom">Новые возможности</span> */}
          <p className="text-min pl-3 pr-3">
            Потенциал Российского рынка малых генерирующих мощностей огромен. Он
            определяется в первую очередь отсутствием реальной конкуренции на
            рынке электроэнергетики. Этот фактор определяет высокую стоимость
            для потребителей электрическая нагрузка которых не превышает 5 МВт.
            Наличие в РФ большого количества организации с потреблением ниже 2
            МВт заставляет эти предприятия искать решения по снижению стоимости
            энергоресурсов.
          </p>
          <p className="text-min pl-3 pr-3">
            Немаловажную роль для крупных предприятий сыграло Постановление
            Правительства РФ №442 от 04.05.2012г., в соответствии с которым они
            получили право на реализацию генерируемой энергии без регистрации в
            качестве сетевой организации. Это позволило снизить собственные
            затраты предприятий при введении генерирующих мощностей при этом
            излишки продать в сеть. В России не мало также энергодефицитных
            районов. Стоимость подключения дополнительных мощностей зачастую
            может достигать значений существенно превышающих внедрения
            оборудования распределенной генерации.{' '}
          </p>
          <div className="row m-0">
            <div className="col-12 col-md-6 order-md-2">
              <div className="img-container">
                <img
                  src="/images/potential-1.jpg"
                  alt="Газопоршневый двигатель Liebherr"
                  title="Газопоршневый двигатель Liebherr"
                  className="potential-pic"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 0 })}
                />
              </div>
            </div>
            <div className="col-12 col-md-6 order-md-2">
              <div className="img-container">
                <img
                  src="/images/potential-2.jpg"
                  alt="Газовый энергоцентр"
                  title="Газовый энергоцентр"
                  className="potential-pic"
                  onClick={() => this.setState({ isOpen: true, photoIndex: 1 })}
                />
              </div>
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={`${images[photoIndex]}`}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
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
        </div>
        <style jsx>{`
          .potencialRynka {
            padding-bottom: 80px;
            margin-top: 80px;
          }
          .potencialRynka .img-container .potential-pic {
            max-width: 100%;
            height: auto;
            margin-top: 80px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
          }
        `}</style>
      </div>
    );
  }
}
export default PotencialRynka;
