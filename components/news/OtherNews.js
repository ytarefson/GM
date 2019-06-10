import React, { Component } from "react";
import "../../scss/news/otherNews.scss";
import PropTypes from "prop-types";
import news from "../tables/newsList";
import Link from "next/link";

class OtherNews extends Component {
  render() {
    const { id } = this.props;
    let newsStartId;
    let otherNewsContent = "";
    let newsData = [];

    // Определяем начальный ID откуда будем начинать показывать новости
    if (id < 4) {
      newsStartId = id + 4;
    } else {
      newsStartId = 0;
    }

    // Формируем массив объектов newsData для дальнейшего вывода
    for (let i = newsStartId; i < newsStartId + 4; i++) {
      let item = {
        label: news[i].label,
        img: news[i].img,
        id: news[i].id
      };
      newsData.push(item);
    }

    // Обходим newsData и формируем контент
    otherNewsContent = newsData.map(item => (
      <div className="col-12 col-sm-6 col-lg-3" key={`other-${item.id}`}>
        <Link
          href={`/novosti?id=${item.id}`}
          as={`/novosti/${item.id}`}
          key={`other-${item.id}`}
        >
          <a className="other-new">
            <div className="img-container">
              <img
                className="detail-img"
                src={`../../static/images/${item.img}`}
                alt={item.label}
                title={item.label}
              />
            </div>
            <span className="other-new-title">{item.label}</span>
          </a>
        </Link>
      </div>
    ));

    return (
      <div className="row">
        <div className="col-12">
          <span className="subheading-common">Лента новостей:</span>
        </div>
        {otherNewsContent}
      </div>
    );
  }
}

OtherNews.propTypes = {
  id: PropTypes.number.isRequired
};

export default OtherNews;
