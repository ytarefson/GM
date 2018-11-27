const menu = [
  {
    label: 'Распределенная генерация',
    href: '/rasGen',
    as: '/raspredelennaya-generaciya'
  },
  {
    label: 'Новости',
    href: '/news',
    as: '/novosti'
  },
  {
    label: 'Проекты',
    href: '/projects',
    as: '/proekti'
  },
  {
    label: 'Продукция',
    href: '/products',
    as: '/produkciya'
  },
  {
    label: 'Услуги',
    href: '/services',
    as: '/uslugi'
  },
  {
    label: 'О компании',
    href: '/about',
    as: '/o-komnanii'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default menu;
