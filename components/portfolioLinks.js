import React from "react";
import Link from "next/link";
//import Router from 'next/router';
import "../scss/portfolioLinks.scss";

const portfolio = [
  {
    label: "Аккус Актобэ",
    company: "Энергоцентр",
    href: "#",
    as: "/akkus-aktobe"
  },
  {
    label: "Ледовая Арена",
    company: "Энергоцентр",
    href: "#",
    as: "/ledovaya-arena"
  },
  {
    label: "Невская ратуша",
    company: "Энергоцентр",
    href: "#",
    as: "/nevskaya-ratusha"
  },
  {
    label: "СтройГазМонтаж",
    company: "Энергоцентр",
    href: "#",
    as: "/stroi-gaz-montazh"
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
      {portfolio.map(({ key, href, label, as, company }) => (
        <Link href={href} as={as} key={key}>
          <li className="portfolio-li">
            <span className="portfolio-company">{company}</span>
            <a className="portfolio-link">{label}</a>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

export default PortfolioLinks;
