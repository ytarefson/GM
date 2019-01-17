import React, { Component } from 'react';
import Link from 'next/link';
import Head from '../../components/head';
import productsList from '../tables/productsList';
import SimilarProducts from '../products/SimilarProducts';
import '../../scss/products/ProductUnitPlate.scss';
import FormPage from '../form';
import GaleryProducts from '../../components/GaleryProducts';
import YoutubeVideo from '../YoutubeVideo';
import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';

export class ProductsUnitPlate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { id, category } = this.props.data.data;
    const data = productsList;
    let products = [];
    let product = [];
    const isVideo = false;
    data.map(item => {
      if (item.category === category) {
        products = item.products;
        products.map(item => {
          if (item.id === Number(id)) {
            product = item;
          }
        });
      }
    });
    if (product.id == 7) {
      isVideo = true;
    }
    let similar = [];
    products.map(item => {
      if (item.id !== Number(id)) {
        if (similar.length < 4) {
          similar.push(item);
        }
      }
    });
    return (
      <div>
        <Head
          title={`Продукт - ${product.label}`}
          description="Лучший продукт"
        />
        <div className="container-fluid product-unit">
          <div className="mycontainer section-plate">
            <div className="breadcrumbs">
              <Link href="/">
                <a className="crambs">Главная > </a>
              </Link>
              <Link href="/products">
                <a className="crambs">Продукты > </a>
              </Link>
              <Link href={`/products?category=${category}`}>
                <a className="crambs">{category} > </a>
              </Link>
              <span className="crambs cramb-main">{product.label}</span>
            </div>
          </div>
          <div className="mycontainer section-plate">
            <div className="row m-0 pt-3 pb-3">
              <div className="col-12 col-md-8 order-md-1 order-2">
                <h2 className="header-red">Описание {product.label}</h2>
                <span className="product-energy">
                  Мощность: {product.electricPower} кВт
                </span>
                <p className="text-min">{product.description}</p>
              </div>

              <div className="col-12 col-md-4 order-md-2 order-1">
                <div className="product-img-container">
                  <img
                    src={`../../../static/images/products/thumb-${product.img}`}
                    alt={product.label}
                    className="product-img"
                    onClick={() => this.setState({ isOpen: true })}
                  />
                  {isOpen && (
                    <Lightbox
                      mainSrc={`../../static/images/products/${product.img}`}
                      // nextSrc={images[(photoIndex + 1) % images.length]}
                      // prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                      // onMovePrevRequest={() =>
                      //   this.setState({
                      //     photoIndex: (photoIndex + images.length - 1) % images.length
                      //   })
                      // }
                      // onMoveNextRequest={() =>
                      //   this.setState({
                      //     photoIndex: (photoIndex + 1) % images.length
                      //   })
                      // }
                    />
                  )}
                </div>
              </div>
              <div className="col-12 order-3">
                <p className="text-min">{product.descriptionOne}</p>
                <p className="text-min">{product.descriptionTwo}</p>
                <p className="text-min">{product.descriptionThree}</p>
              </div>
            </div>
          </div>
          <GaleryProducts product={product} />
          <div className="mycontainer section-plate">
            <h3 className="header-red pl-3">Характеристики {product.label}:</h3>
            <div className="row m-0 parametrs-container">
              <div className="col-12 col-xl-8 text-col">
                <div className="text-container">
                  <span className="text-common">Марка двигателя: </span>
                  <span className="text-bold">{product.motorMark}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">
                    Электрическая мощность, кВт:{' '}
                  </span>
                  <span className="text-bold">{product.electricPower}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">Тепловая мощность, кВт: </span>
                  <span className="text-bold">{product.thermalPower}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">КПД электрический, %: </span>
                  <span className="text-bold">
                    {product.electricEfficiency}
                  </span>
                </div>
                <div className="text-container">
                  <span className="text-common">КПД тепловой, %: </span>
                  <span className="text-bold">{product.thermalEfficiency}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">КПД общий, %: </span>
                  <span className="text-bold">{product.overallEfficiency}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">Тип топлива: </span>
                  <span className="text-bold">{product.fuelType}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">Метановое число: </span>
                  <span className="text-bold">{product.methaneNumber}</span>
                </div>
                {}
                {product.gasPressure !== '' && (
                  <div className="text-container">
                    <span className="text-common">
                      Давление газа, кгс/см2:{' '}
                    </span>
                    <span className="text-bold">{product.gasPressure}</span>
                  </div>
                )}
                <div className="text-container">
                  <span className="text-common">
                    Расход газа в номинальном режиме, нм3/час:{' '}
                  </span>
                  <span className="text-bold">
                    {product.nominalGazConsumption}
                  </span>
                </div>
                <div className="text-container">
                  <span className="text-common">Уровень шума, Дб: </span>
                  <span className="text-bold">{product.noiseLevel}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">Сервисный интервал: </span>
                  <span className="text-bold">{product.serviceInterval}</span>
                </div>
                <div className="text-container">
                  <span className="text-common">
                    Общий ресурс электростанции:{' '}
                  </span>
                  <span className="text-bold">{product.totalPowerPlant}</span>
                </div>
                {product.gasMixer !== '' && (
                  <div className="text-container">
                    <span className="text-common">
                      Газовоздушный смеситель:{' '}
                    </span>
                    <span className="text-bold">{product.gasMixer}</span>
                  </div>
                )}
                {product.controlBlock !== '' && (
                  <div className="text-container">
                    <span className="text-common">Блок управления: </span>
                    <span className="text-bold">{product.controlBlock}</span>
                  </div>
                )}
                {product.ignitionSystem !== '' && (
                  <div className="text-container">
                    <span className="text-common">Система зажигания: </span>
                    <span className="text-bold">{product.ignitionSystem}</span>
                  </div>
                )}
                {product.throttleValve !== '' && (
                  <div className="text-container">
                    <span className="text-common">Дроссельная заслонка: </span>
                    <span className="text-bold">{product.throttleValve}</span>
                  </div>
                )}
                {product.excessAirRatio !== '' && (
                  <div className="text-container">
                    <span className="text-common">
                      Коэффициент избытка воздуха, λ:{' '}
                    </span>
                    <span className="text-bold">{product.excessAirRatio}</span>
                  </div>
                )}
                <div className="text-container">
                  <span className="text-common">Напряжение, В</span>
                  <span className="text-bold">{product.voltage}</span>
                </div>
              </div>
              <div className="col-12 col-xl-4 calc-link d-none" />
            </div>
          </div>
          {product.id == 12 && (
            <div className="mycontainer">
              <YoutubeVideo className="myVideo" />
            </div>
          )}
          <div className="mycontainer section-plate p-0">
            <FormPage product={product.label} />
          </div>
          <SimilarProducts similar={similar} category={category} />
        </div>
      </div>
    );
  }
}
export default ProductsUnitPlate;
