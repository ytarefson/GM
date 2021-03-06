import React, { Component } from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import Link from 'next/link';

class ConfirmEmailSend extends Component {
  render() {
    return (
      <div>
        <Head
          title="Сообщение успешно отправлено - Газовые машины"
          description="Если вы на этой странице, значит Ваше сообщение отправлено"
        />

        <Layout>
          <div className="container-fluid">
            <div className="mycontainer">
              <div className="success-message">
                <h1 className="success header-razdel">
                  Ваше сообщение успешно отправлено
                </h1>
                <Link href="/">
                  <a className="success-link text-common">
                    Вернуться на главную
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <style jsx>{`
          .success-message {
            margin: 70px 0 100px 0;
            background: #0db10c;
            padding: 50px;
          }
          .success-message .success {
            margin-bottom: 30px;
            color: #fff;
          }
          .success-message .success-link {
            display: block;
            padding: 10px;
            background-color: #fff;
            cursor: pointer;
            color: #0db10c;
            border-radius: 50px;
            text-align: center;
            max-width: 240px;
          }
          @media (min-width: 992px) {
            .success-message .success {
              margin-bottom: 100px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default ConfirmEmailSend;
