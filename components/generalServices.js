import React from "react";
import Link from "next/link";

import "../scss/generalServices.scss";

const services = [
  {
    label: "Поставка вспомогательного оборудования",
    text:
      "Для газопоршневых и дизельных установок от лучших европейских производителей.",
    img: "../static/images/service-image-1.jpg",
    href: "/services/",
    as: "/uslugi/postavka-vspomogatelnogo-oborudovaniya"
  },
  {
    label: "Проектирование автономных энергоцентров",
    text: "Полный спектр работ по подготовке разрешительной документации.",
    img: "../static/images/service-image-2.jpg",
    href: "/services/",
    as: "/uslugi/proektirovanie-avtonomnih-energocentrov"
  },
  {
    label: "Изготовление и поставка мини-ТЭС",
    text:
      "Изготовление и поставка газопоршневых Мини-ТЭС единичной мощностью от 250 до 2000 кВт.",
    img: "../static/images/service-image-3.jpg",
    href: "/services/",
    as: "/uslugi/izgotovlenie-i-postavka-mini-tec"
  },
  {
    label: "Расчёт экономической эффективности",
    text:
      "А так же срока окупаемости мини-электростанций для каждого конкретного объекта.",
    img: "../static/images/service-image-4.jpg",
    href: "/services/",
    as: "/uslugi/recshet-ekonomicheskoi-effektivnosti"
  },
  {
    label: "Подбор оптимальных агрегатов",
    text:
      "для мини-электростанций из имеющегося у нас модельного ряда для их наиболее эффективного использования.",
    img: "../static/images/service-image-5.jpg",
    href: "/services/",
    as: "/uslugi/podbor-optimalnih-agregatov"
  },
  {
    label: "Поставка запасных частей",
    text:
      "Весь необходимый спектр качественных запасных частей и расходных материалов.",
    img: "../static/images/service-image-6.jpg",
    href: "/services/",
    as: "/uslugi/postavka-zapasnih-chastei"
  },
  {
    label: "Работы пуско-наладочные",
    text: "Работы по пуско-наладке газопоршневых и дизельных установок.",
    img: "../static/images/service-image-7.jpg",
    href: "/services/",
    as: "/uslugi/pusko-naladochnie-raboti"
  },
  {
    label: "Шеф-монтаж",
    text:
      "Техническое сопровождение монтажа газопоршневых и дизельных установок",
    img: "../static/images/service-image-8.jpg",
    href: "/services/",
    as: "/uslugi/chef-montazh"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default GeneralServices => (
  <div className="container-fluid generalServices">
    <div className="mycontainer">
      <h2 className="header-common">
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
        {services.map(({ label, text, img, href, as, key }) => (
          <div className="col-6 col-sm-4 col-lg-3 teh-plate" key={key}>
            <Link href={href} as={as}>
              <a className="teh-card">
                <div className="teh-image-container">
                  <img src={img} alt="" className="teh-image" />
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
