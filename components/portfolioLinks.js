import React from 'react';
import Link from 'next/link';
//import Router from 'next/router';
import '../scss/portfolioLinks.scss';

const portfolio = [
  {
    label: 'Энергоцентр ЯМЗ',
    company: 'Энергоцентр',
    img: 'project-avtodisel.jpg',
    href: '#',
    id: '0',
    as: '/yamz'
  },
  {
    label: 'Невская ратуша',
    company: 'Энергоцентр',
    img: 'project-nevskaya.jpg',
    href: '#',
    id: '1',
    as: '/nevskaya-ratusha'
  },
  {
    label: 'Аккус Актобэ',
    company: 'Энергоцентр',
    img: 'project-akkus.jpg',
    href: '#',
    id: '3',
    as: '/akkus-aktobe'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const PortfolioLinks = () => (
  <section className="container-fluid portfolio-links">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h3 className="header-min-colored">
            Реализованные <span className="dark-color"> проекты:</span>
          </h3>
        </div>
      </div>
    </div>

    <div className="container bg-container">
      <div className="row">
        <div className="col-12">
          <ul className="portfolio-cards-plate">
            {portfolio.map(({ key, id, label, img, company }) => (
              <li key={key} className="card-container">
                <Link href={`/proekti/${id}`}>
                  <a className="portfolio-card">
                    <div className="img-container">
                      <img
                        src={`../static/images/${img}`}
                        alt={(company, label)}
                        title={`Проект - ${label}`}
                        className="portfolio-img"
                      />
                    </div>
                    <span className="portfolio-link">{label}</span>
                    <span className="portfolio-company">{company}</span>
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="button-grey-container">
            <a href="/proekti" className="button-grey">
              <span>Портфолио</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioLinks;
