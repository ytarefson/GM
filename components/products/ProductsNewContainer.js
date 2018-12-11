import React, { Component } from "react";
import productsList from "../tables/productsList";

import Link from "../Link";

class ProductsNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: productsList,
      categorySelected: "MAN",
      itemsSelected: [
        {
          label: "MAN 200",
          id: 0,
          img: "MAN200.jpg",
          as: "/man-200",
          motorMark: "MAN E 3262 E 302",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1",
          voltage: "400",
          electricPower: "200",
          thermalPower: "316",
          electricEfficiency: "36,7",
          thermalEfficiency: "56,3",
          overallEfficiency: "93",
          fuelType:
            "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "59.6",
          noiseLevel: "80",
          serviceInterval: "1 500 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
        },
        {
          label: "MAN 250",
          id: 1,
          img: "MAN250.jpg",
          as: "/man-250",
          motorMark: "MAN E 3262 E 302",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1",
          voltage: "400",
          electricPower: "250",
          thermalPower: "380",
          electricEfficiency: "38",
          thermalEfficiency: "54,8",
          overallEfficiency: "92,8",
          fuelType:
            "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "67",
          noiseLevel: "80",
          serviceInterval: "1 500 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
        },
        {
          label: "MAN 300",
          id: 2,
          img: "MAN300.jpg",
          as: "/man-300",
          motorMark: "MAN E 3268 LE 242",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1,7",
          voltage: "400",
          electricPower: "350",
          thermalPower: "320",
          electricEfficiency: "41,7",
          thermalEfficiency: "47,5",
          overallEfficiency: "89,2",
          fuelType: "Природный газ",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "78",
          noiseLevel: "80",
          serviceInterval: "1 000 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
        },
        {
          label: "MAN 350",
          id: 3,
          img: "MAN350.jpg",
          as: "/man-350",
          motorMark: "MAN E 3268 LE 202",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1,69",
          voltage: "400",
          electricPower: "350",
          thermalPower: "445",
          electricEfficiency: "40,2",
          thermalEfficiency: "50,1",
          overallEfficiency: "90,3",
          fuelType: "Природный газ",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "91",
          noiseLevel: "80",
          serviceInterval: "1 000 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
        },
        {
          label: "MAN 430",
          id: 4,
          img: "MAN500.jpg",
          as: "/man-430",
          motorMark: "MAN E3262 LE232",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1,6",
          voltage: "400",
          electricPower: "430",
          thermalPower: "505",
          electricEfficiency: "39,7",
          thermalEfficiency: "50,6",
          overallEfficiency: "90,3",
          fuelType: "Природный газ",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "107",
          noiseLevel: "80",
          serviceInterval: "1 000 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
        },
        {
          label: "MAN 530",
          id: 5,
          img: "MAN500.jpg",
          as: "/man-500",
          motorMark: "MAN E3262 LE 202",
          gasMixer: "Motortech VariFuel2",
          controlBlock: "Motortech VariStep3",
          ignitionSystem: "Motortech MIC4",
          throttleValve: "Motortech ITB",
          excessAirRatio: "1,63",
          voltage: "400, 6 300, 10 500",
          electricPower: "500",
          thermalPower: "652",
          electricEfficiency: "40,6",
          thermalEfficiency: "49,8",
          overallEfficiency: "90,4",
          fuelType:
            "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
          methaneNumber: "Более 80",
          gasPressure: "0,05",
          nominalGazConsumption: "135",
          noiseLevel: "80",
          serviceInterval: "1 000 моточасов",
          totalPowerPlant: "Не менее 15",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur."
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
              <li className="category-li">
                <a
                  onClick={e => this.handleClick(e, "MAN")}
                  className="category-link"
                >
                  MAN
                </a>
              </li>
              <li className="category-li">
                <a
                  onClick={e => this.handleClick(e, "LIEBHERR")}
                  className="category-link"
                >
                  Liebherr
                </a>
              </li>
              <li className="category-li">
                <a
                  onClick={e => this.handleClick(e, "YAMZ")}
                  className="category-link"
                >
                  ЯМЗ
                </a>
              </li>
              <li className="category-li">
                <a
                  onClick={e => this.handleClick(e, "MTU")}
                  className="category-link"
                >
                  MTU
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
                        src={`../../static/images/products/${item.img}`}
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
      </div>
    );
  }
}

export default ProductsNew;
