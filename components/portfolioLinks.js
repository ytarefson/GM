import React from 'react';
import Link from 'next/link';
//import Router from 'next/router';
import '../scss/portfolioLinks.scss';

const portfolio = [
  {
    label: 'Аккус Актобэ',
    company: 'Энергоцентр',
    href: '#',
    id: '3',
    as: '/akkus-aktobe'
  },
  {
    label: 'Ледовая Арена',
    company: 'Энергоцентр',
    href: '#',
    id: '',
    as: '/ledovaya-arena'
  },
  {
    label: 'Невская ратуша',
    company: 'Энергоцентр',
    href: '#',
    id: '9',
    as: '/nevskaya-ratusha'
  },
  {
    label: 'СтройГазМонтаж',
    company: 'Энергоцентр',
    href: '#',
    id: '5',
    as: '/stroi-gaz-montazh'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const PortfolioLinks = () => (
  <div className="container-fluid p-0 portfolio">
    <div className="mycontainer">
      <span className="portfolio-header d-block">Реализованные проекты:</span>
    </div>
    <ul className="portfolio-ul">
      {portfolio.map(({ key, id, label, as, company }) => (
        <Link href={`/proekti/${id}`} key={key}>
          <a className="portfolio-a">
            <li className="portfolio-li">
              <span className="portfolio-company">{company}</span>
              <span className="portfolio-link">{label}</span>
            </li>
          </a>
        </Link>
      ))}
    </ul>
  </div>
);

export default PortfolioLinks;
