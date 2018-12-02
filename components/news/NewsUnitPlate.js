import React, { Component } from 'react';
import '../../scss/news/newsUnitPlate.scss';

export class NewsListPlate extends Component {
  render() {
    const data = this.props.data.data;
    return (
      <div className="news-unit-plate">
        <div className="big-new">
          <h2 className="header-razdel">{data.label}</h2>
          <span className="subheadding-red-bottom">{data.category}</span>
        </div>
        <div className="img-container">
          <img src={`../../static/images/${data.img}`} alt={data.label} />
        </div>
        <div className="new-details">
          <span className="author">Автор публикации: {data.author}</span>
          <span className="created">Опубликовано: {data.created_at}</span>
          <span className="updated">
            Последний раз обновлено: {data.updated_at}
          </span>
        </div>
        {data.description}
      </div>
    );
  }
}

export default NewsListPlate;
