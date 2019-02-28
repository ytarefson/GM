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
    as: '/products'
  },
  {
    label: 'Услуги',
    href: '/services',
    as: '/uslugi'
  },
  {
    label: 'О компании',
    href: '/about',
    as: '/about'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default menu;
