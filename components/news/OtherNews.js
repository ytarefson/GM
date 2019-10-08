import React, { Component } from 'react';
import '../../scss/news/otherNews.scss';
import PropTypes from 'prop-types';
import Link from 'next/link';

class OtherNews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherNews: []
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
    otherNewsContent = otherNews.map(item => (
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
    // }

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

OtherNews.propTypes = {
  news: PropTypes.array.isRequired
};

export default OtherNews;
