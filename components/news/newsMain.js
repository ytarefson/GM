import React, { Component } from 'react';
import Link from 'next/link';
import newsList from '../tables/newsList';

export class NewsMain extends Component {
  render() {
    const data = newsList;
    const shortData = data[data.length - 1];
    return (
      <div className="news-main-plate">
        <div className="row m-0">
          <div className="col-12 col-md-6 p-0 order-2 order-md-1 pl-3 pr-4 news-details-plate">
            <div className="news-details">
              <span className="news-created">{shortData.created_at}</span>
              <span className="news-category">{shortData.category}</span>
              <span className="news-updated">{shortData.updated_at}</span>
            </div>
            <h2 className="news-header">{shortData.label}</h2>
            <p className="text-common news-description">
              {shortData.preview_text}
            </p>
            <Link
              href={`/novosti?id=${shortData.id}`}
              as={`/novosti/${shortData.id}`}
              key={shortData.key}
            >
              <div className="news-button">
                <a className="news-button-link">Подробнее</a>
              </div>
            </Link>
          </div>
          <div className="col-12 col-md-6 pl-3 pr-3 order-1 order-md-2">
            <div className="img-container">
              <img
                src={`/images/${shortData.img}`}
                alt={shortData.label}
                title={shortData.label}
                className="news-card-img"
              />
            </div>
          </div>
        </div>
        <style jsx>{`
          .bg-color {
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .bg-color .subheading-red-top {
            margin-top: 10px;
          }

          .news {
            padding-bottom: 80px;
            position: relative;
            background-color: #fafafa;
            z-index: 0;
          }
          .news .razdel-name {
            font-family: var(--molot-font);
            display: block;
            color: rgb(170, 170, 170);
            font-weight: 700;
            padding-left: 16px;
            padding-top: 15px;
            letter-spacing: 4px;
          }
          .news .section-plate {
            display: block;
            max-width: 1170px;
            margin: 10px auto;
          }
          .news-ul {
            flex-direction: column;
            padding-left: 0;
          }
          .tg {
            margin: 0 -5px;
          }
          .tg tbody tr th,
          .tg tbody tr td {
            border: 1px solid black;
          }
          .tg tbody tr th span,
          .tg tbody tr td span {
            display: block;
            padding: 10px;
          }

          .news-main-plate {
            margin-top: 30px;
            margin-bottom: 30px;
            padding-bottom: 30px;
          }
          .news-main-plate .news-button {
            margin: 20px 0 20px auto;
            display: block;
            width: 240px;
            height: 60px;
            text-align: center;
            line-height: 53px;
            border-radius: 3px;
            transition: all 0.15s ease-in;
            border: 3px solid rgb(192, 192, 192);
          }
          .news-main-plate .news-button:hover {
            background-color: #fff;
            border: 3px solid rgb(245, 61, 64);
            cursor: pointer;
            box-shadow: var(--box-shadow);
          }
          .news-main-plate .news-button:hover .news-button-link {
            color: var(--accent-red);
          }
          .news-main-plate .news-button:active {
            background-color: lightgrey;
          }
          .news-main-plate .news-button .news-button-link {
            font-weight: 700;
            color: grey;
          }
          .news-details-plate {
            margin-bottom: 20px;
          }
          .news-details {
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            color: #c4c4c4;
            font-family: var(--noto-font);
            font-size: 12px;
            font-weight: 400;
            line-height: 16px;
            letter-spacing: -0.35px;
            margin-bottom: 10px;
            padding-bottom: 5px;
            border-bottom: 1px solid #c4c4c4;
          }
          .news-details .news-created {
            margin-right: 8px;
          }
          .news-details .news-category {
            margin-right: 8px;
          }
          .news-details .news-updated {
            margin-right: 8px;
          }
          .news-header {
            color: #313131;
            font-family: var(--noto-font);
            font-size: 18px;
            font-weight: 700;
            line-height: 22px;
            margin-bottom: 10px;
            letter-spacing: -0.6px;
          }
          .news-description {
            display: block;
            margin-bottom: 10px;
          }

          .news-main-plate .img-container {
            margin-bottom: 15px;
            border-radius: var(--border-radius);
          }
          .news-main-plate .img-container .news-card-img {
            max-width: 100%;
            border-radius: var(--border-radius);
            box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
          }

          @media (min-width: 576px) {
            .news-main-plate .news-details {
              font-size: 14px;
            }
            .news-header {
              font-size: 20px;
              margin-top: 20px;
              line-height: 24px;
              margin-bottom: 10px;
            }
            .news-description {
              display: block;
              margin-bottom: 30px;
            }
          }

          @media (min-width: 768px) {
            .news-description {
              display: block;
              margin-bottom: 10px;
            }

            .news-main-plate .news-button {
              margin: 0 auto 0 0;
            }
          }

          @media (min-width: 992px) {
            .news-header {
              font-size: 24px;
              margin-top: 0px;
              line-height: 28px;
              margin-bottom: 20px;
            }
            .news-description {
              display: block;
              margin-bottom: 10px;
            }

            .news-main-plate .news-button {
              margin: 20px auto 0 0;
            }
          }

          @media (min-width: 1200px) {
            .bg-color .subheading-red-top {
              margin-top: 10px;
            }
            .news-header {
              font-size: 28px;
              margin-top: 30px;
              line-height: 36px;
              margin-bottom: 20px;
            }
            .news-description {
              display: block;
              font-size: 16px;
              line-height: 24px;
              margin-bottom: 30px;
              font-weight: 300;
              color: var(--accent-grey);
            }
            .news-main-plate {
              padding-bottom: 0;
            }
            .news-main-plate .news-button {
              margin: 45px auto 0 0;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default NewsMain;
