import React, { Component } from "react";
import "../scss/page-documents.scss";
import Head from "../components/head";
import Layout from "../components/Layout";
import mtuList from "../components/tables/mtuList";
import FormPage from "../components/form";
import OtherNews from "../components/news/OtherNews";

class PageDocuments extends Component {
  render() {
    let content = "";

    content = mtuList.map((item, index) => (
      <details className="product-category" key={`part-${index}`}>
        <summary className="product-category-title">{item.label}</summary>
        {item.files.map((file, index) => (
          <a
            key={`sub-${index}`}
            className="file-link"
            href={`../static/docs/page-documents${file.path}`}
            target="_blank"
            rel="noopener"
          >
            <img
              className="file-img"
              src="../../static/images/icons/pdf.png"
              title="Скачать PDF"
              alt="PDF"
            />
            <span className="file-title">{file.label}</span>
          </a>
        ))}
      </details>
    ));

    return (
      <div>
        <Head
          title="Документация для проектирования ГПУ"
          description="Документация"
        />
        <Layout>
          <section className="container-fluid documents-promo">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-8 col-xl-6">
                  <div className="documents-promo-container">
                    <div className="top">
                      <h1 className="header-min-colored">Проектирование ГПУ</h1>
                      <p className="promo-text">
                        В разделе собрана техническая документация по
                        газопоршневым установкам
                      </p>
                    </div>
                    <div className="bottom">
                      <div className="promo-link">
                        <a
                          className="file-promo-link"
                          href="../static/docs/page-documents/rukovodstvo-po-proectirovaniu-i-montazu.pdf"
                          target="_blank"
                          rel="noopener"
                        >
                          <img
                            src="../../static/images/icons/pdf.png"
                            title="Скачать PDF"
                            alt="PDF"
                          />
                          <span className="file-title">
                            Руководство по проектированию и монтажу
                          </span>
                          <span className="file-size">(4&nbsp;Мб)</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="container-fluid documents-content">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div className="documents-content-wrapper">{content}</div>
                </div>
              </div>
            </div>
          </section>
          <FormPage />
          <section className="container-fluid news-anons">
            <div className="container">
              {/* <div className="row">
            <div className="col"> */}
              <OtherNews />
              {/* </div>
          </div> */}
            </div>
          </section>
        </Layout>
      </div>
    );
  }
}

export default PageDocuments;
