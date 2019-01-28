const menu = [
  {
    label: 'Распределенная генерация',
    href: '/raspredelennaya-generaciya',
    as: '/raspredelennaya-generaciya'
  },
  {
    label: 'Новости',
    href: '/novosti',
    as: '/novosti'
  },
  {
    label: 'Проекты',
    href: '/proekti',
    as: '/proekti'
  },
  {
    label: 'Продукция',
    href: '/products',
    as: '/products'
  },
  {
    label: 'Услуги',
    href: '/uslugi',
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
