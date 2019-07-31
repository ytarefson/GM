import '../../scss/filter.scss';
import React, { Component } from 'react';
import InputRange from 'react-input-range';
import PropTypes from 'prop-types';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: { min: 100, max: 4000 }
    };
    this.onChangeHandle = this.onChangeHandle.bind(this);
  }
  onChangeHandle(value) {
    this.props.onFilterChange(this.state.value.min, this.state.value.max);
    this.setState({ value });
  }
  render() {
    const { foundItems } = this.props;
    return (
      <>
        <div className="text-container">
          <span className="filter-text">Выбор диапазона мощности</span>
          {/* <span className="search-text">Найдено: </span>
          <span className="search-text-value">{foundItems}</span> */}
        </div>
        <div className="filter-block">
          <div className="input-block">
            <InputRange
              maxValue={5000}
              minValue={100}
              step={100}
              value={this.state.value}
              onChange={value => this.onChangeHandle(value)}
              draggableTrack={true}
            />
          </div>
        </div>
      </>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  foundItems: PropTypes.number.isRequired
};
export default Filter;
