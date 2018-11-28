const projectListShort = [
  {
    label: 'Ледовая арена',
    id: 0,
    img: 'project-1.jpg',
    as: '/ledovaya-arena',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Казань'
  },
  {
    label: 'Фос-Агро',
    id: 1,
    img: 'project-1.jpg',
    as: '/fos-agro',
    energy: '700кВт',
    class: 'Энергоцентр',
    city: 'Череповец'
  },
  {
    label: 'Водоканал',
    id: 2,
    img: 'project-1.jpg',
    as: '/vodokanal',
    energy: '900кВт',
    class: 'Энергоцентр',
    city: 'Череповец'
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectListShort;
