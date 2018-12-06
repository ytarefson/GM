const serviceList = [
  {
    label: "Поставка вспомогательного оборудования",
    text:
      "Для газопоршневых и дизельных установок от лучших европейских производителей.",
    img: "../static/images/service-image-1.jpg",
    href: "/services/",
    as: "postavka-vspomogatelnogo-oborudovaniya"
  },
  {
    label: "Проектирование автономных энергоцентров",
    text: "Полный спектр работ по подготовке разрешительной документации.",
    img: "../static/images/service-image-2.jpg",
    href: "/services/",
    as: "proektirovanie-avtonomnih-energocentrov"
  },
  {
    label: "Изготовление и поставка мини-ТЭС",
    text:
      "Изготовление и поставка газопоршневых Мини-ТЭС единичной мощностью от 250 до 2000 кВт.",
    img: "../static/images/service-image-3.jpg",
    href: "/services/",
    as: "izgotovlenie-i-postavka-mini-tec"
  },
  {
    label: "Расчёт экономической эффективности",
    text:
      "А так же срока окупаемости мини-электростанций для каждого конкретного объекта.",
    img: "../static/images/service-image-4.jpg",
    href: "/services/",
    as: "racshet-ekonomicheskoi-effektivnosti"
  },
  {
    label: "Подбор оптимальных агрегатов",
    text:
      "для мини-электростанций из имеющегося у нас модельного ряда для их наиболее эффективного использования.",
    img: "../static/images/service-image-5.jpg",
    href: "/services/",
    as: "podbor-optimalnih-agregatov"
  },
  {
    label: "Поставка запасных частей",
    text:
      "Весь необходимый спектр качественных запасных частей и расходных материалов.",
    img: "../static/images/service-image-6.jpg",
    href: "/services/",
    as: "postavka-zapasnih-chastei"
  },
  {
    label: "Работы пуско-наладочные",
    text: "Работы по пуско-наладке газопоршневых и дизельных установок.",
    img: "../static/images/service-image-7.jpg",
    href: "/services/",
    as: "pusko-naladochnie-raboti"
  },
  {
    label: "Шеф-монтаж",
    text:
      "Техническое сопровождение монтажа газопоршневых и дизельных установок",
    img: "../static/images/service-image-8.jpg",
    href: "/services/",
    as: "chef-montazh"
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default serviceList;
