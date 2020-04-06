import React, { Component } from 'react';
import Head from '../../components/head';
import YoutubeVideo13 from '../YoutubeVideo13';
import OtherNews from './OtherNews';
var Parser = require('html-react-parser');

export class NewsListPlate extends Component {
  render() {
    const data = this.props.data;
    const desc = Parser(data.description);

    return (
      <div>
        <Head
          title={`${data.label}`}
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
                  src={`/images/${data.img}`}
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
          </div>
        </div>
        <style jsx>{`
          .clearNews {
            clear: both;
            padding-bottom: 80px;
          }

          .news-unit-plate .big-new {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            min-height: 80px;
          }
          .news-unit-plate .big-new .header-razdel {
            font-size: 24px;
            line-height: 28px;
          }
          .news-unit-plate .big-new .subheadding-red-bottom {
            margin-top: 20px;
            font-size: 14px;
            color: var(--accent-red);
          }
          .news-unit-plate .img-container {
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            margin: 5px auto 10px 0;
            max-width: 500px;
            height: auto;
            width: 100%;
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
          }
          .news-unit-plate .img-container img {
            width: 100%;
            height: auto;
          }
          .news-unit-plate .new-details {
            margin-bottom: 30px;
            display: flex;
            flex-direction: column;
            font-size: 13px;
            color: grey;
          }

          @media (min-width: 768px) {
            .news-unit-plate {
              padding: 0px 0px 80px 0px;
            }
          }

          @media (min-width: 1200px) {
            .news-unit-plate {
              margin-top: 15px;
              background-color: #fff;
              padding: 45px;
              border-radius: 3px;
            }
            .news-unit-plate .big-new {
              margin-bottom: 15px;
            }
            .news-unit-plate .big-new .header-razdel {
              font-size: 36px;
              line-height: 42px;
              margin-bottom: 30px;
            }
            .news-unit-plate .img-container {
              float: right;
              margin-left: 30px;
              margin-top: 0;
              margin-bottom: 30px;
            }
            .news-unit-plate .new-details {
              margin-bottom: 30px;
              display: flex;
              flex-direction: column;
              font-size: 13px;
              color: grey;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default NewsListPlate;
