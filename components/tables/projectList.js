const projectList = [
  {
    label: 'Ледовая арена',
    id: 0,
    img: 'project-1.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/ledovaya-arena',
    energy: '240 кВт',
    tenergy: '360 кВт',
    class: 'Энергоцентр',
    city: 'Казань',
    client: 'Ледовый дворец «Пестрецы-Арена»',
    year: '2014',
    description:
      'Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения спортивного объекта электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Фос-Агро',
    id: 1,
    img: 'project-fosagro.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/fos-agro',
    energy: '800 кВт',
    tenergy: '',
    class: 'Энергоцентр',
    city: 'Череповец',
    client: 'Производственная компания',
    year: '2013',
    description:
      'Три электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производственного корпуса на территории комбината «Фос-Агро» электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство трех энергоблоков, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Водоканал',
    id: 2,
    img: 'project-locked.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/vodokanal',
    energy: '1500 кВт',
    tenergy: '',
    class: 'Энергоцентр',
    city: 'Череповец',
    client: 'МУП «Водоканал» Череповец',
    year: '2018',
    description:
      'Пять электростанций на базе двигателей ЯМЗ  предназначены для обеспечения работы объектов инфраструктуры (очистные сооружения, насосные станции) МУП «Водоканал» Череповец электрической энергией. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Аккус Актобе',
    id: 3,
    img: 'project-akkus.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/akkus-aktobe',
    energy: '840 кВт',
    tenergy: '',
    class: 'Энергоцентр',
    city: 'Актобэ, Казахстан',
    client: 'Птицефабрика «Аккус»',
    year: '2015',
    description:
      'Электростанции на базе двигателей MAN E 2842  предназначены для обеспечения птицефабрики электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы.'
  },
  // {
  //   label: "Артак Обувь",
  //   id: 4,
  //   img: "project-locked.jpg",
  //   galery: [
  //     "project-locked.jpg",
  //     "project-locked.jpg",
  //     "project-locked.jpg",
  //     "project-locked.jpg"
  //   ],
  //   as: "/artak-obuv",
  //   energy: "400 кВт",
  //   tenergy: "460 кВт",
  //   class: "Энергоцентр",
  //   city: "Кострома",
  //   client: "ООО «Артак обувь»",
  //   year: "2017",
  //   description:
  //     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
  // },
  {
    label: 'СтройГазМонтаж',
    id: 4,
    img: 'project-sgm.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/stroy-gaz-montazh',
    energy: '500 кВт',
    tenergy: '',
    class: 'Энергоцентр',
    city: 'пос. Сывьдарьма, Новый Уренгой',
    client: '«СтройГазМонтаж»',
    year: '2017',
    description:
      'Электростанция на базе двигателя MAN E3262 предназначена для обеспечения вахтового жилого поселка электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Смоленский кирпичный завод',
    id: 5,
    img: 'project-locked.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/cmolenskiy-kirpichniy-zavod',
    energy: '500 кВт',
    tenergy: '650 кВт',
    class: 'Энергоцентр',
    city: 'Смоленск',
    client: 'Смоленский кирпичный завод',
    year: '2017',
    description:
      'Первый проект с газовым двигателем Liebherr G 9512 на территории РФ. Электростанция на базе двигателя Liebherr G 9512  предназначена для обеспечения производственного корпуса электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнен проект энергоцентра, производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Животноводческий комплекс',
    id: 6,
    img: 'project-locked.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/mersi-agro',
    energy: '2000 кВт',
    tenergy: '2600 кВт',
    class: 'Энергоцентр',
    city: 'Таранай, Сахалин',
    client: 'Мерси-Агро',
    year: '2017',
    description:
      'Первый проект на территории РФ с применением газовых двигателей MAN E 3262. Электростанции на базе двигателей MAN E3262  предназначены для обеспечения комплексов репродукции и откорма  электрической и тепловой энергией в островном режиме. Резервирование электроснабжения осуществляется с применением дизельных электростанций. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика.'
  },
  {
    label: 'Невская ратуша',
    id: 7,
    img: 'project-nevskaya.jpg',
    galery: [
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg',
      'project-locked.jpg'
    ],
    as: '/nevskaya-ratusha',
    energy: '1200 кВт',
    tenergy: '',
    class: 'Энергоцентр',
    city: 'Санкт-Петербург',
    client: 'Банк  «ВТБ»',
    year: '2016',
    description:
      'Электростанции на базе двигателей Doosan DP 222 предназначены для резервного электроснабжения штаб-квартиры банка ВТБ .'
  },
  {
    label: '«Энергоцентр ЯМЗ»',
    id: 8,
    img: 'project-avtodisel.jpg',
    galery: ['IMG_1.jpg', 'IMG_2.jpg', 'IMG_3.jpg', 'IMG_4.jpg'],
    as: '/yamz',
    energy: '1500 кВт',
    tenergy: '1825 кВт',
    class: 'Энергоцентр',
    city: 'Ярославль',
    client: 'ЕвросибЭнерго',
    year: '2018',
    description:
      'Электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производства средних рядных двигателей ЯМЗ электрической и тепловой энергией в режиме паралелльной работы с электрическими сетями. Электрическая энергия передается на объект с напряжением 10,5 кВ. Проект реализован «под ключ». Нашими специалистами выполнены предпроектные работы, инженерные изыскания, строительно-монтажные работы, производство генерирующего оборудования, пуско-наладочные работы, сдача объекта в эксплуатацию. Осуществляется сервисная поддержка Заказчика.'
  }
  // ,
  // {
  //   label: "Ростов-арена",
  //   id: 10,
  //   img: "project-locked.jpg",
  //   galery: [
  //     "project-locked.jpg",
  //     "project-locked.jpg",
  //     "project-locked.jpg",
  //     "project-locked.jpg"
  //   ],
  //   as: "/rostov-arena",
  //   energy: "240 кВт",
  //   tenergy: "112 кВт",
  //   class: "Энергоцентр",
  //   city: "Ростов-на-Дону",
  //   client: "«Ростов-арена»",
  //   year: "2014",
  //   description:
  //     "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения  объекта чемпионата мира по футболу 2018 электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
  // }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectList;
