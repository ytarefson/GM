import React, { Component } from "react";
import projectListShort from "../tables/projectListShort";
import Link from "next/link";
import newsList from "../tables/newsList";
import "../../scss/news/newsMain.scss";

export class NewsMain extends Component {
  render() {
    const data = newsList;
    const shortData = [];
    data.map(item => {
      if (item.id == data.length - 1) {
        shortData.push(item);
      }
    });
    return (
      <div className="news-main-plate">
        {shortData.map(
          ({
            key,
            id,
            label,
            preview_text,
            img,
            updated_at,
            created_at,
            category
          }) => (
            <div className="row m-0">
              <div className="col-12 col-md-6 p-0 order-md-1 pl-3 pr-3 news-details-plate">
                <div className="news-details">
                  <span className="news-created">{created_at}</span>
                  <span className="news-category">{category}</span>
                  <span className="news-updated">{updated_at}</span>
                </div>
                <h2 className="news-header">{label}</h2>
                <p className="text-common news-description">{preview_text}</p>
                <Link
                  href={`/novosti?id=${id}`}
                  as={`/novosti/${id}`}
                  key={key}
                >
                  <div className="news-button">
                    <a className="news-button-link">Подробнее</a>
                  </div>
                </Link>
              </div>
              <div className="col-12 col-md-6 pl-3 pr-3 order-md-2">
                <div className="img-container">
                  <img
                    src={`../../static/images/${img}`}
                    alt=""
                    className="news-card-img"
                  />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    );
  }
}

export default NewsMain;
