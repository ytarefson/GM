import React, { Component } from 'react';
import newsList from './tables/newsList';
import Link from 'next/link';

export default class NewsAdv extends Component {
  render() {
    const news = newsList.slice(-3);

    let newsContent;

    if (news) {
      newsContent = news.reverse().map((item, index) => (
        <Link
          href={`/novosti?id=${item.id}`}
          as={`/novosti/${item.id}`}
          key={index}
        >
          <a className="col-12 col-md-4 col-xl-3 newsAdv-col news-item">
            <span className="news-title">{item.label}</span>
            <span className="news-date">{item.created_at}</span>
          </a>
        </Link>
      ));
    }
    return (
      <div>
        <div className="container-fluid newsAdv">
          <div className="container">
            <div className="row">
              <div className="col-12 col-xl-3 newsAdv-col news-title-col">
                <span className="news-title-1">Новости:</span>
              </div>
              {newsContent}
            </div>
          </div>
        </div>
        <style jsx>{`
          .newsAdv {
            margin-top: 30px;
            padding-top: 30px;
            padding-bottom: 30px;
            background-color: #fff;
            border-top: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
          }
          .newsAdv .newsAdv-col {
            color: #353535;
          }
          .newsAdv .newsAdv-col .news-title-1 {
            font-family: var(--molot-font);
            font-size: 21px;
            color: #6d6d6d;
          }
          .newsAdv .news-item {
            border-bottom: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding-top: 15px;
          }
          .newsAdv .news-item .news-title {
            display: block;
            font-size: 15px;
            line-height: 19px;
          }
          .newsAdv .news-item .news-date {
            display: block;
            text-align: right;
            margin-top: 7px;
            font-size: 12px;
          }

          @media (min-width: 768px) {
            .newsAdv .news-item .news-title {
              display: block;
              font-size: 15px;
              line-height: 19px;
            }
            .newsAdv .news-item .news-date {
              display: block;
              text-align: left;
              margin-top: 7px;
              font-size: 12px;
            }
          }

          @media (min-width: 1200px) {
            .newsAdv {
              margin-top: 30px;
              padding-top: 15px;
              padding-bottom: 15px;
              background-color: #fff;
              border-top: 1px solid #dcdcdc;
              border-bottom: 1px solid #dcdcdc;
            }
            .newsAdv .newsAdv-col {
              color: #353535;
            }
            .newsAdv .newsAdv-col .news-title-1 {
              font-family: var(--molot-font);
              font-size: 30px;
              color: #6d6d6d;
            }
            .newsAdv .news-title-col {
              border-right: 1px solid #dcdcdc;
              padding-top: 5px;
            }
            .newsAdv .news-item {
              border-bottom: none;
              padding-left: 15px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .newsAdv .news-item .news-title {
              display: block;
              font-size: 15px;
            }
            .newsAdv .news-item .news-date {
              display: block;
              text-align: right;
              margin-top: 5px;
              padding-right: 15px;
            }
          }
        `}</style>
      </div>
    );
  }
}
