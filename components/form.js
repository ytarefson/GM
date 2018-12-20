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
        <div className="form-group row m-0">
          <div className="col-12 col-md-6 p-0 colform">
            <div className="form-context">
              {/* <label className="text-common" htmlFor="userEmail">
              Введите e-mail:{' '}
						</label> */}
              <p className="text-common form-cta-title">
                Заинтересовал продукт или услуга ?
              </p>
              <p className="text-common form-cta-text">
                оставьте Ваши контакты, и наши специалисты проконсультируют вас
                в удобное время!
              </p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-4 p-0 colform">
            <input
              onChange={this.handleChange}
              type="email"
              className="userEmail text-common"
              id="userEmail"
              aria-describedby="emailHelp"
              placeholder="Введите e-mail:"
            />
            <input
              type="datetime-local"
              className="callTime"
              id="callTime"
              placeholder="Введите время удобное для связи"
            />
            <button className="form-button">Заказать консультацию</button>
            <p className="form-cta-text-2">
              или свяжитесь с нами любым удобным способом
            </p>
          </div>
        </div>
      </form>
    );
  }
}

export default FormPage;
