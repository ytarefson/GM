import React, { Component } from 'react';
import '../../scss/products/ProductUnitPlate.scss';
import Link from 'next/link';
import Head from '../../components/head';
import productsList from '../tables/productsList';
import SimilarProducts from '../products/SimilarProducts';
import FormPage from '../form';
import JumboAskForm from '../JumboAskForm';
import GaleryProducts from '../../components/GaleryProducts';
import YoutubeVideo from '../YoutubeVideo';
import PromoProjects from './PromoProjects';
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
                    <p className="text-min">
                      Синхронный генератор: <b> {product.generator}</b>
                    </p>
                    {product.gazLline !== '' && (
                      <p className="text-min">
                        Газовая линейка: <b> {product.gazLline}</b>
                      </p>
                    )}
                    <p className="text-min">
                      Группа охлаждения: <b> {product.freezGroup}</b>
                    </p>
                    {product.nasos !== '' && (
                      <p className="text-min">
                        Насосное оборудование: <b> {product.nasos}</b>
                      </p>
                    )}

                    <p className="text-min">
                      Силовое оборудование: <b> {product.powerSup}</b>
                    </p>
                    <p className="text-min">
                      Система управления: <b> {product.controlSystem}</b>
                    </p>
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
                    src={`../../../static/images/products/thumb-${product.img}`}
                    alt={product.label}
                    title={product.label}
                    className="product-img"
                    onClick={() => this.setState({ isOpen: true })}
                  />
                  {isOpen && (
                    <Lightbox
                      mainSrc={`../../static/images/products/${product.img}`}
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
                <div className="text-container mt-3">
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
              <PromoProjects />
            </div>
          </div>
        </div>
        <JumboAskForm />
        <div className="container-fluid usage p-0 pt-4 pb-4">
          <div className="mycontainer section-plate">
            <div className="col">
              <h4 className="header-min-colored pb-1">
                Область использования{' '}
                <span className="dark-color">
                  {' '}
                  газопоршневых электростанций
                </span>
              </h4>
              <p className="text text-black">
                Наши установки могут использоваться в качестве резервного,
                вспомогательного или основного источника электроэнергии в
                автономном режиме или совместно с централизованными системами
                электроснабжения и тепла на:
              </p>
              <ul>
                <li>
                  <span className="text-italic">
                    Промышленных предприятиях,
                  </span>
                </li>
                <li>
                  <span className="text-italic">
                    Буровых платформах, скважинах и шахтах,
                  </span>
                </li>
                <li>
                  <span className="text-italic">Очистных сооружениях,</span>
                </li>
                <li>
                  <span className="text-italic">В строительстве,</span>
                </li>
                <li>
                  <span className="text-italic">
                    Административных и медицинских учереждениях,
                  </span>
                </li>
                <li>
                  <span className="text-italic">
                    Аэропортах, гостиницах, узлах связи, системах
                    жизнеобеспечения и т. п.
                  </span>
                </li>
              </ul>
              <p className="text-bold pt-4 pb-4">
                Газопоршневые электростанции имеют высокий показатель КПД,
                отсутствует влияние на КПД температуры окружающего воздуха,
                меньшее потребление газа по сравнении с микротурбинами,
                соответственно меньше выхлопа в окружающую среду.
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-2">
          {product.id == 12 && (
            <div className="mycontainer">
              <YoutubeVideo className="myVideo" />
            </div>
          )}
          <SimilarProducts similar={similar} category={category} />
        </div>

        <FormPage product={product.label} />
      </div>
    );
  }
}
export default ProductsUnitPlate;
