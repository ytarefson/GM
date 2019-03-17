import React from 'react';
import '../scss/form.scss';
import Router from 'next/router';
import PropTypes from 'prop-types';

class FormPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPhone: '',
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

    fetch('../../api/email', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.userEmail,
        product: this.props.product,
        phone: this.state.userPhone
      })
    }).then(res => Router.push('/confirm-email'));
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
      <div className="container-fluid form-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <form className="forma" onSubmit={this.handleSubmit}>
                <div className="dots-left" />
                <div className="form-group">
                  <div className="form-left colform">
                    <div className="form-context">
                      <p className="text-common form-cta-title">
                        Заинтересовал продукт или услуга?
                      </p>
                      <p className="text-common form-cta-text">
                        оставьте Ваши контакты, и наши специалисты
                        проконсультируют вас в удобное время!
                      </p>
                    </div>
                  </div>
                  <div className="form-right colform">
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

                    <button className="form-button">
                      Заказать консультацию
                    </button>
                    <p className="form-cta-text-2">
                      или свяжитесь с нами любым удобным способом
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FormPage.defaultProps = {
  product: ''
};
FormPage.propTypes = {
  product: PropTypes.string.isRequired
};

export default FormPage;
