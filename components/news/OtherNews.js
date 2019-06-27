import React, { Component } from 'react';
import '../../scss/news/otherNews.scss';
import news from '../tables/newsList';
import Link from 'next/link';

class OtherNews extends Component {
  constructor(props) {
    super(props);
    this.randomArray = this.randomArray.bind(this);
  }

  randomArray(arr, count) {
    let shuffled = arr.slice(0);
    let i = arr.length;
    let min = i - count;
    let temp;
    let index;

    while (i-- > min) {
      index = Math.floor((i + 1) * Math.random());
      temp = shuffled[index];
      shuffled[index] = shuffled[i];
      shuffled[i] = temp;
    }
    return shuffled.slice(min);
  }

  render() {
    let otherNewsContent = '';
    let newsData = [];
    newsData = this.randomArray(news, 4);

    // Обходим newsData и формируем контент
    otherNewsContent = newsData.map(item => (
      <div className="" key={`other-${item.id}`}>
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
        <div className="col-12 other-new-plate">{otherNewsContent}</div>
      </div>
    );
  }
}

export default OtherNews;
