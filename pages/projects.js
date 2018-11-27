import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';

const RasGen = () => (
  <div>
    <Head
      title="Проекты"
      description="Каталог выполненных работ с описанием и фотограмиями"
    />
    <div className="hero">
      <h1 className="title">Проекты</h1>
      <div className="description">
        <ul className="content-list">
          <li>каталог работ с описанием и фото</li>
        </ul>
        <h3>Карточки с проектами</h3>
        <ul className="content-list">
          <li>Энергоцентр Ледовая арена, Казань</li>
          <li>Энергоцентр Фос-Агро, Череповец</li>
          <li>Энергоцентр Водоканал, Череповец</li>
          <li>Энергоцентр Аккус Актобе, Казастан</li>
          <li>Энергоцентр Артак Обувь, Кострома</li>
          <li>Энергоцентр СтройГазМонтаж</li>
          <li>Энергоцентр Смоленский кирпичный завод</li>
          <li>Энергоцентр "Мерси Агро", Сахалин</li>
          <li>Энергоцентр ПАО "Автодизель", Ярославль</li>
          <li>Энергоцентр Невская ратуша, Санкт-Петербург</li>
          <li>Энергоцентр Ростов-арена, Ростов на Дону</li>
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
