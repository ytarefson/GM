import React from 'react';
import Link from 'next/link';
import Head from '../components/head';
import Layout from '../components/Layout';

const Products = () => (
  <div>
    <Head
      title="Продукция - Газовые машины"
      description="Каталог продукции для любой техники"
    />
    <div className="hero">
      <h1 className="title">Продукция</h1>
      <div className="description">
        <ul className="content-list">
          <li>Каталог продукции</li>
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

export default Products;
