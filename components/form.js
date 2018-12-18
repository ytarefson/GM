import React from "react";
import "../scss/form.scss";

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("../../test/testEmail", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
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
      <form className="forma" onSubmit={this.handleSubmit}>
        <p className="text-common form-cta-text">
          Заинтересовал продукт? Оставьте Ваши контакты, и наши специалисты
          проконсультируют вас в удобное время!
        </p>
        <div className="form-group row m-0">
          <div className="col-12 col-md-6">
            <div className="form-context ">
              {/* <label className="text-common" htmlFor="userEmail">
              Введите e-mail:{' '}
            </label> */}
              <input
                onChange={this.handleChange}
                type="email"
                className="userEmail text-common"
                id="userEmail"
                aria-describedby="emailHelp"
                placeholder="Введите e-mail:"
              />
              <input type="datetime-local" className="callTime" id="callTime" />
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <button className="form-button">
              Заказать бесплатную консультацию
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default FormPage;
