import React from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import '../scss/form/confirmAskForm.scss';

const ConfirmAskForm = () => (
  <div>
    <Head
      title="Опросный лист заполнен успешно - Газовые машины"
      description="Если вы на этой странице, значит опросный лист заполнен верно и успешно отправлен"
    />

    <Layout>
      <div className="container-fluid">
        <div className="mycontainer">
          <div className="success-message">
            <h1 className="success header-razdel">
              Опросный лист успешно отправлен
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

export default ConfirmAskForm;
