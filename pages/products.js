import React, { Component } from "react";
import Link from "next/link";
// import Head from '../components/head';
import NextHead from "next/head";
import Layout from "../components/Layout";
import productsList from "../components/tables/productsList";
import ProductsNew from "../components/products/ProductsNewContainer";
import ProductsTextSections from "../components/products/ProductsTextSections";
import ProductsUsage from "../components/products/ProductsUsage";

import OtherNews from "../components/news/OtherNews";
import PromoProjects from "../components/products/PromoProjects";
import ProductsListPlate from "../components/products/ProductsListPlate";

class Products extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <NextHead>
          <title>
            Автономные газопоршневыевые электростанции и мини-тэц. Каталог
            продукции ООО "Газовые машины"
          </title>
          <meta
            name="description"
            content="Каталог газопоршневыех электростанций и мини-тэц на базе двигателей: MAN, LIEBHERR, MTU, JENBACHER и ЯМЗ."
          />
        </NextHead>
        <Layout>
          <div className="container-fluid products-promo">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-11 col-xl-5">
                  <div className="promo-text-container">
                    <h1 className="header-min-colored">
                      Каталог газопоршневых электростанций и мини-ТЭС
                    </h1>
                    <div className="text-min-container">
                      <p className="text-min">
                        Мы занимаемся проектированием, сборкой и обслуживанием
                        газопоршневых электростанций уже более 12 лет и за это
                        время протестировали большое количество комплектующих и
                        схем сборки, и смогли найти лучшие решения при минимуме
                        затрат.
                      </p>
                      <p className="text-min">
                        Силовые установки, использующиеся при проектировании
                        газовых электростанций, прошли многолетнюю проверку в
                        рабочих условиях и гарантирют исправную работу в течение
                        многих лет.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xl-7">
                  <div className="cards-plate">
                    <div className="card-container container-1">
                      <div className="card">
                        <div className="icon-container">
                          <img
                            src="../../../static/images/icon-1.png"
                            title="Экономия на электроэнергии"
                            alt="Электричество"
                            className="icon"
                          />
                        </div>
                        <div className="text-container ">
                          <span className="card-title">Электричество</span>
                          <p className="text-min card-description">
                            Автономная экологически чистая энергия в любых
                            количествах.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-container container-2">
                      <div className="card">
                        <div className="icon-container">
                          <img
                            src="../../../static/images/icon-3.png"
                            title="Экономия на электроэнергии"
                            alt="Электричество"
                            className="icon"
                          />
                        </div>
                        <div className="text-container">
                          <span className="card-title">Охлаждение</span>
                          <p className="text-min card-description">
                            Возможность конвертации тепла в холод и получения
                            эффективного охлаждения.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-container container-3">
                      <div className="card">
                        <div className="icon-container">
                          <img
                            src="../../../static/images/icon-2.png"
                            title="Экономия на электроэнергии"
                            alt="Электричество"
                            className="icon"
                          />
                        </div>
                        <div className="text-container">
                          <span className="card-title">Отопление</span>
                          <p className="text-min card-description">
                            Дешёвое отопление как побочный продукт работы
                            станции.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-container container-4">
                      <div className="card">
                        <div className="icon-container">
                          <img
                            src="../../../static/images/icon-4.png"
                            title="Экономия на электроэнергии"
                            alt="Электричество"
                            className="icon"
                          />
                        </div>
                        <div className="text-container">
                          <span className="card-title">Выгода</span>
                          <p className="text-min card-description">
                            В результате - экономия 50% в сравнении с
                            аналогичными объёмами gпотребления.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsNew />
          <ProductsTextSections />
          <div className="container-fluid promo-projects-product-page">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="section-wrapper">
                    <PromoProjects itemsCount={4} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductsUsage />
          <div className="container-fluid">
            <div className="container">
              <OtherNews />
            </div>
          </div>
        </Layout>
      </div>
    );
  }
}

Products.getInitialProps = async function(context) {
  if (context.query.category !== undefined) {
    const category = context.query.category.toUpperCase();
    const data = [];
    data.category = "";

    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);
          data.push(element.category);
        }
      }
    }
    return { data };
  } else {
    const category = "MAN";

    let data = [];
    data.category = "";
    for (const cat in productsList) {
      if (productsList.hasOwnProperty(cat)) {
        const element = productsList[cat];
        if (element.category === category) {
          data.push(element.products);

          data.push(element.category);
        }
      }
    }
    return { data };
  }
};

export default Products;
