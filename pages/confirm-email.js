import React, {Component} from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import '../scss/confirmEmail.scss';
import ym from 'react-yandex-metrika';

class  ConfirmEmailSend extends Component {
  componentDidMount() {
    ym('hit', '/confirm-email');
  }
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
              <a className="success-link text-common">Вернуться на главную</a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  </div>
);
    ]}

export default ConfirmEmailSend;
