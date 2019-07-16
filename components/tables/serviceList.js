const serviceList = [
  {
    label: 'Поставка вспомогательного оборудования',
    title: 'Оборудование для газовых электростанций',
    imgDetail: '../static/images/servises-detail/oborud.jpg',
    text:
      'Оборудование для газопоршневых и дизельных установок от лучших европейских производителей.',
    img: '../static/images/service-image-1.jpg',
    href: '/postavka-vspomogatelnogo-oborudovaniya',
    as: 'postavka-vspomogatelnogo-oborudovaniya'
  },
  {
    label: 'Проектирование автономных энергоцентров',
    title: 'Работы по проектированию автономных энергоцентров',
    imgDetail: '../static/images/servises-detail/proekt.jpg',
    text:
      'Полный спектр работ по подготовке разрешительной и эксплуатационной документации.',
    img: '../static/images/service-image-2.jpg',
    href: '/proektirovanie-avtonomnih-energocentrov',
    as: 'proektirovanie-avtonomnih-energocentrov'
  },
  {
    label: 'Изготовление и поставка мини-ТЭС',
    title:
      'Изготовление газовых электростанций под технические условия заказчика',
    imgDetail: '../static/images/servises-detail/izgotov.jpg',
    text:
      'Изготовление и поставка газопоршневых электростанций единичной мощностью от 250 до 2000 кВт.',
    img: '../static/images/service-image-3.jpg',
    href: '/izgotovlenie-i-postavka-mini-tec',
    as: 'izgotovlenie-i-postavka-mini-tec'
  },
  {
    label: 'Расчёт экономической эффективности',
    title:
      'Расчёт экономической эффективности при переходе на оборудование собственной генерации.',
    imgDetail: '../static/images/servises-detail/raschet.jpg',
    text:
      'А так же срока окупаемости мини-электростанций для каждого конкретного объекта.',
    img: '../static/images/service-image-4.jpg',
    href: '/racshet-ekonomicheskoi-effektivnosti',
    as: 'racshet-ekonomicheskoi-effektivnosti'
  },
  {
    label: 'Подбор оптимальных агрегатов',
    title:
      'Помощ при подборе оптимальных комплектующих при проектировании или замене износившихся агрегатов.',
    imgDetail: '../static/images/servises-detail/help.jpg',
    text:
      'для мини-электростанций из имеющегося у нас модельного ряда для их наиболее эффективного использования.',
    img: '../static/images/service-image-5.jpg',
    href: '/podbor-optimalnih-agregatov',
    as: 'podbor-optimalnih-agregatov'
  },
  {
    label: 'Поставка запасных частей',
    title:
      'Поставки оборудования для ремонта и обслуживания газовых электростанций',
    imgDetail: '../static/images/servises-detail/zapchasti.jpg',
    text:
      'Весь необходимый спектр качественных запасных частей и расходных материалов.',
    img: '../static/images/service-image-6.jpg',
    href: '/postavka-zapasnih-chastei',
    as: 'postavka-zapasnih-chastei',
    doc: 'motortech-catalog.pdf',
    docname: 'Каталог продукции Motortech (11Мб)'
  },
  {
    label: 'Работы пуско-наладочные',
    title: 'Настройка и ввод в эксплуатацию газопоршневых электростанций',
    imgDetail: '../static/images/servises-detail/nastroika.jpg',
    text: 'Работы по пуско-наладке газопоршневых и дизельных установок.',
    img: '../static/images/service-image-7.jpg',
    href: '/pusko-naladochnie-raboti',
    as: 'pusko-naladochnie-raboti'
  },
  {
    label: 'Шеф-монтаж',
    h1: 'Техническое сопровождение монтажа газопоршневых и дизельных установок',
    imgDetail: '../static/images/servises-detail/montaj.jpg',
    text: 'Проверка качества монтажа и сборки энергоустановки',
    img: '../static/images/service-image-8.jpg',
    href: '/chef-montazh',
    as: 'chef-montazh'
  }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

export default serviceList;
