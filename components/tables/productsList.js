const productsList = [
  {
    category: 'MAN',
    products: [
      {
        label: 'MAN 200',
        id: 0,
        img: 'MAN200.jpg',
        as: '/man-200',
        motorMark: 'MAN E 3262 E 302',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1',
        voltage: '400',
        electricPower: '200',
        thermalPower: '316',
        electricEfficiency: '36,7',
        thermalEfficiency: '56,3',
        overallEfficiency: '93',
        fuelType:
          'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '59.6',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'MAN 250',
        id: 1,
        img: 'MAN250.jpg',
        as: '/man-200',
        motorMark: 'MAN E 3262 E 302',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1',
        voltage: '400',
        electricPower: '250',
        thermalPower: '380',
        electricEfficiency: '38',
        thermalEfficiency: '54,8',
        overallEfficiency: '92,8',
        fuelType:
          'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '67',
        noiseLevel: '80',
        serviceInterval: '1 500 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'MAN 300',
        id: 2,
        img: 'MAN300.jpg',
        as: '/man-200',
        motorMark: 'MAN E 3268 LE 242',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,7',
        voltage: '400',
        electricPower: '350',
        thermalPower: '320',
        electricEfficiency: '41,7',
        thermalEfficiency: '47,5',
        overallEfficiency: '89,2',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '78',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'MAN 350',
        id: 3,
        img: 'MAN350.jpg',
        as: '/man-200',
        motorMark: 'MAN E 3268 LE 202',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,69',
        voltage: '400',
        electricPower: '350',
        thermalPower: '445',
        electricEfficiency: '40,2',
        thermalEfficiency: '50,1',
        overallEfficiency: '90,3',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '91',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'MAN 430',
        id: 4,
        img: 'MAN500.jpg',
        as: '/man-200',
        motorMark: 'MAN E3262 LE232',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,6',
        voltage: '400',
        electricPower: '430',
        thermalPower: '505',
        electricEfficiency: '39,7',
        thermalEfficiency: '50,6',
        overallEfficiency: '90,3',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '107',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'MAN 530',
        id: 5,
        img: 'MAN500.jpg',
        as: '/man-200',
        motorMark: 'MAN E3262 LE 202',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,63',
        voltage: '400, 6 300, 10 500',
        electricPower: '500',
        thermalPower: '652',
        electricEfficiency: '40,6',
        thermalEfficiency: '49,8',
        overallEfficiency: '90,4',
        fuelType:
          'Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '135',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      }
    ]
  },
  {
    category: 'LIEBHERR',
    products: [
      {
        label: 'LIEBHERR 230',
        id: 10,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'Liebherr G9508',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,74',
        voltage: '400',
        electricPower: '230',
        thermalPower: '262',
        electricEfficiency: '41,5',
        thermalEfficiency: '44,2',
        overallEfficiency: '85,7',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '59.2',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'LIEBHERR 300',
        id: 11,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'Liebherr G9508',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1,7',
        voltage: '400',
        electricPower: '300',
        thermalPower: '340',
        electricEfficiency: '40',
        thermalEfficiency: '42',
        overallEfficiency: '82',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '78',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'LIEBHERR 500',
        id: 12,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'Liebherr G9512',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.7',
        voltage: '400, 6 300, 10 500',
        electricPower: '500',
        thermalPower: '652',
        electricEfficiency: '40,6',
        thermalEfficiency: '49,8',
        overallEfficiency: '90,4',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '135',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'LIEBHERR 1000',
        id: 13,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'Liebherr G9620',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.7',
        voltage: '400, 6 300, 10 500',
        electricPower: '1 000',
        thermalPower: '1 100',
        electricEfficiency: '44',
        thermalEfficiency: '43,5',
        overallEfficiency: '87,5',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '20-200',
        nominalGazConsumption: '265',
        noiseLevel: '80',
        serviceInterval: '1 000 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      }
    ]
  },
  {
    category: 'YAMZ',
    products: [
      {
        label: 'ЯМЗ 100',
        id: 20,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'ЯМЗ 534 CNG',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.6',
        voltage: '400',
        electricPower: '100',
        thermalPower: '100',
        electricEfficiency: '44',
        thermalEfficiency: '43,5',
        overallEfficiency: '87,5',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '31.9',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'ЯМЗ 140',
        id: 21,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'ЯМЗ 536 CNG',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.6',
        voltage: '400',
        electricPower: '140',
        thermalPower: '190',
        electricEfficiency: '44',
        thermalEfficiency: '43,5',
        overallEfficiency: '87,5',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '40',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'ЯМЗ 200',
        id: 22,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'ТМЗ 8425',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.6',
        voltage: '400',
        electricPower: '200',
        thermalPower: '280',
        electricEfficiency: '29',
        thermalEfficiency: '40,6',
        overallEfficiency: '69,6',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '66',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      },
      {
        label: 'ЯМЗ 300',
        id: 23,
        img: 'product-1.jpg',
        as: '/man-200',
        motorMark: 'ЯМЗ 850.10',
        gasMixer: 'Motortech VariFuel2',
        controlBlock: 'Motortech VariStep3',
        ignitionSystem: 'Motortech MIC4',
        throttleValve: 'Motortech ITB',
        excessAirRatio: '1.6',
        voltage: '400',
        electricPower: '280',
        thermalPower: '450',
        electricEfficiency: '30',
        thermalEfficiency: '47',
        overallEfficiency: '77',
        fuelType: 'Природный газ',
        methaneNumber: 'Более 80',
        gasPressure: '0,05',
        nominalGazConsumption: '40',
        noiseLevel: '80',
        serviceInterval: '800 моточасов',
        totalPowerPlant: 'Не менее 15',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, aspernatur.'
      }
    ]
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.electricPower}`;
  return link;
});

export default productsList;
