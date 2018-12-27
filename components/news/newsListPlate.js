import React, { Component } from "react";
import newsList from "../tables/newsList";
import Link from "next/link";
import "../../scss/news/newsListPlate.scss";

export class NewsListPlate extends Component {
  render() {
    const data = newsList;

    return (
      <div className="news-cards-small-plate">
        {data.map(
          ({
            key,
            id,
            label,
            preview_text,
            img,
            updated_at,
            created_at,
            category
          }) =>
            id != 0 && (
              <Link href={`/novosti?id=${id}`} as={`/novosti/${id}`} key={key}>
                <a className="news-card-small">
                  <div className="row m-0">
                    <div className="col-12 col-md-3">
                      <div className="img-container">
                        <img
                          src={`../../static/images/${img}`}
                          alt=""
                          className="news-card-img"
                        />
                      </div>
                    </div>
                    <div className="col-12 col-md-9">
                      <div className="news-details">
                        <span className="news-created">{created_at}</span>
                        <span className="news-category">{category}</span>
                        <span className="news-updated">{updated_at}</span>
                      </div>
                      <h2 className="news-header-min">{label}</h2>
                      <p className="news-description">{preview_text}</p>
                    </div>
                  </div>
                </a>
              </Link>
            )
        )}
      </div>
    );
  }
}

export default NewsListPlate;
