import React from 'react';
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

    fetch('/api/email', {
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
                      <p className="form-cta-text-2">
                        Cвяжитесь с нами любым удобным способом
                      </p>
                    </div>
                  </div>
                  <div className="form-mid colform">
                    <p className="text-common form-text-or">ИЛИ</p>
                  </div>
                  <div className="form-right colform">
                    <p className="text-common form-cta-text-2 form-cta-text-22 mb-3">
                      Заполните форму и наши специалисты свяжутся с вами!
                    </p>
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
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <style jsx>{`
          .form-bg {
            margin-top: 30px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .forma {
            padding: 15px 30px 30px 30px;
            margin-bottom: 30px;
            border-radius: var(--border-radius);
            background: linear-gradient(
              to bottom,
              #fafafa 0%,
              #fff 20%,
              #fff 80%,
              #fafafa 100%
            );
            border: 1px solid #dcdcdc;
          }
          .forma .form-group {
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            margin-bottom: 0;
          }
          .forma .form-group .colform {
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .forma .form-group .colform .form-text-or {
            display: block;
            font-family: var(--molot-font);
            color: var(--accent-dark);
            letter-spacing: 1px;
            font-size: 24px;
            text-align: center;
            position: relative;
          }
          .forma .form-group .colform .form-text-or::after {
            position: absolute;
            content: '';
            width: 45%;
            right: -30px;
            top: 50%;
            transform: translateY(-50%) rotate(0deg);
            height: 2px;
            background-color: var(--wall-color);
          }
          .forma .form-group .colform .form-text-or::before {
            position: absolute;
            content: '';
            width: 45%;
            left: -30px;
            top: 50%;
            transform: translateY(-50%) rotate(0deg);
            height: 2px;
            background-color: var(--wall-color);
          }
          .forma .form-group .colform .form-context .form-cta-title {
            font-family: var(--molot-font);
            font-weight: 700;
            font-size: 24px;
            line-height: 30px;
            color: var(--accent-dark);
            padding-bottom: 15px;
          }
          .forma .form-group .colform .userEmail {
            display: block;
            border-radius: 50px;
            padding-left: 15px;
            width: 100%;
            font-size: 14px;
            height: 40px;
            margin-bottom: 15px;
            background-color: #e6e6e6;
            border: none;
          }
          .forma .form-group .colform .form-button {
            display: block;
            border-radius: 50px;
            color: #fff;
            font-family: var(--molot-font);
            background-color: var(--accent-red);
            border: none;
            padding: 10px 15px;
            letter-spacing: 1px;
            margin: 15px auto 0;
            box-shadow: var(--box-shadow);
            font-size: 15px;
            transition: all 0.2s ease-in;
          }
          .forma .form-group .colform .form-button:hover {
            cursor: pointer;
            box-shadow: var(--box-shadow-up);
          }
          .forma .form-group .colform .form-cta-text-2 {
            font-size: 16px;
            font-weight: 500;
            line-height: 20px;
            color: var(--sub-color);
          }
          @media (min-width: 576px) {
            .forma {
              padding: 15px 30px 30px 30px;
              margin-bottom: 60px;
              border-radius: var(--border-radius);
            }
            .forma .form-group {
              display: grid;
              grid-template-columns: 1fr;
              grid-template-rows: auto auto auto;
              margin-bottom: 0;
            }
            .forma .form-group .colform {
              margin-top: 15px;
              margin-bottom: 15px;
            }
            .forma .form-group .colform .form-text-or {
              display: block;
              font-family: var(--molot-font);
              letter-spacing: 1px;
              font-size: 34px;
              text-align: center;
              position: relative;
            }
            .forma .form-group .colform .form-text-or::after {
              position: absolute;
              content: '';
              width: 45%;
              right: -30px;
              top: 50%;
              transform: translateY(-50%) rotate(0deg);
              height: 2px;
            }
            .forma .form-group .colform .form-text-or::before {
              position: absolute;
              content: '';
              width: 45%;
              left: -30px;
              top: 50%;
              transform: translateY(-50%) rotate(0deg);
              height: 2px;
            }
            .forma .form-group .colform .form-context .form-cta-title {
              font-family: var(--molot-font);
              font-weight: 700;
              font-size: 34px;
              line-height: 34px;
            }
            .forma .form-group .colform .userEmail {
              margin-bottom: 20px;
              height: 45px;
            }
            .forma .form-group .colform .form-button {
              display: block;
              border-radius: 50px;
              color: #fff;
              font-family: var(--molot-font);
              background-color: var(--accent-red);
              border: none;
              padding: 15px 30px;
              letter-spacing: 1px;
              margin: 15px auto 0;
              box-shadow: var(--box-shadow);
              font-size: 15px;
              transition: all 0.2s ease-in;
            }
            .forma .form-group .colform .form-cta-text-2 {
              font-size: 18px;
              padding-right: 80px;
              line-height: 22px;
              font-weight: 700;
            }
          }

          @media (min-width: 768px) {
            .forma {
              padding: 30px;
            }
            .forma .form-group {
              display: grid;
              grid-gap: 0px;
              grid-template-columns: 10fr 1fr 10fr;
              grid-template-rows: auto;
            }
            .forma .form-group .form-mid {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .forma .form-group .form-mid .form-text-or {
              display: block;
              font-family: var(--molot-font);
              letter-spacing: 1px;
              font-size: 36px;
              text-align: center;
              align-self: center;
              position: relative;
            }
            .forma .form-group .form-mid .form-text-or::after {
              display: none;
              position: absolute;
              content: '';
              width: 2px;
              height: 180px;
              top: -120px;
              left: 50%;
            }
            .forma .form-group .form-mid .form-text-or::before {
              display: none;
            }
            .forma .form-group .colform .form-context .form-cta-title {
              font-weight: 700;
              font-size: 36px;
              line-height: 40px;
              padding-bottom: 15px;
              margin-bottom: 20px;
            }
            .forma .form-group .colform .userEmail {
              display: block;
              padding-left: 15px;
              width: 230px;
              margin: 0 auto 20px;
            }
            .forma .form-group .colform .callTime {
              display: block;
              border-radius: 30px;
              padding-left: 15px;
              width: 230px;
              height: 42px;
              margin: 0 auto 20px;
            }
            .forma .form-group .colform .form-button {
              display: block;
              border-radius: 50px;
              border: none;
              padding: 15px 20px;
              margin: 0 auto 20px;
              box-shadow: var(--box-shadow-up);
              transition: all 0.2s;
            }
            .forma .form-group .colform .form-button:hover {
              cursor: pointer;
              box-shadow: var(--box-shadow);
            }
            .forma .form-group .colform .form-cta-text-2 {
              font-size: 17px;
              line-height: 20px;
              padding-right: 0;
            }
            .forma .form-group .colform .form-cta-text-22 {
              text-align: center;
              padding-right: 20px;
              padding-left: 20px;
            }
          }

          @media (min-width: 992px) {
            .forma {
              overflow: hidden;
              padding: 30px;
            }
            .forma .form-group {
              padding-left: 30px;
              display: grid;
              grid-gap: 0px;
              grid-template-columns: 10fr 1fr 11fr;
              grid-template-rows: auto;
            }
            .forma .form-group .form-mid {
              display: flex;
              flex-direction: column;
              justify-content: center;
            }
            .forma .form-group .form-mid .form-text-or {
              display: block;
              font-family: var(--molot-font);
              letter-spacing: 1px;
              font-size: 44px;
              text-align: center;
              align-self: center;
              position: relative;
              border: 4px solid white;
              padding: 30px;
              border-radius: var(--border-radius);
              box-shadow: 45px 0px 60px -30px rgba(255, 255, 255, 0.4),
                -45px 0px 60px -30px rgba(255, 255, 255, 0.4);
            }
            .forma .form-group .form-mid .form-text-or::after {
              display: block;
              position: absolute;
              content: '';
              width: 2px;
              height: 200px;
              top: -200px;
              //bottom: 0;
              left: 50%;
              transform: translateX(-50%) rotate(0deg);
            }
            .forma .form-group .form-mid .form-text-or::before {
              position: absolute;
              content: '';
              display: block;
              left: 50%;
              top: 100px;
              width: 2px;
              height: 173px;
              transform: translateX(-50%);
            }
            .forma .form-group .colform .form-context .form-cta-title {
              font-size: 44px;
              line-height: 48px;
              padding-bottom: 15px;
              margin-bottom: 20px;
            }
            .forma .form-group .colform .userEmail {
              display: block;
              padding-left: 30px;
              height: 60px;
              width: 300px;
              margin: 0 auto 20px;
              font-size: 16px;
            }
            .forma .form-group .colform .form-button {
              display: block;
              border-radius: 50px;
              border: none;
              padding: 18px 20px;
              margin: 15px auto 0px;
              box-shadow: var(--box-shadow-up);
              transition: all 0.2s;
            }
            .forma .form-group .colform .form-button:hover {
              cursor: pointer;
              box-shadow: var(--box-shadow);
            }
            .forma .form-group .colform .form-cta-text-2 {
              font-size: 22px;
              line-height: 27px;
              padding-right: 100px;
            }
            .forma .form-group .colform .form-cta-text-22 {
              text-align: center;
              padding-right: 50px;
              padding-left: 50px;
              margin-bottom: 15px;
            }
          }

          @media (min-width: 1400px) {
            .forma {
              margin-left: 15px;
              margin-right: 15px;
            }
          }
        `}</style>
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
