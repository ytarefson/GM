const mtuList = [
  {
		category: 'MTU',
		label: "MTU 1000",
    files: [
      {
				label:,
				path:,
				size:,
			},
      {
				label:,
				path:,
				size:,
			},
      {
				label:,
				path:,
				size:,
			},
    ]
  },
  {
		category: 'MTU',
		label: "MTU 1000",
    files: [
      {
				label:,
				path:,
				size:,
			},
    ]
  },
  {
		category: 'MTU',
		label: "MTU 1000",
    files: [
      {
				label:,
				path:,
				size:,
			},
    ]
  },
 
].map(link => {
  link.key = `nav-link-${link.id}-${link.electricPower}`;
  return link;
});

export default mtuList;