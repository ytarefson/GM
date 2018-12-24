import React, { Component } from 'react';
import productsList from '../tables/productsList';
import '../../scss/video.scss';
import { Player } from 'video-react';

import Link from '../Link';

class ProductsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList,
      categorySelected: 'MTU',
      itemsSelected: [
        {
          label: 'MTU 700',
          id: 24,
          img: 'mtu700.jpg',
          as: '/mtu-700',
          motorMark: 'MTU 8V4000 GS L32',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400',
          electricPower: '776',
          thermalPower: '886',
          electricEfficiency: '41,9',
          thermalEfficiency: '46,7',
          overallEfficiency: '88,6',
          fuelType: 'Природный газ ГОСТ 5542-87',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '210',
          noiseLevel: '80',
          serviceInterval: '1 500 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer, Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 800',
          id: 25,
          img: 'mtu800.jpg',
          as: '/mtu-800',
          motorMark: 'MTU 8V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400',
          electricPower: '854',
          thermalPower: '891',
          electricEfficiency: '42,8',
          thermalEfficiency: '44,8',
          overallEfficiency: '87,6',
          fuelType: 'Природный газ ГОСТ 5542-87',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '230',
          noiseLevel: '80',
          serviceInterval: '1 500 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1000',
          id: 26,
          img: 'mtu1000.jpg',
          as: '/mtu-1000',
          motorMark: 'MTU 8V4000 GS L64',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400',
          electricPower: '1013',
          thermalPower: '969',
          electricEfficiency: '43,4',
          thermalEfficiency: '42,6',
          overallEfficiency: '86',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '273',
          noiseLevel: '80',
          serviceInterval: '1 500 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1100',
          id: 27,
          img: 'mtu1100.jpg',
          as: '/mtu-1100',
          motorMark: 'MTU 12V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '1169',
          thermalPower: '1228',
          electricEfficiency: '42,8',
          thermalEfficiency: '45,0',
          overallEfficiency: '87,8',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '330',
          noiseLevel: '80',
          serviceInterval: '800 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1200',
          id: 28,
          img: 'mtu1200.jpg',
          as: '/mtu-1200',
          motorMark: 'MTU 12V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '1286',
          thermalPower: '1323',
          electricEfficiency: '43,2',
          thermalEfficiency: '44,5',
          overallEfficiency: '87,7',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '347',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1500',
          id: 29,
          img: 'mtu1500.jpg',
          as: '/mtu-1500',
          motorMark: 'MTU 12V4000 GS L64',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '1521',
          thermalPower: '1403',
          electricEfficiency: '44,3',
          thermalEfficiency: '40,8',
          overallEfficiency: '85,1',
          fuelType: 'Природный газ ГОСТ 5542-87',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '410',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1600',
          id: 30,
          img: 'mtu1600.jpg',
          as: '/mtu-1600',
          motorMark: 'MTU 16V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '1560',
          thermalPower: '1662',
          electricEfficiency: '42,8',
          thermalEfficiency: '45,6',
          overallEfficiency: '88,4',
          fuelType: 'Природный газ ГОСТ 5542-87',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '420',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 1700',
          id: 31,
          img: 'mtu1700.jpg',
          as: '/mtu-1700',
          motorMark: 'MTU 16V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '1718',
          thermalPower: '1795',
          electricEfficiency: '43',
          thermalEfficiency: '45',
          overallEfficiency: '88',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '464',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 2000',
          id: 32,
          img: 'mtu2000.jpg',
          as: '/mtu-2000',
          motorMark: 'MTU 16V4000 GS L64',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '2028',
          thermalPower: '1901',
          electricEfficiency: '44,3',
          thermalEfficiency: '41,6',
          overallEfficiency: '85,9',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '527',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        },
        {
          label: 'MTU 2020',
          id: 33,
          img: 'mtu2000.jpg',
          as: '/mtu-2000',
          motorMark: 'MTU 20V4000 GS L33',
          gasMixer: '',
          controlBlock: '',
          ignitionSystem: '',
          throttleValve: '',
          excessAirRatio: '',
          voltage: '400, 6300, 10500',
          electricPower: '2145',
          thermalPower: '2239',
          electricEfficiency: '43',
          thermalEfficiency: '44,9',
          overallEfficiency: '87,9',
          fuelType: 'Природный газ',
          methaneNumber: 'Более 80',
          gasPressure: '',
          nominalGazConsumption: '579',
          noiseLevel: '80',
          serviceInterval: '2000 моточасов',
          totalPowerPlant: 'Не менее 15 лет',
          description:
            'Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB.'
        }
      ]
    };
  }

  handleClick(e, category) {
    let itemsSelected = [];
    e.preventDefault();
    for (const productsCategory in this.state.items) {
      if (this.state.items.hasOwnProperty(productsCategory)) {
        const products = this.state.items[productsCategory];
        if (products.category == category) {
          itemsSelected = products.products;
        }
      }
    }
    this.setState({
      categorySelected: category,
      itemsSelected: itemsSelected
    });
  }

  render() {
    const data = this.state.itemsSelected;
    const category = this.state.categorySelected;

    return (
      <div className="mycontainer mt-5">
        <div className="row m-0">
          <div className="col-12 col-md-2">
            <span className="category-header">Бренды:</span>
            <ul className="category-list">
              <li
                className={
                  category == 'MTU' ? 'category-li active' : 'category-li'
                }
              >
                <a
                  onClick={e => this.handleClick(e, 'MTU')}
                  className="category-link"
                >
                  MTU
                </a>
              </li>
              <li
                className={
                  category == 'MAN' ? 'category-li active' : 'category-li'
                }
              >
                <a
                  onClick={e => this.handleClick(e, 'MAN')}
                  className="category-link"
                >
                  MAN
                </a>
              </li>
              <li
                className={
                  category == 'LIEBHERR' ? 'category-li active' : 'category-li'
                }
              >
                <a
                  onClick={e => this.handleClick(e, 'LIEBHERR')}
                  className="category-link"
                >
                  Liebherr
                </a>
              </li>
              <li
                className={
                  category == 'YAMZ' ? 'category-li active' : 'category-li'
                }
              >
                <a
                  onClick={e => this.handleClick(e, 'YAMZ')}
                  className="category-link"
                >
                  ЯМЗ
                </a>
              </li>
            </ul>
          </div>

          <div className="col-12 col-md-10 product-card-plate">
            {data.map(item => (
              <div className="product-card-container" key={item.id}>
                <Link href={`/products/${category}/${item.id}`} key={item.key}>
                  <a className="product-card">
                    <div className="img-container">
                      <img
                        src={`../../static/images/products/thumb-${item.img}`}
                        alt={item.label}
                        className="product-card-img"
                      />
                    </div>
                    <div className="text-container">
                      <div className="flex-top">
                        <span className="product-name">{item.label}</span>
                      </div>
                      <div className="flex-bot">
                        <div className="flex-row">
                          <span className="product-card-motor-title">
                            Двигатель:
                          </span>
                          <span className="product-card-motor pb-1">
                            {item.motorMark}
                          </span>
                        </div>
                        <div className="flex-row">
                          <span className="product-card-power-title">
                            Мощность:
                          </span>
                          <span className="product-card-power">
                            {item.electricPower} кВт
                          </span>
                          <span className="product-card-details">
                            Подробнее...
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        {category == 'LIEBHERR' && (
          <div className="row mt-5 m-0">
            <div className="col-12 col-md-5 offset-md-2">
              <span className="text-bold">Стандарты качества Liebherr</span>
              {/* <Player
                className="myVideo"
                playsInline
                poster="../static/video/lieb-poster-2.jpg"
                src="../../static/video/LIEBUL16_SON_HIGH.wmv"
              /> */}
              <Player
                className="myVideo"
                playsInline
                poster="../static/video/poster.jpg"
                src="../../static/video/kompleks-reprodukcii.mp4"
              />
            </div>
            <div className="col-12 col-md-5">
              <span className="text-bold">Liebherr-500 крупным планом</span>
              {/* <Player
                className="myVideo"
                playsInline
                type="avi"
                poster="../static/video/lieb-poster-1.jpg"
                src="../../static/video/Liebherr-500.avi"
              /> */}
              <Player
                className="myVideo"
                playsInline
                poster="../static/video/poster.jpg"
                src="../../static/video/kompleks-reprodukcii.mp4"
              />
            </div>
          </div>
        )}
        {category == 'MAN' && (
          <div className="row mt-5 m-0">
            <div className="col-12 col-md-6 offset-md-2">
              <span className="text-bold">Liebherr-500 крупным планом</span>
              {/* <Player
                className="myVideo"
                playsInline
                poster="../static/video/lieb-poster-1.jpg"
                src="../../static/video/Liebherr-500.avi"
              /> */}
              <Player
                className="myVideo"
                playsInline
                poster="../static/video/poster.jpg"
                src="../static/video/kompleks-reprodukcii.mp4"
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProductsNew;
