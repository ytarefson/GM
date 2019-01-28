import React from 'react';
import Link from 'next/link';
import serviceList from './tables/serviceList';
import '../scss/generalServices.scss';

export default GeneralServices => (
  <div className="container-fluid generalServices">
    <div className="mycontainer p-3">
      <h2 className="header-common pl-0">
        Основные направления
        <br />
        работы компании «Газовые машины»
      </h2>
      <p className="subheading-common">
        Спектр поставляемого оборудования позволяет осуществлять полную
        модернизацию энергетического хозяйства предприятий, от замены
        устаревшего котельного оборудования, до организации полностью автономных
        систем.
      </p>
    </div>
    <div className="mycontainer mycontainer-cards p-0">
      <div className="row cards-container">
        {serviceList.map(({ label, text, img, href, as, key }) => (
          <div className="col-6 col-sm-4 col-lg-3 teh-plate" key={key}>
            <Link href={`/uslugi/${href}`} as={`/uslugi/${as}`}>
              <a className="teh-card">
                <div className="teh-image-container">
                  <img src={img} alt={label} className="teh-image" />
                  <div className="header-container">
                    <h3 className="teh-header">{label}</h3>
                  </div>
                </div>
                <div className="teh-content">
                  <p className="teh-desc">{text}</p>
                </div>
              </a>
            </Link>
          </div>
        ))}
        <div className="services-more">
          <Link href="/services" as="/uslugi">
            <a>Раздел услуги...</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);
