import React from "react";
import "../scss/form.scss";
import Router from "next/router";

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: "",
      userPhone: "",
      isEmailEmpty: true,
      isPhoneEmpty: true,
      isFormFullfiled: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch("../../api/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        product: this.props.product,
        phone: this.state.userPhone
      })
    }).then(res => Router.push("/confirm-email"));
  }

  handleChangeEmail(e) {
    this.setState({ userEmail: e.target.value });
  }
  handleChangePhone(e) {
    this.setState({ userPhone: e.target.value });
  }

  render() {
    const product = this.props.product;
    return (
      <div class="container-fluid form-bg">
        <div className="mycontainer section-plate mt-5 p-0">
          <form className="forma" onSubmit={this.handleSubmit}>
            <div className="form-group row m-0">
              <div className="col-12 col-md-6 col-xl-5 p-0 colform">
                <div className="form-context">
                  {/* <label className="text-common" htmlFor="userEmail">
              Введите e-mail:{' '}
						</label> */}
                  <p className="text-common form-cta-title">
                    Заинтересовал продукт или услуга?
                  </p>
                  <p className="text-common form-cta-text">
                    оставьте Ваши контакты, и наши специалисты проконсультируют
                    вас в удобное время!
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-xl-7 p-0 colform">
                <input
                  onChange={this.handleChangeEmail}
                  type="email"
                  className="userEmail text-common"
                  id="userEmail"
                  aria-describedby="emailHelp"
                  placeholder="Введите e-mail:"
                  required
                />
                <input
                  onChange={this.handleChangePhone}
                  type="phone"
                  className="userEmail text-common"
                  id="userPhone"
                  aria-describedby="phoneHelp"
                  placeholder="Введите номер для связи:"
                  required
                />

                {/* <input
              type="datetime-local"
              className="callTime"
              id="callTime"
              placeholder="Введите время удобное для связи"
            /> */}
                <button className="form-button">Заказать консультацию</button>
                <p className="form-cta-text-2">
                  или свяжитесь с нами любым удобным способом
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default FormPage;
