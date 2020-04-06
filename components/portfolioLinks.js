import React from 'react';
import Link from 'next/link';
//import Router from 'next/router';

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
                        src={`/images/${img}`}
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
    <style jsx>{`
      .portfolio-links .container .row .col-12 .header-min-colored {
        display: block;
        margin-top: 15px;
        margin-bottom: 15px;
      }
      .portfolio-links .container .row .col-12 .portfolio-cards-plate {
        margin: 0;
        padding: 0;
        padding-top: 15px;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: 1fr;
        grid-template-rows: auto auto auto;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container {
        padding: 0;
        margin: 0;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container
        .portfolio-card {
        width: 100%;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container
        .portfolio-card
        .img-container {
        display: block;
        height: auto;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container
        .portfolio-card
        .img-container
        .portfolio-img {
        box-shadow: var(--box-shadow);
        display: block;
        width: 100%;
        height: auto;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container
        .portfolio-card
        .portfolio-link {
        color: #353535;
        margin-top: 15px;
        display: block;
        text-align: center;
        font-size: 16px;
        font-weight: 900;
        letter-spacing: normal;
      }
      .portfolio-links
        .container
        .row
        .col-12
        .portfolio-cards-plate
        .card-container
        .portfolio-card
        .portfolio-company {
        color: #353535;
        display: block;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        margin-bottom: 15px;
      }

      @media (min-width: 576px) {
        .portfolio-links .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 20px;
          margin-bottom: 15px;
        }
        .portfolio-links .container .row .col-12 .portfolio-cards-plate {
          margin: 0;
          padding: 0;
          padding-top: 15px;
          display: grid;
          grid-gap: 15px;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
        }
      }

      @media (min-width: 768px) {
        .portfolio-links .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 15px;
          margin-bottom: 15px;
        }
        .portfolio-links .container .row .col-12 .portfolio-cards-plate {
          margin: 0;
          padding: 0;
          padding-top: 15px;
          display: grid;
          grid-gap: 15px;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .portfolio-link {
          margin-top: 10px;
          display: block;
          text-align: center;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: normal;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .portfolio-company {
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          line-height: 14px;
          margin-bottom: 15px;
        }
      }

      @media (min-width: 1200px) {
        .portfolio-links {
          margin-top: 30px;
          padding-bottom: 60px;
          position: relative;
        }
        .portfolio-links::before {
          position: absolute;
          display: block;
          content: '';
          left: 0;
          top: 0px;
          height: 90px;
          width: 300px;
          background-color: var(--l-grey);
          clip-path: polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%);
        }
        .portfolio-links::after {
          position: absolute;
          display: block;
          z-index: -1;
          content: '';
          right: 0;
          bottom: 0px;
          height: 90px;
          width: 300px;
          background-color: var(--l-grey);
          clip-path: polygon(5% 0, 100% 0, 100% 100%, 6% 100%, 0 50%);
        }
        .portfolio-links .bg-container {
          position: relative;
          background-color: white;
          border: 1px solid #dcdcdc;
          z-index: 0;
        }
        .portfolio-links .container .row .col-12 .header-min-colored {
          display: block;
          margin-top: 0px;
          margin-bottom: 25px;
        }
        .portfolio-links .container .row .col-12 .portfolio-cards-plate {
          margin: 0;
          padding: 22px 8px;
          display: grid;
          grid-gap: 20px;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-rows: auto;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container {
          padding: 0;
          margin: 0;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card {
          width: 100%;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .img-container {
          display: block;
          border-radius: 7px;
          height: auto;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .img-container
          .portfolio-img {
          border-radius: var(--border-radius);
          box-shadow: var(--box-shadow);
          display: block;
          width: 100%;
          height: auto;
          transition: box-shadow 0.2s ease-in;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .portfolio-link {
          margin-top: 15px;
          display: block;
          text-align: center;
          font-size: 16px;
          font-weight: 900;
          letter-spacing: normal;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card
          .portfolio-company {
          display: block;
          text-align: center;
          font-size: 14px;
          font-weight: 500;
          line-height: 14px;
          margin-bottom: 0px;
        }
        .portfolio-links
          .container
          .row
          .col-12
          .portfolio-cards-plate
          .card-container
          .portfolio-card:hover
          .img-container
          .portfolio-img {
          box-shadow: var(--box-shadow-up);
          display: block;
          width: 100%;
          height: auto;
        }
      }

      @media (min-width: 1400px) {
        .portfolio-links {
          margin-top: 0px;
          padding-top: 75px;
          padding-bottom: 75px;
          position: relative;
          border-top: 15px solid #fff;
          border-bottom: 15px solid #fff;
        }
        .portfolio-links::before {
          box-shadow: inset 0px 0px 15px rgba(0, 0, 0, 1);
          position: absolute;
          display: block;
          content: '';
          left: 0;
          top: 0px;
          bottom: 0;
          height: 100%;
          width: 100%;
          background: url('/images/bg-promo-stripe-white.jpg') 100% 50%
              no-repeat,
            rgba(200, 200, 200, 0.5);
          background-size: cover;
          clip-path: none;
          filter: grayscale(1);
          opacity: 0.2;
        }
        .portfolio-links::after {
          display: none;
        }
      }
    `}</style>
  </section>
);

export default PortfolioLinks;
