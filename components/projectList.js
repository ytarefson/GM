const projectList = [
  {
    label: 'Ледовая арена',
    id: 1,
    img: 'project-1.jpg',
    as: '/ledovaya-arena',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Казань'
  },
  {
    label: 'Фос-Агро',
    id: 2,
    img: 'project-1.jpg',
    as: '/fos-agro',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Череповец'
  },
  {
    label: 'Водоканал',
    id: 3,
    img: 'project-1.jpg',
    as: '/vodokanal',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Череповец'
  },
  {
    label: 'Аккус Актобе',
    id: 4,
    img: 'project-1.jpg',
    as: '/akkus-aktobe',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Казастан'
  },
  {
    label: 'Артак Обувь',
    id: 5,
    img: 'project-1.jpg',
    as: '/artak-obuv',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Кострома'
  },
  {
    label: 'СтройГазМонтаж',
    id: 6,
    img: 'project-1.jpg',
    as: '/stroy-gaz-montazh',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: ''
  },
  {
    label: 'Смоленский кирпичный завод',
    id: 7,
    img: 'project-1.jpg',
    as: '/cmolenskiy-kirpichniy-zavod',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: ''
  },
  {
    label: '"Мерси Агро"',
    id: 8,
    img: 'project-1.jpg',
    as: '/mersi-agro',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Сахалин'
  },
  {
    label: 'ПАО "Автодизель"',
    id: 9,
    img: 'project-1.jpg',
    as: '/avtodiesel',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Ярославль'
  },
  {
    label: 'Невская ратуша',
    id: 10,
    img: 'project-1.jpg',
    as: '/nevskaya-ratusha',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Санкт-Петербург'
  },
  {
    label: 'Ростов-арена',
    id: 11,
    img: 'project-1.jpg',
    as: '/rostov-arena',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Ростов на Дону'
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectList;
