import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

class OtherNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherNews: [],
    };
  }

  componentDidMount() {
    const { news } = this.props;
    let max = news.length - 1;
    let min = 1;
    let array = [];
    for (array.length; array.length < 4; false) {
      let index = Math.floor(Math.random() * (max - min + 1)) + min;
      let newItem = news[index];
      if (!array.includes(newItem)) {
        array.push(newItem);
      }
    }
    this.setState({ otherNews: array });
  }

  render() {
    const { otherNews } = this.state;
    let otherNewsContent = 'Загрузка...';
    otherNewsContent = otherNews.map((item) => (
      <div className="  " key={`other-${item.id}`}>
        <Link
          href={`/novosti?id=${item.id}`}
          as={`/novosti/${item.id}`}
          key={`other-${item.id}`}
        >
          <a className="other-new">
            <div className="img-container">
              <img
                className="detail-img"
                src={`/images/${item.img}`}
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
        <div className="col-12 other-new-plate">{otherNewsContent}</div>
        <style jsx global>{`
          .other-new-plate {
            display: grid;
            grid-template: 1fr 1fr 1fr 1fr / 1fr;
            grid-gap: 30px;
          }
          .other-new-plate .other-new {
            display: block;
          }
          .other-new-plate .other-new .img-container {
            border-radius: var(--border-radius);
            overflow: hidden;
            margin-bottom: 15px;
            box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
          }
          .other-new-plate .other-new .img-container .detail-img {
            max-width: 100%;
          }
          .other-new-plate .other-new .other-new-title {
            color: var(--accent-dark);
            text-decoration: none;
            display: block;
            margin-top: 2px;
            font-size: 14px;
            line-height: 17px;
          }
          .other-new-plate .other-new .other-new-title:hover {
            text-decoration: underline;
          }

          @media (min-width: 576px) {
            .other-new-plate {
              display: grid;
              grid-template: 1fr 1fr / 1fr 1fr;
              grid-gap: 30px;
              margin-bottom: 15px;
            }
            .other-new-plate .other-new .img-container {
              height: 150px;
              overflow: hidden;
            }
            .other-new-plate .other-new .img-container .detail-img {
              max-width: 100%;
            }
          }
          @media (min-width: 768px) {
            .other-new .img-container {
              height: 230px;
              overflow: hidden;
              display: flex;
              justify-content: center;
              align-items: center;
            }
            .other-new .img-container .detail-img {
              max-width: 100%;
            }
          }
          @media (min-width: 992px) {
            .other-new-plate {
              display: grid;
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 30px;
              margin-bottom: 30px;
            }
            .other-new-plate .other-new .img-container {
              height: 155px;
              overflow: hidden;
              border-radius: var(--border-radius);
            }
            .other-new-plate .other-new .img-container .detail-img {
              display: block;
              min-width: 105%;
              height: 105%;
            }
          }
          @media (min-width: 1200px) {
            .subheading-common {
              display: block;
              margin-top: 30px;
            }
            .other-new-plate {
              padding-top: 15px;
            }
            .other-new-plate .other-new .img-container {
              height: 160px;
              overflow: hidden;
            }
            .other-new-plate .other-new .img-container .detail-img {
              max-width: 100%;
            }
            .other-new-plate .other-new .other-new-title {
              margin-top: 7px;
              font-size: 15px;
              line-height: 20px;
              font-weight: 300;
            }
            .other-new-plate .other-new .other-new-title:hover {
              text-decoration: underline;
            }
          }
        `}</style>
      </div>
    );
  }
}

OtherNews.propTypes = {
  news: PropTypes.array.isRequired,
};

export default OtherNews;
