import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';

const RasGen = () => (
  <div>
    <Head
      title="Услуги - Газовые Машины"
      description='Подбробная информация о деятельности компании ООО "Газовые машины"'
    />
    <div className="hero">
      <h1 className="title">Услуги</h1>
      <div className="description">
        <ul className="content-list">
          <li>Карточки с описанием услуг</li>
        </ul>
        <h3>Описание услуг</h3>
        <ul className="content-list">
          <li>Поставка автономных энергоцентров "под ключ"</li>
          <li>Проектировании автономных энергоцентров</li>
          <li>
            Сертифицированное производство газопоршневых электростанций и
            мини-ТЭС
          </li>
          <li>
            Строительство автономных энергоцентров на базе газопоршневых
            электростанций
          </li>
          <li>Поставка вспомогательного оборудования </li>
          <li>Техническое сопровождение </li>
          <li>Работы по пуско-наладке </li>
          <li>Осуществление подбора оптимальных агрегатов</li>
          <li>Расчет экономической эффективности</li>
          <li>Обеспечение необходимой документацией</li>
          <li>Поставка запасных частей</li>
          <li>Обучение эксплуатирующего персонала</li>
          <li>Сервис газопоршневых электростанций</li>
        </ul>
      </div>
    </div>
    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
    `}</style>
  </div>
);

export default RasGen;
