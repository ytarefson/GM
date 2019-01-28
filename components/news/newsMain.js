import React, { Component } from 'react';
import Link from 'next/link';
import newsList from '../tables/newsList';
import '../../scss/news/newsMain.scss';

export class NewsMain extends Component {
  render() {
    const data = newsList;
    const shortData = data[0];

    return (
      <div className="news-main-plate">
        <div className="row m-0">
          <div className="col-12 col-md-6 p-0 order-md-1 pl-3 pr-3 news-details-plate">
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
          <div className="col-12 col-md-6 pl-3 pr-3 order-md-2">
            <div className="img-container">
              <img
                src={`../../static/images/${shortData.img}`}
                alt={shortData.label}
                className="news-card-img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsMain;
