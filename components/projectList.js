const projectList = [
  {
    label: 'Ледовая арена',
    id: 1,
    as: '/ledovaya-arena',
    energy: '700кВт',
    city: 'Казань'
  },
  {
    label: 'Фос-Агро',
    id: 2,
    as: '/fos-agro',
    energy: '700кВт',
    city: 'Череповец'
  },
  {
    label: 'Водоканал',
    id: 3,
    as: '/vodokanal',
    energy: '900кВт',
    city: 'Череповец'
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.label}`;
  return link;
});

export default projectList;
