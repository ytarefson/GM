import React, { Component } from 'react';
import newsList from '../tables/newsList';
import Link from 'next/link';

export class NewsListPlate extends Component {
  render() {
    let data = newsList.slice().reverse();
    data = data.slice(1);

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
          }) => (
            <Link href={`/novosti?id=${id}`} as={`/novosti/${id}`} key={key}>
              <a className="news-card-small">
                <div className="row m-0">
                  <div className="col-12 col-md-3">
                    <div className="img-container">
                      <img
                        src={`/images/${img}`}
                        alt={label}
                        title={label}
                        className="news-card-img"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-9 pl-xl-4">
                    <div className="news-details">
                      <span className="news-created">{created_at}</span>
                      <span className="news-category">{category}</span>
                      <span className="news-updated">{updated_at}</span>
                    </div>
                    <h2 className="news-header-min">{label}</h2>
                    <div className="news-description">{preview_text}</div>
                  </div>
                </div>
              </a>
            </Link>
          )
        )}
        <style jsx>{`
          .news-cards-small-plate {
            margin-top: 15px;
          }
          .news-cards-small-plate .news-card-small {
            display: block;
            margin: 0px 0;
            padding-top: 40px;
            padding-bottom: 40px;
            transition: all 0.2s ease-in;
            position: relative;
          }
          .news-cards-small-plate .news-card-small::before {
            display: block;
            position: absolute;
            content: '';
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 1px;
            background-color: rgb(255, 252, 252);
          }
          .news-cards-small-plate .news-card-small::after {
            display: block;
            position: absolute;
            content: '';
            bottom: 2px;
            left: 0;
            right: 0;
            width: 100%;
            height: 1px;
            background-color: rgb(223, 223, 223);
          }
          .news-cards-small-plate .news-card-small:hover .news-header-min {
            color: var(--accent-grey);
          }
          .news-cards-small-plate .news-card-small .img-container {
            margin-bottom: 10px;
          }
          .news-cards-small-plate
            .news-card-small
            .img-container
            .news-card-img {
            box-shadow: var(--box-shadow);
            border-radius: var(--border-radius);
            max-width: 100%;
          }
          .news-cards-small-plate .news-card-small .news-details {
            margin-top: 10px;
            line-height: 18px;
            display: flex;
            flex-direction: row;
          }
          .news-cards-small-plate .news-card-small .news-details:nth-child(1) {
            font-size: 12px;
          }
          .news-cards-small-plate .news-card-small .news-header-min {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            color: #313131;
          }
          .news-cards-small-plate .news-card-small .news-description {
            color: #8b8b8b;
          }

          @media (min-width: 768px) {
            .news-cards-small-plate .news-card-small .img-container {
              padding-top: 0px;
            }
            .news-cards-small-plate .news-card-small .news-details {
              margin-top: 0px;
              flex-direction: row;
            }
          }

          @media (min-width: 992px) {
            .news-cards-small-plate .news-card-small {
              padding-top: 30px;
              padding-bottom: 30px;
            }
            .news-cards-small-plate .news-card-small .news-details {
              line-height: 18px;
              display: flex;
              flex-direction: row;
            }
            .news-cards-small-plate
              .news-card-small
              .news-details:nth-child(1) {
              font-size: 14px;
              font-weight: 300;
              color: darkgrey;
            }
          }

          @media (min-width: 1200px) {
            .news-cards-small-plate .news-card-small {
              margin-top: 30px;
              margin-bottom: 30px;
            }
            .news-cards-small-plate .news-card-small .news-header-min {
              font-size: 22px;
              letter-spacing: -0.6px;
              line-height: 30px;
              margin-bottom: 20px;
              margin-top: 15px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default NewsListPlate;
