import React, { Component } from "react";
import "../scss/newsAdv.scss";
import newsList from "./tables/newsList";
import Link from "next/link";

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
      </div>
    );
  }
}
