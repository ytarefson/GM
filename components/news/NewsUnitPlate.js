import React, { Component } from "react";
import Head from "../../components/head";
import "../../scss/news/newsUnitPlate.scss";
import YoutubeVideo13 from "../YoutubeVideo13";
import OtherNews from "./OtherNews";
var Parser = require("html-react-parser");

export class NewsListPlate extends Component {
  render() {
    const data = this.props.data.data;
    const desc = Parser(data.description);

    return (
      <div>
        <Head
          title={`${data.label}`}
          // description='Подбробная информация о деятельности компании ООО "Газовые машины"'
          description={`Новости компании "Газовые машины". ${data.label}`}
        />
        <div className="row">
          <div className="col-12">
            <article className="news-unit-plate">
              <div className="big-new">
                <h1 className="header-razdel">{data.label}</h1>
              </div>
              <div className="img-container">
                <img
                  src={`../../static/images/${data.img}`}
                  alt={data.label}
                  title={data.label}
                />
              </div>
              <div className="new-details">
                <span className="subheadding-red-bottom">
                  Раздел: {data.category}
                </span>
                <span className="author">Автор публикации: {data.author}</span>
                <span className="created">Опубликовано: {data.created_at}</span>
                <span className="updated">
                  Последний раз обновлено: {data.updated_at}
                </span>
              </div>
              <div className="text-min">{desc}</div>

              {data.id === 13 && (
                <div className="myvideo-container">
                  <div className="clearNews" />
                  <YoutubeVideo13 className="myVideo" />
                </div>
              )}
            </article>
            {/* <div className="clearNews" /> */}
          </div>
        </div>
        <OtherNews id={data.id} />
        {/* <div className="clearNews" /> */}
      </div>
    );
  }
}

export default NewsListPlate;
