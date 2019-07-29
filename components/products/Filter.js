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
    return (
      <div className="container-fluid">
        <div className="container">
          <InputRange
            maxValue={5000}
            minValue={0}
            step={100}
            value={this.state.value}
            onChange={value => this.onChangeHandle(value)}
            draggableTrack={true}
          />
        </div>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired
};
export default Filter;
