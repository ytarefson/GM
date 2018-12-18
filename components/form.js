import React from 'react';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('../../test/testEmail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.value,
        product: this.props.product
      })
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    const product = this.props.product;
    console.log(product);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="userEmail">Введите e-mail: </label>
          <input
            onChange={this.handleChange}
            type="email"
            className="userEmail"
            id="userEmail"
            aria-describedby="emailHelp"
            placeholder="Введите e-mail:"
          />
        </div>
        <button>Заказать бесплатную консультацию</button>
      </form>
    );
  }
}

export default FormPage;
