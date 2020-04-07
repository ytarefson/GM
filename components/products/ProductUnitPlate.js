import React, { Component } from 'react';
import Link from 'next/link';
import Head from '../../components/head';
import productsList from '../tables/productsList';
import SimilarProducts from '../products/SimilarProducts';
import ProductsBenefits from '../products/ProductsBenefits';
import FormPage from '../form';
import JumboAskForm from '../JumboAskForm';
import GaleryProducts from '../../components/GaleryProducts';
import YoutubeVideo from '../YoutubeVideo';
import news from '../tables/newsList';
import OtherNews from '../../components/news/OtherNews';
import PromoProjects from './PromoProjects';
import Lightbox from 'react-image-lightbox';

export class ProductsUnitPlate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const { id, category } = this.props.data;
    const data = productsList;
    let products = [];
    let product = [];
    const isVideo = false;
    data.map((item) => {
      if (item.category === category) {
        products = item.products;
        products.map((item) => {
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
    products.map((item) => {
      if (item.id !== Number(id)) {
        if (similar.length < 4) {
          similar.push(item);
        }
      }
    });
    return (
      <div itemScope itemType="http://schema.org/Product">
        <Head
          title={`Газопоршневая электростанция ${product.label}`}
          description={`${product.descriptionTwo}`}
        />
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="breadcrumbs">
                <Link href="/">
                  <a className="crambs">Главная > </a>
                </Link>
                <Link href="/products">
                  <a className="crambs">Продукты > </a>
                </Link>
                <span className="crambs cramb-main">{product.label}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid product-unit color-section">
          <div className="border-left" />
          <div className="border-right" />
          <div className="container section-plate">
            <div className="row m-0 pt-4 pb-4">
              <div className="col-12 col-md-7 col-lg-7 col-xl-6 order-md-1 order-2">
                <div className="flex-container">
                  <div className="flex-top">
                    <h1 itemProp="name" className="header-red">
                      Газопоршневая электростанция {product.label}
                    </h1>
                    <div className="product-energy-container">
                      <span className="product-energy">
                        {product.electricPower} кВт
                      </span>
                    </div>
                    <div className="text-container-2">
                      <p className="text-min">Синхронный генератор:</p>
                      <span className="text-min-value">
                        {product.generator}
                      </span>
                    </div>
                    {product.gazLline !== '' && (
                      <div className="text-container-2">
                        <p className="text-min">Газовая линейка:</p>
                        <span className="text-min-value">
                          {product.gazLline}
                        </span>
                      </div>
                    )}
                    <div className="text-container-2">
                      <p className="text-min">Группа охлаждения:</p>
                      <span className="text-min-value">
                        {product.freezGroup}
                      </span>
                    </div>

                    {product.nasos !== '' && (
                      <div className="text-container-2">
                        <p className="text-min">Насосное оборудование:</p>
                        <span className="text-min-value">{product.nasos}</span>
                      </div>
                    )}

                    {product.powerSup !== '' && (
                      <div className="text-container-2">
                        <p className="text-min">Силовое оборудование:</p>
                        <span className="text-min-value">
                          {product.powerSup}
                        </span>
                      </div>
                    )}

                    {product.controlSystem !== '' && (
                      <div className="text-container-2">
                        <p className="text-min">Система управления:</p>
                        <span className="text-min-value">
                          {product.controlSystem}
                        </span>
                      </div>
                    )}

                    {product.price !== '' ? (
                      <div className="text-container-2">
                        <p className="text-min">Цена:</p>
                        <span className="text-min-value text-min-value-price">
                          {product.price} руб.
                        </span>
                      </div>
                    ) : (
                      ''
                    )}
                  </div>
                  <div className="flex-bottom">
                    <div className="button-group">
                      <div className="cta-button-container">
                        <a
                          href="https://gmenergo.bitrix24.ru/pub/form/4_uznayte_vse_podrobnosti_i_usloviya_sotrudnichestva/c1mwzy/"
                          className="cta-button"
                        >
                          Узнайте подробности
                        </a>
                      </div>
                      <p className="arenda-text-min">
                        Оставьте контактную информацию и наши специалисты
                        подробно расскажут об условиях сотрудничества.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-5 col-lg-5 col-xl-5 offset-xl-1 order-md-2 order-1">
                <div className="product-img-container">
                  <img
                    itemProp="image"
                    src={`/images/products/thumb-${product.img}`}
                    alt={product.label}
                    title={product.label}
                    className="product-img"
                    onClick={() => this.setState({ isOpen: true })}
                  />
                  {isOpen && (
                    <Lightbox
                      mainSrc={`/images/products/${product.img}`}
                      onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid description product-unit pt-4 pb-5">
          <div className="mycontainer section-plate">
            <div className="col-12">
              <ProductsBenefits />
              <h4 className="header-min-colored pb-1">
                Описание <span className="dark-color">{product.label}</span>
              </h4>
              <p itemProp="description" className="text text-black">
                {product.descriptionTwo}
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid product-unit pt-4 pb-2 white-section">
          <div className="mycontainer section-plate">
            <div className="col-12">
              <h3 className="header-min-colored pb-1">
                Характеристики{' '}
                <span className="dark-color">{product.label}:</span>{' '}
              </h3>
              <p className="text text-black">{product.descriptionOne}</p>
            </div>
            <div className="row m-0  parametrs-container">
              <div className="col-12 col-xl-8 text-col">
                <div className="text-container mt-3 mt-xl-5">
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
                {product.oilconsumption && product.oilconsumption !== '' && (
                  <div className="text-container">
                    <span className="text-common">Расход масла, кг/час: </span>
                    <span className="text-bold">{product.oilconsumption}</span>
                  </div>
                )}
                {product.airconsumption && product.airconsumption !== '' && (
                  <div className="text-container">
                    <span className="text-common">
                      Расход воздуха, кг/час:{' '}
                    </span>
                    <span className="text-bold">{product.airconsumption}</span>
                  </div>
                )}

                <div className="text-container">
                  <span className="text-common">Уровень шума, Дб: </span>
                  <span className="text-bold">{product.noiseLevel}</span>
                </div>
                {product.serviceInterval !== '' && (
                  <div className="text-container">
                    <span className="text-common">Сервисный интервал: </span>
                    <span className="text-bold">{product.serviceInterval}</span>
                  </div>
                )}
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
              <div className="col-12 col-xl-4 promo-projects">
                <PromoProjects itemsCount={4} />
              </div>
            </div>
          </div>
        </div>
        <JumboAskForm />

        <div className="container-fluid bg-gradient-white pt-2">
          {product.id == 12 && (
            <div className="mycontainer">
              <YoutubeVideo className="myVideo" />
            </div>
          )}
          <SimilarProducts similar={similar} category={category} />
        </div>

        <FormPage product={product.label} />
        <div className="container-fluid">
          <div className="container pl-xl-4 pr-xl-4">
            <OtherNews news={news} />
          </div>
        </div>
        <style jsx global>{`
          .react-fancybox .box {
            position: fixed;
            background-color: rgba(0, 0, 0, 0.4);
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            z-index: 1;
          }

          .react-fancybox .thumbnail img {
            max-width: 600px;
          }

          .react-fancybox .box .image-box {
            padding: 10px;
            background-color: white;
            border-radius: 4px;
            position: relative;
          }

          .react-fancybox .box .image-box .caption {
            text-align: center;
            font-size: 14px;
            margin-top: 7px;
          }

          .react-fancybox .fade-enter {
            animation: fadein 600ms;
          }

          .react-fancybox .fade-leave {
            animation: fadeout 600ms;
          }

          .react-fancybox .close-btn {
            background-color: white;
            width: 25px;
            border-radius: 50%;
            height: 25px;
            position: absolute;
            right: -13px;
            top: -13px;
          }

          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes fadeout {
            from {
              opacity: 1;
            }
            to {
              opacity: 0;
            }
          }

          .product-unit {
            overflow: hidden;
            padding: 0;
          }
          .description {
            background-color: #fafafa;
          }
          .description .benefits-plate {
            margin-bottom: 30px;
            display: grid;
            grid-template: 1fr 1fr 1fr 1fr / 1fr;
            grid-gap: 15px;
          }
          .description .benefits-plate .benefit-card {
            display: flex;
            align-items: center;
            border-radius: var(--border-radius);
            padding: 15px;
            background-color: #fff;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
          }
          .description .benefits-plate .benefit-card .icon-container {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 45px;
            height: 45px;
            margin-right: 15px;
            background-color: var(--accent-red);
            border-radius: 30px;
          }
          .description
            .benefits-plate
            .benefit-card
            .icon-container
            .bene-icon {
            transform: scale(0.75);
            filter: invert(100%);
          }
          .description
            .benefits-plate
            .benefit-card
            .text-container
            .bene-title {
            display: block;
            font-size: 14px;
            line-height: 18px;
            font-weight: 300;
            color: #636363;
          }
          .description
            .benefits-plate
            .benefit-card
            .text-container
            .bene-text {
            display: block;
            color: #4c4c4c;
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 700;
          }

          .section-plate .product-img-container {
            max-width: 100%;
          }
          .section-plate .product-img-container .product-img {
            width: 100%;
          }
          .section-plate .header-red {
            display: block;
            color: var(--text);
            margin-top: 15px;
            margin-bottom: 0px;
          }
          .section-plate .text-container-2 {
            margin-top: 5px;
            margin-bottom: 5px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
          }
          .section-plate .text-container-2 .text-min {
            color: var(--text);
          }
          .section-plate .text-container-2 .text-min-value {
            font-size: 13px;
            color: #2e2e2e;
          }
          .section-plate .text-container-2 .text-min-value-price {
            font-size: 16px;
            letter-spacing: normal;
            font-weight: 900;
          }
          .section-plate .text-black {
            color: #353535;
          }
          .section-plate .product-energy-container {
            display: flex;
            position: relative;
            flex-direction: row-reverse;
            width: 100%;
          }
          .section-plate .product-energy-container::after {
            display: block;
            position: absolute;
            content: '';
            width: 100%;
            height: 1px;
            background-color: var(--sub-color);
            top: 50%;
            z-index: 0;
            transform: translateY(-50%);
          }
          .section-plate .product-energy-container .product-energy {
            font-weight: 900;
            font-size: 13px;
            border-radius: var(--border-radius);
            border: 1px solid var(--sub-color);
            top: 50%;
            display: inline-block;
            z-index: 1;
            color: var(--accent-red);
            margin: 15px 0 15px auto;
            background-color: #fff;
            display: block;
            padding: 4px 15px;
          }
          .section-plate .button-group .cta-button-container {
            margin-top: 30px;
            margin-bottom: 30px;
          }
          .section-plate .button-group .cta-button-container .cta-button {
            display: block;
            margin: 0 auto;
            width: 210px;
            height: 50px;
            border-radius: 2px;
            border: 3px solid var(--accent-red);
            text-align: center;
            color: var(--accent-red);
            font-size: 15px;
            font-weight: 700;
            line-height: 45px;
            transition: all 0.2s ease-out;
          }
          .section-plate .button-group .cta-button-container .cta-button:hover {
            box-shadow: var(--box-shadow);
          }
          .section-plate .button-group .arenda-text-min {
            display: block;
            margin-bottom: 15px;
            font-size: 12px;
            color: #9b9b9b;
          }
          .section-plate .product-img-container {
            border-radius: var(--border-radius);
            box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.25);
            overflow: hidden;
          }
          .section-plate .parametrs-container {
            padding-bottom: 40px;
          }
          .section-plate .parametrs-container .calc-link {
            display: block;
            width: 100%;
            height: 400px;
            background: var(--red-gradient);
          }
          .section-plate .parametrs-container .text-container {
            min-height: 40px;
            height: auto;
            padding-top: 10px;
            padding-bottom: 10px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid lightgrey;
          }
          .section-plate .parametrs-container .text-container .text-common {
            line-height: 20px;
            display: block;
          }
          .section-plate .parametrs-container .text-container .text-bold {
            display: block;
            font-size: 15px;
            line-height: 20px;
            text-align: right;
          }

          .form-bg {
            position: relative;
            padding: 0;
          }

          @media (min-width: 576px) {
            .section-plate .button-group {
              margin-top: 30px;
              display: grid;
              grid-template-columns: 1fr 2fr;
              grid-template-rows: auto;
              grid-gap: 15px;
              align-items: center;
            }
            .section-plate .button-group .cta-button-container {
              margin-top: 0px;
              margin-bottom: 0px;
            }
            .section-plate .button-group .cta-button-container .cta-button {
              display: block;
              margin: 0;
            }
            .section-plate .button-group .arenda-text-min {
              display: block;
              margin-bottom: 0;
              margin-left: 15px;
            }
          }

          @media (min-width: 768px) {
            .color-section .section-plate .header-red {
              margin-top: 0px;
            }
            .color-section .section-plate .product-energy-container {
              margin-top: 8px;
              margin-bottom: 8px;
              display: flex;
              position: relative;
              flex-direction: row-reverse;
              width: 100%;
            }
            .color-section .section-plate .product-energy-container::after {
              display: block;
              position: absolute;
              content: '';
              width: 100%;
              height: 1px;
              top: 50%;
              z-index: 0;
              transform: translateY(-50%);
            }
            .color-section
              .section-plate
              .product-energy-container
              .product-energy {
              margin: 0px 0 0px auto;
            }
            .color-section .section-plate .text-container-2 {
              margin-top: 5px;
              margin-bottom: 5px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            .color-section .section-plate .text-container-2 .text-min {
              color: var(--text);
            }
            .color-section .section-plate .text-container-2 .text-min-value {
              font-size: 16px;
              color: #2e2e2e;
              font-weight: 700;
            }
            .color-section
              .section-plate
              .text-container-2
              .text-min-value-price {
              font-size: 18px;
              letter-spacing: normal;
              font-weight: 900;
              color: var(--sub-color);
            }
            .color-section .section-plate .product-img-container {
              display: flex;
              align-items: center;
            }
            .description .benefits-plate {
              margin-top: -15px;
              grid-template: 1fr 1fr / 1fr 1fr;
            }
          }

          @media (min-width: 992px) {
            .color-section .section-plate .header-red {
              padding-bottom: 3px;
            }
            .color-section .section-plate .text {
              line-height: 24px;
              font-size: 17px;
              font-weight: 300;
            }
            .color-section
              .section-plate
              .product-energy-container
              .product-energy {
              font-size: 18px;
              padding: 5px 15px;
            }

            .section-plate .parametrs-container .text-container {
              padding-top: 15px;
              padding-bottom: 15px;
            }
            .section-plate .parametrs-container .text-container .text-bold {
              font-size: 18px;
            }
          }

          @media (min-width: 1200px) {
            .color-section {
              position: relative;
            }
            .color-section .border-left {
              display: block;
              position: absolute;
              z-index: 1;
              top: 50%;
              left: -60px;
              width: 100px;
              height: 90%;
              transform: translateY(-50%);
              border: 15px solid rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            .color-section .border-right {
              display: block;
              position: absolute;
              z-index: 1;
              top: 50%;
              right: -60px;
              width: 100px;
              height: 90%;
              transform: translateY(-50%);
              border: 15px solid rgba(255, 255, 255, 0.3);
              border-radius: 3px;
            }
            .product-unit {
              height: 100%;
            }

            .product-unit .parametrs-container .text-container {
              margin-right: 30px;
            }
            .product-unit .flex-container {
              height: auto;
              min-height: 100%;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .product-unit .flex-container .flex-top .header-red {
              padding-bottom: 15px;
            }
            .product-unit .flex-container .flex-top .text-container-2 {
              margin-top: 4px;
              margin-bottom: 4px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            }
            .product-unit
              .flex-container
              .flex-top
              .text-container-2
              .text-min {
              color: var(--accent-grey);
              font-weight: 500;
              letter-spacing: normal;
              font-size: 14px;
            }
            .product-unit
              .flex-container
              .flex-top
              .text-container-2
              .text-min-value {
              font-size: 16px;
              color: #2e2e2e;
              font-weight: 700;
            }
            .product-unit
              .flex-container
              .flex-top
              .text-container-2
              .text-min-value-price {
              font-size: 18px;
              letter-spacing: normal;
              font-weight: 700;
              color: var(--sub-color);
            }
            .product-unit .flex-container .flex-top .product-energy-container {
              margin-top: 0px;
              margin-bottom: 15px;
            }
            .product-unit
              .flex-container
              .flex-top
              .product-energy-container
              .product-energy {
              padding: 5px 20px 3px;
              font-weight: 500;
              font-size: 18px;
            }
            .product-unit .flex-container .flex-bottom .button-group {
              margin-top: 30px;
            }
            .product-unit
              .flex-container
              .flex-bottom
              .button-group
              .cta-button-container {
              margin-top: 0;
              margin-bottom: 0;
            }
            .description .benefits-plate {
              margin-bottom: 45px;
              display: grid;
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 15px;
            }
            .description .benefits-plate .benefit-card {
              height: 90px;
              display: flex;
              align-items: center;
              padding: 15px;
              padding-right: 5px;
              box-shadow: none;
              background-color: #fff;
              box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
              border-radius: var(--border-radius);
            }
            .description .benefits-plate .benefit-card .icon-container {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 45px;
              height: 45px;
              margin-right: 15px;
              background-color: var(--accent-red);
              border-radius: 30px;
            }
            .description
              .benefits-plate
              .benefit-card
              .icon-container
              .bene-icon {
              transform: scale(0.75);
              filter: invert(100%);
            }
            .description
              .benefits-plate
              .benefit-card
              .text-container
              .bene-title {
              display: block;
              font-size: 13px;
              line-height: 16px;
              font-weight: 300;
              color: #838383;
            }
            .description
              .benefits-plate
              .benefit-card
              .text-container
              .bene-text {
              margin-top: 3px;
              display: block;
              color: #242424;
              text-transform: uppercase;
              font-size: 16px;
              font-weight: 700;
            }
          }
        `}</style>
      </div>
    );
  }
}
export default ProductsUnitPlate;
