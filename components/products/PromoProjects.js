import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
    const { itemsCount } = this.props;
    let projectsZero = [];
    let promoprojects = [];
    let content = '';
    projects.map(item => {
      if (item.id !== 0) {
        projectsZero.push(item);
      }
    });
    promoprojects = this.randomArray(projectsZero, itemsCount);
    content = promoprojects.map((item, index) => (
      <Link key={`${index}-promoproj`} href={`/proekti/${item.id}`}>
        <a key={`${index}-promoproj`} className="d-block promoproj-card">
          <div className="proj-img">
            <img
              src={`/static/images/projects/${item.img}`}
              alt={item.label}
              title={item.label}
              className="w-100"
            />
          </div>
          <span className="text-common">{item.label}</span>
        </a>
      </Link>
    ));

    return (
      <>
        <h4 className="header-min-colored">Выполненные проекты:</h4>
        <div className="proj-feed">{content}</div>
      </>
    );
  }
}

PromoProjects.propTypes = {
  itemsCount: PropTypes.number.isRequired
};

export default PromoProjects;
