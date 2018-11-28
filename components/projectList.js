const projectList = [
  {
    label: 'Ледовая арена',
    id: 0,
    img: 'project-1.jpg',
    as: '/ledovaya-arena',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Казань',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Фос-Агро',
    id: 1,
    img: 'project-1.jpg',
    as: '/fos-agro',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Череповец',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Водоканал',
    id: 2,
    img: 'project-1.jpg',
    as: '/vodokanal',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Череповец',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Аккус Актобе',
    id: 3,
    img: 'project-1.jpg',
    as: '/akkus-aktobe',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Казастан',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Артак Обувь',
    id: 4,
    img: 'project-1.jpg',
    as: '/artak-obuv',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Кострома',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'СтройГазМонтаж',
    id: 5,
    img: 'project-1.jpg',
    as: '/stroy-gaz-montazh',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: '',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Смоленский кирпичный завод',
    id: 6,
    img: 'project-1.jpg',
    as: '/cmolenskiy-kirpichniy-zavod',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: '',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: '"Мерси Агро"',
    id: 7,
    img: 'project-1.jpg',
    as: '/mersi-agro',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Сахалин',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'ПАО "Автодизель"',
    id: 8,
    img: 'project-1.jpg',
    as: '/avtodiesel',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Ярославль',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Невская ратуша',
    id: 9,
    img: 'project-1.jpg',
    as: '/nevskaya-ratusha',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Санкт-Петербург',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  },
  {
    label: 'Ростов-арена',
    id: 10,
    img: 'project-1.jpg',
    as: '/rostov-arena',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Ростов на Дону',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectList;
