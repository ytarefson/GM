import React, { Component } from "react";
import PropTypes from "prop-types";
import ProductItems from "./ProductItems";

class ProductsPlate extends Component {
  render() {
    const { brand, minValue, maxValue, data, view } = this.props;

    // Формирование начального массива продуктов по бренду
    let productItems = [];
    // Если все - то добавляем все продукты в массив
    if (brand == "ALL") {
      data.map(category => {
        category.map(item => {
          productItems.push(item);
        });
      });
    } else {
      // Иначе копируем продукты из пропсов
      productItems = data;
    }

    // Работа с фильтром
    const result = productItems.filter(
      item => item.electricPower <= maxValue && item.electricPower >= minValue
    );
    result.sort(function(a, b) {
      return a.electricPower - b.electricPower;
    });

    return <ProductItems data={result} view={view} />;
  }
}

ProductsPlate.propTypes = {
  brand: PropTypes.string.isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
  data: PropTypes.array.isRequired,
  view: PropTypes.string
};

ProductsPlate.defaultProps = {
  minValue: 100,
  maxValue: 4000,
  view: "list"
};

export default ProductsPlate;
