import React, { Component } from 'react';
import Head from '../components/head';
import Layout from '../components/Layout';
import mtuList from '../components/tables/mtuList';
import FormPage from '../components/form';
import news from '../components/tables/newsList';
import OtherNews from '../components/news/OtherNews';

class PageDocuments extends Component {
  render() {
    let content = '';

    content = mtuList.map((item, index) => (
      <details className="product-category" key={`part-${index}`}>
        <summary className="product-category-title">{item.label}</summary>
        {item.files.map((file, index) => (
          <a
            key={`sub-${index}`}
            className="file-link"
            href={`/docs/page-documents${file.path}`}
            target="_blank"
            rel="noopener"
          >
            <img
              className="file-img"
              src="/images/icons/pdf.png"
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
                          href="/docs/page-documents/rukovodstvo-po-proectirovaniu-i-montazu.pdf"
                          target="_blank"
                          rel="noopener"
                        >
                          <img
                            src="/images/icons/pdf.png"
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
              <OtherNews news={news} />
            </div>
          </section>
        </Layout>
        <style jsx global>{`
          .documents-promo {
            background: linear-gradient(to right, #e1e1e1 0%, #b1b1b1 100%);
            padding-top: 30px;
            padding-bottom: 30px;
          }
          .documents-promo .documents-promo-container .top .header-min-colored {
            font-size: 24px;
            line-height: 32px;
            color: white;
            letter-spacing: 0.2px;
            text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
          }
          .documents-promo .documents-promo-container .top .text {
            line-height: 18px;
          }
          .documents-promo .documents-promo-container .bottom {
            margin-top: 45px;
          }
          .documents-promo
            .documents-promo-container
            .bottom
            .promo-link
            .file-promo-link {
            display: flex;
            align-items: center;
          }
          .documents-promo
            .documents-promo-container
            .bottom
            .promo-link
            .file-promo-link
            img {
            display: block;
            margin-right: 15px;
          }
          .documents-promo
            .documents-promo-container
            .bottom
            .promo-link
            .file-promo-link
            .file-title {
            display: block;
            line-height: 15px;
            color: var(--text);
          }
          .documents-promo
            .documents-promo-container
            .bottom
            .promo-link
            .file-promo-link
            .file-size {
            display: block;
            color: var(--accent-grey);
          }
          .documents-content {
            padding-top: 30px;
            padding-bottom: 15px;
          }
          .documents-content .documents-content-wrapper .product-category {
            border-radius: 3px;
            box-shadow: var(--box-shadow);
            display: flex;
            flex-direction: column;
            padding: 7px;
            padding-left: 10px;
            background-color: white;
            margin-top: 8px;
            margin-bottom: 8px;
          }
          .documents-content
            .documents-content-wrapper
            .product-category
            .product-category-title {
            color: var(--accent-grey);
          }
          .documents-content
            .documents-content-wrapper
            .product-category
            .file-link {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-top: 15px;
            margin-bottom: 15px;
          }
          .documents-content
            .documents-content-wrapper
            .product-category
            .file-link
            .file-img {
            margin-right: 7px;
            display: block;
            width: 20px;
            height: auto;
          }
          .documents-content
            .documents-content-wrapper
            .product-category
            .file-link
            .file-title {
            color: var(--accent-grey);
            line-height: 15px;
            font-weight: 300;
          }

          @media (min-width: 768px) {
            .documents-promo
              .documents-promo-container
              .top
              .header-min-colored {
              font-size: 34px;
              line-height: 32px;
              color: white;
              letter-spacing: 0.3px;
              text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
            }
            .documents-promo .documents-promo-container .top .text {
              line-height: 18px;
            }
            .documents-promo .documents-promo-container .bottom {
              margin-top: 45px;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link {
              display: flex;
              align-items: center;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link
              .file-title {
              line-height: 15px;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link
              .file-size {
              line-height: 15px;
              margin-left: 15px;
            }
          }

          @media (min-width: 1200px) {
            .documents-promo {
              padding-top: 50px;
              padding-bottom: 40px;
              border-bottom: 15px solid white;
              box-shadow: inset 0 0 30px rgba(0, 0, 0, 0.125);
              background: linear-gradient(
                  to right,
                  rgba(207, 207, 207, 0.4) 0%,
                  rgba(182, 182, 182, 0.9) 50%,
                  rgba(177, 177, 177, 0.6) 100%
                ),
                url('/images/page-documents/bg-documents.png') 50% 0% no-repeat;
            }
            .documents-promo
              .documents-promo-container
              .top
              .header-min-colored {
              font-size: 45px;
              line-height: 32px;
              color: white;
              letter-spacing: 0.4px;
              text-shadow: 3px 3px 3px rgba(0, 0, 0, 0.3);
              margin-bottom: 25px;
            }
            .documents-promo .documents-promo-container .top .text {
              line-height: 23px;
            }
            .documents-promo .documents-promo-container .bottom {
              margin-top: 60px;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link {
              display: flex;
              align-items: center;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link
              img {
              margin-right: 10px;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link
              .file-title {
              font-size: 16px;
              line-height: 15px;
            }
            .documents-promo
              .documents-promo-container
              .bottom
              .promo-link
              .file-promo-link
              .file-size {
              font-size: 16px;
              line-height: 15px;
              margin-left: 15px;
              color: white;
            }
            .documents-content {
              padding-top: 5px;
              padding-bottom: 15px;
            }
            .documents-content .documents-content-wrapper .product-category {
              outline: none;
              border-radius: 3px;
              box-shadow: var(--card-shadow);
              display: flex;
              flex-direction: column;
              padding: 12px;
              padding-left: 16px;
              background-color: white;
              margin-top: 10px;
              margin-bottom: 10px;
              transition: all 0.15s ease-in;
            }
            .documents-content
              .documents-content-wrapper
              .product-category:hover {
              box-shadow: var(--box-shadow-up);
            }
            .documents-content
              .documents-content-wrapper
              .product-category
              .product-category-title {
              outline: none;
              color: var(--accent-grey);
              font-size: 20px;
            }
            .documents-content
              .documents-content-wrapper
              .product-category
              .file-link {
              display: flex;
              flex-direction: row;
              align-items: center;
              margin-top: 10px;
              margin-bottom: 5px;
              padding: 5px;
              border-radius: 3px;
            }
            .documents-content
              .documents-content-wrapper
              .product-category
              .file-link:hover {
              background-color: rgba(0, 0, 0, 0.07);
            }
            .documents-content
              .documents-content-wrapper
              .product-category
              .file-link
              .file-img {
              margin-right: 15px;
              display: block;
              width: 26px;
              height: auto;
            }
            .documents-content
              .documents-content-wrapper
              .product-category
              .file-link
              .file-title {
              color: var(--accent-grey);
              line-height: 15px;
              font-weight: 500;
              font-size: 16px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default PageDocuments;
