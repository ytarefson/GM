import React, { Component } from 'react';
import '../../scss/products/PromoProjects.scss';
import projects from '../tables/projectList';
import Link from 'next/link';

class PromoProjects extends Component {
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
    let promoprojects = [];
    let content = '';
    promoprojects = this.randomArray(projects, 3);
    content = promoprojects.map((item, index) => (
      <Link key={`${index}-promoproj`} href={`/proekti/${item.id}`}>
        <a key={`${index}-promoproj`} className="d-block promoproj-card">
          <div className="proj-img">
            <img
              src={`../../static/images/projects/${item.img}`}
              alt=""
              className="w-100"
            />
          </div>
          <span className="text-common text-right">{item.label}</span>
        </a>
      </Link>
    ));

    return (
      <div className="col-12 col-xl-4 promo-projects">
        <h4 className="header-razdel">Выполненные проекты:</h4>
        <div className="proj-feed">{content}</div>
      </div>
    );
  }
}

export default PromoProjects;
