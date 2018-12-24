import React, { Component } from 'react';
import Link from '../Link';

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.data
    };
  }
  render() {
    const data = this.props.data;
    return (
      <div>
        {data.map(item => {
          <h2>{item.label}</h2>;
        })}
      </div>
    );
  }
}
