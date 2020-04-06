import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
              src={`/images/projects/${item.img}`}
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
        <style jsx>{`
          .promo-projects {
            margin-top: 30px;
            padding-top: 15px;
            border-radius: 3px;
          }
          .promo-projects .header-min-colored {
            margin-bottom: 0px;
          }
          .promo-projects .proj-feed {
            padding-top: 15px;
            padding-bottom: 15px;
            display: grid;
            grid-template: 1fr 1fr / 1fr 1fr;
            grid-gap: 15px;
            justify-content: center;
            justify-items: center;
          }
          .promo-projects .proj-feed .promoproj-card {
            max-width: 360px;
          }
          .promo-projects .proj-feed .promoproj-card .proj-img {
            border-radius: 3px;
            overflow: hidden;
          }
          .promo-projects .proj-feed .promoproj-card .text-common {
            padding-top: 8px;
            padding-left: 0px;
            padding-right: 35px;
            display: block;
            font-size: 14px;
            font-weight: 500;
            text-align: left;
            line-height: 18px;
          }

          @media (min-width: 576px) {
            .promo-projects .proj-feed {
              padding-top: 15px;
              padding-bottom: 30px;
              display: grid;
              grid-template: auto auto / 1fr 1fr;
              grid-gap: 15px;
            }
          }

          @media (min-width: 768px) {
            .promo-projects {
              margin-top: 30px;
              padding-top: 15px;
              border-radius: 3px;
            }
            .promo-projects .header-min-colored {
              margin-bottom: 0px;
            }
            .promo-projects .proj-feed {
              grid-gap: 30px;
            }
            .promo-projects .proj-feed .promoproj-card {
              max-width: 360px;
            }
            .promo-projects .proj-feed .promoproj-card .proj-img {
              border-radius: 3px;
              overflow: hidden;
            }
            .promo-projects .proj-feed .promoproj-card .text-common {
              padding-top: 12px;
              padding-left: 0px;
              padding-right: 35px;
              display: block;
              font-size: 16px;
              font-weight: 500;
              text-align: left;
              line-height: 18px;
            }
          }

          @media (min-width: 992px) {
            .promo-projects .proj-feed {
              padding-top: 15px;
              display: grid;
              grid-template: 1fr / 1fr 1fr 1fr 1fr;
              grid-gap: 15px;
              justify-content: center;
              justify-items: center;
            }
            .promo-projects .proj-feed .promoproj-card {
              max-width: 360px;
            }
            .promo-projects .proj-feed .promoproj-card .proj-img {
              border-radius: 3px;
              overflow: hidden;
            }
            .promo-projects .proj-feed .promoproj-card .text-common {
              font-size: 18px;
            }
          }

          @media (min-width: 1200px) {
            .promo-projects {
              padding: 0;
              padding-left: 40px;
            }
            .promo-projects .header-min-colored {
              margin-top: 31px;
              margin-bottom: 15px;
              font-size: 19px;
              text-align: right;
              border-bottom: 1px solid rgba(0, 0, 0, 0.125);
            }
            .promo-projects .proj-feed {
              padding: 0px;
              display: grid;
              grid-template: 1fr / 1fr;
              grid-auto-flow: row;
              grid-gap: 30px;
              grid-gap: 30px;
              justify-content: center;
              justify-items: center;
            }
            .promo-projects .proj-feed .promoproj-card {
              max-width: 360px;
              cursor: pointer;
            }
            .promo-projects .proj-feed .promoproj-card .proj-img {
              border-radius: 10px;
              overflow: hidden;
              box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.2);
            }
            .promo-projects .proj-feed .promoproj-card .text-common {
              font-size: 18px;
              margin-top: 0px;
              text-align: right;
              padding-right: 0;
            }
          }
        `}</style>
      </>
    );
  }
}

PromoProjects.propTypes = {
  itemsCount: PropTypes.number.isRequired
};

export default PromoProjects;
