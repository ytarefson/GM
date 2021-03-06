const projectListShort = [
  {
    label: "Ледовая арена",
    id: 0,
    img: "project-1.jpg",
    as: "/ledovaya-arena",
    energy: "240 кВт",
    tenergy: "360 кВт",
    class: "Энергоцентр",
    city: "Казань",
    client: "«Пестрецы-Арена»",
    year: "2014",
    description:
      "Электростанция на базе двигателя MAN E 2842  предназначена для обеспечения спортивного объекта электрической и тепловой энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство модульной мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
  },
  {
    label: "Фос-Агро",
    id: 1,
    img: "project-fosagro.jpg",
    as: "/fos-agro",
    energy: "800 кВт",
    tenergy: "",
    class: "Энергоцентр",
    city: "Череповец",
    client: "Производственная компания",
    year: "2013",
    description:
      "Три электростанции на базе двигателей ЯМЗ  предназначены для обеспечения производственного корпуса на территории комбината «Фос-Агро» электрической энергией. Электростанция эксплуатируется в параллельном режиме с электрическими сетями. Нашей компанией выполнено производство трех энергоблоков, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
  },
  {
    label: "Водоканал",
    id: 2,
    img: "project-locked.jpg",
    as: "/vodokanal",
    energy: "1500 кВт",
    tenergy: "",
    class: "Энергоцентр",
    city: "Череповец",
    client: "МУП «Водоканал» Череповец",
    year: "2018",
    description:
      "Пять электростанций на базе двигателей ЯМЗ  предназначены для обеспечения работы объектов инфраструктуры (очистные сооружения, насосные станции) МУП «Водоканал» Череповец электрической энергией. Нашей компанией выполнено производство модульных мини-ТЭС, доставка оборудования на объект, пуско-наладочные работы. Осуществляется сервисная поддержка Заказчика."
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectListShort;
