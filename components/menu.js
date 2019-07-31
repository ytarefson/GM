const menu = [
  {
    label: 'Главная',
    href: '/',
    as: '/'
  },
  {
    label: 'Аренда и лизинг',
    href: '/arenda',
    as: '/arenda-i-lizing'
  },
  // {
  //   label: "Распределенная генерация",
  //   href: "/rasGen",
  //   as: "/raspredelennaya-generaciya"
  // },
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
    label: 'Каталог',
    href: '/products',
    as: '/products'
  },
  {
    label: 'Услуги',
    href: '/services',
    as: '/uslugi'
  },
  {
    label: 'Для проектировщиков',
    href: '/page-documents',
    as: '/page-documents'
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
