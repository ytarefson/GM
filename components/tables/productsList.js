const productsList = [
  {
    category: "MTU",
    products: [
      {
        label: "MTU 700",
        id: 24,
        img: "mtu700.jpg",
        galery: ["mtu700.jpg", "mtu700.jpg", "mtu700.jpg", "mtu700.jpg"],
        as: "/mtu-700",
        motorMark: "MTU 8V4000 GS L32",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400",
        electricPower: "776",
        thermalPower: "886",
        electricEfficiency: "41,9",
        thermalEfficiency: "46,7",
        overallEfficiency: "88,6",
        fuelType: "Природный газ ГОСТ 5542-87",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "210",
        noiseLevel: "80",
        serviceInterval: "1 500 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 800",
        id: 25,
        img: "mtu800.jpg",
        galery: ["mtu800.jpg", "mtu800.jpg", "mtu800.jpg", "mtu800.jpg"],
        as: "/mtu-800",
        motorMark: "MTU 8V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400",
        electricPower: "854",
        thermalPower: "891",
        electricEfficiency: "42,8",
        thermalEfficiency: "44,8",
        overallEfficiency: "87,6",
        fuelType: "Природный газ ГОСТ 5542-87",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "230",
        noiseLevel: "80",
        serviceInterval: "1 500 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1000",
        id: 26,
        img: "mtu1000.jpg",
        galery: ["mtu1000.jpg", "mtu1000.jpg", "mtu1000.jpg", "mtu1000.jpg"],
        as: "/mtu-1000",
        motorMark: "MTU 8V4000 GS L64",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400",
        electricPower: "1013",
        thermalPower: "969",
        electricEfficiency: "43,4",
        thermalEfficiency: "42,6",
        overallEfficiency: "86",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "273",
        noiseLevel: "80",
        serviceInterval: "1 500 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1100",
        id: 27,
        img: "mtu1100.jpg",
        galery: ["mtu1100.jpg", "mtu1100.jpg", "mtu1100.jpg", "mtu1100.jpg"],
        as: "/mtu-1100",
        motorMark: "MTU 12V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "1169",
        thermalPower: "1228",
        electricEfficiency: "42,8",
        thermalEfficiency: "45,0",
        overallEfficiency: "87,8",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "330",
        noiseLevel: "80",
        serviceInterval: "800 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1200",
        id: 28,
        img: "mtu1200.jpg",
        galery: ["mtu1200.jpg", "mtu1200.jpg", "mtu1200.jpg", "mtu1200.jpg"],
        as: "/mtu-1200",
        motorMark: "MTU 12V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "1286",
        thermalPower: "1323",
        electricEfficiency: "43,2",
        thermalEfficiency: "44,5",
        overallEfficiency: "87,7",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "347",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1500",
        id: 29,
        img: "mtu1500.jpg",
        galery: ["mtu1500.jpg", "mtu1500.jpg", "mtu1500.jpg", "mtu1500.jpg"],
        as: "/mtu-1500",
        motorMark: "MTU 12V4000 GS L64",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "1521",
        thermalPower: "1403",
        electricEfficiency: "44,3",
        thermalEfficiency: "40,8",
        overallEfficiency: "85,1",
        fuelType: "Природный газ ГОСТ 5542-87",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "410",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1600",
        id: 30,
        img: "mtu1600.jpg",
        galery: ["mtu1600.jpg", "mtu1600.jpg", "mtu1600.jpg", "mtu1600.jpg"],
        as: "/mtu-1600",
        motorMark: "MTU 16V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "1560",
        thermalPower: "1662",
        electricEfficiency: "42,8",
        thermalEfficiency: "45,6",
        overallEfficiency: "88,4",
        fuelType: "Природный газ ГОСТ 5542-87",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "420",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 1700",
        id: 31,
        img: "mtu1700.jpg",
        galery: ["mtu1700.jpg", "mtu1700.jpg", "mtu1700.jpg", "mtu1700.jpg"],
        as: "/mtu-1700",
        motorMark: "MTU 16V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "1718",
        thermalPower: "1795",
        electricEfficiency: "43",
        thermalEfficiency: "45",
        overallEfficiency: "88",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "464",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 2000",
        id: 32,
        img: "mtu2000.jpg",
        galery: ["mtu2000.jpg", "mtu2000.jpg", "mtu2000.jpg", "mtu2000.jpg"],
        as: "/mtu-2000",
        motorMark: "MTU 16V4000 GS L64",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "2028",
        thermalPower: "1901",
        electricEfficiency: "44,3",
        thermalEfficiency: "41,6",
        overallEfficiency: "85,9",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "527",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      },
      {
        label: "MTU 2020",
        id: 33,
        img: "mtu2000.jpg",
        galery: ["mtu2000.jpg", "mtu2000.jpg", "mtu2000.jpg", "mtu2000.jpg"],
        as: "/mtu-2000",
        motorMark: "MTU 20V4000 GS L33",
        gasMixer: "",
        controlBlock: "",
        ignitionSystem: "",
        throttleValve: "",
        excessAirRatio: "",
        voltage: "400, 6300, 10500",
        electricPower: "2145",
        thermalPower: "2239",
        electricEfficiency: "43",
        thermalEfficiency: "44,9",
        overallEfficiency: "87,9",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "",
        nominalGazConsumption: "579",
        noiseLevel: "80",
        serviceInterval: "2000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB."
      }
    ]
  },
  {
    category: "MAN",
    products: [
      {
        label: "MAN 200",
        id: 0,
        img: "MAN200.jpg",
        galery: ["MAN200.jpg", "MAN200.jpg", "MAN200.jpg", "MAN200.jpg"],
        as: "/man-200",
        motorMark: "MAN E 3262 E 302",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1",
        voltage: "400",
        electricPower: "200",
        thermalPower: "316",
        electricEfficiency: "36,7",
        thermalEfficiency: "56,3",
        overallEfficiency: "93",
        fuelType:
          "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "59.6",
        noiseLevel: "80",
        serviceInterval: "1 500 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "MAN 250",
        id: 1,
        img: "MAN250.jpg",
        galery: ["MAN250.jpg", "MAN250.jpg", "MAN250.jpg", "MAN250.jpg"],
        as: "/man-250",
        motorMark: "MAN E 3262 E 302",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1",
        voltage: "400",
        electricPower: "250",
        thermalPower: "380",
        electricEfficiency: "38",
        thermalEfficiency: "54,8",
        overallEfficiency: "92,8",
        fuelType:
          "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "67",
        noiseLevel: "80",
        serviceInterval: "1 500 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "MAN 300",
        id: 2,
        img: "MAN300.jpg",
        galery: ["MAN300.jpg", "MAN300.jpg", "MAN300.jpg", "MAN300.jpg"],
        as: "/man-300",
        motorMark: "MAN E 3268 LE 242",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,7",
        voltage: "400",
        electricPower: "350",
        thermalPower: "320",
        electricEfficiency: "41,7",
        thermalEfficiency: "47,5",
        overallEfficiency: "89,2",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "78",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "MAN 350",
        id: 3,
        img: "MAN350.jpg",
        galery: ["MAN350.jpg", "MAN350.jpg", "MAN350.jpg", "MAN350.jpg"],
        as: "/man-350",
        motorMark: "MAN E 3268 LE 202",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,69",
        voltage: "400",
        electricPower: "350",
        thermalPower: "445",
        electricEfficiency: "40,2",
        thermalEfficiency: "50,1",
        overallEfficiency: "90,3",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "91",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "MAN 430",
        id: 4,
        img: "MAN500.jpg",
        galery: ["MAN500.jpg", "MAN500.jpg", "MAN500.jpg", "MAN500.jpg"],
        as: "/man-430",
        motorMark: "MAN E3262 LE232",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,6",
        voltage: "400",
        electricPower: "430",
        thermalPower: "505",
        electricEfficiency: "39,7",
        thermalEfficiency: "50,6",
        overallEfficiency: "90,3",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "107",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "MAN 530",
        id: 5,
        img: "MAN500.jpg",
        galery: ["MAN500.jpg", "MAN500.jpg", "MAN500.jpg", "MAN500.jpg"],
        as: "/man-500",
        motorMark: "MAN E3262 LE 202",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,63",
        voltage: "400, 6 300, 10 500",
        electricPower: "500",
        thermalPower: "652",
        electricEfficiency: "40,6",
        thermalEfficiency: "49,8",
        overallEfficiency: "90,4",
        fuelType:
          "Природный газ ГОСТ 5542-87, попутный нефтяной газ, пропан-бутановая смесь.",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "135",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      }
    ]
  },
  {
    category: "LIEBHERR",
    products: [
      {
        label: "LIEBHERR 230",
        id: 10,
        img: "liebherr-230.jpg",
        galery: ["230.jpg", "230.jpg", "230.jpg", "230.jpg"],
        as: "/LIEBHERR-230",
        motorMark: "Liebherr G946",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,74",
        voltage: "400",
        electricPower: "230",
        thermalPower: "262",
        electricEfficiency: "41,5",
        thermalEfficiency: "44,2",
        overallEfficiency: "85,7",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "59.2",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "LIEBHERR 300",
        id: 11,
        img: "liebherr-230.jpg",
        galery: ["230.jpg", "230.jpg", "230.jpg", "230.jpg"],
        as: "/LIEBHERR-300",
        motorMark: "Liebherr G9508",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1,7",
        voltage: "400",
        electricPower: "300",
        thermalPower: "340",
        electricEfficiency: "40",
        thermalEfficiency: "42",
        overallEfficiency: "82",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "78",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "LIEBHERR 500",
        id: 12,
        img: "liebherr-230.jpg",
        galery: ["230.jpg", "230.jpg", "230.jpg", "230.jpg"],
        as: "/LIEBHERR-500",
        motorMark: "Liebherr G9512",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.7",
        voltage: "400, 6 300, 10 500",
        electricPower: "500",
        thermalPower: "652",
        electricEfficiency: "40,6",
        thermalEfficiency: "49,8",
        overallEfficiency: "90,4",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "135",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "LIEBHERR 1000",
        id: 13,
        img: "liebherr-1000.jpg",
        galery: [
          "liebherr-1000-1.jpg",
          "liebherr-1000-2.jpg",
          "1000.jpg",
          "1000.jpg"
        ],
        as: "/LIEBHERR-1000",
        motorMark: "Liebherr G9620",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.7",
        voltage: "400, 6 300, 10 500",
        electricPower: "1 000",
        thermalPower: "1 100",
        electricEfficiency: "44",
        thermalEfficiency: "43,5",
        overallEfficiency: "87,5",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "20-200",
        nominalGazConsumption: "265",
        noiseLevel: "80",
        serviceInterval: "1 000 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      }
    ]
  },
  {
    category: "YAMZ",
    products: [
      {
        label: "ЯМЗ 100",
        id: 20,
        img: "yamz100.jpg",
        galery: [
          "yamz-100-1.jpg",
          "yamz-100-2.jpg",
          "yamz-100-3.jpg",
          "yamz-100-4.jpg"
        ],
        as: "/yamz-100",
        motorMark: "ЯМЗ 536 CNG",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.6",
        voltage: "400",
        electricPower: "100",
        thermalPower: "100",
        electricEfficiency: "44",
        thermalEfficiency: "43,5",
        overallEfficiency: "87,5",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "31.9",
        noiseLevel: "80",
        serviceInterval: "800 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "ЯМЗ 140",
        id: 21,
        img: "yamz140.jpg",
        galery: ["yamz140.jpg", "yamz140.jpg", "yamz140.jpg", "yamz140.jpg"],
        as: "/yamz-140",
        motorMark: "ЯМЗ 536 CNG",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.6",
        voltage: "400",
        electricPower: "140",
        thermalPower: "190",
        electricEfficiency: "44",
        thermalEfficiency: "43,5",
        overallEfficiency: "87,5",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "40",
        noiseLevel: "80",
        serviceInterval: "800 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "ЯМЗ 200",
        id: 22,
        img: "yamz200.jpg",
        galery: ["yamz200.jpg", "yamz200.jpg", "yamz200.jpg", "yamz200.jpg"],
        as: "/yamz-200",
        motorMark: "ТМЗ 8425",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.6",
        voltage: "400",
        electricPower: "200",
        thermalPower: "280",
        electricEfficiency: "29",
        thermalEfficiency: "40,6",
        overallEfficiency: "69,6",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "66",
        noiseLevel: "80",
        serviceInterval: "800 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      },
      {
        label: "ЯМЗ 300",
        id: 23,
        img: "yamz300.jpg",
        galery: ["yamz300.jpg", "yamz300.jpg", "yamz300.jpg", "yamz300.jpg"],
        as: "/yamz-300",
        motorMark: "ЯМЗ 850.10",
        gasMixer: "Motortech VariFuel2",
        controlBlock: "Motortech VariStep3",
        ignitionSystem: "Motortech MIC4",
        throttleValve: "Motortech ITB",
        excessAirRatio: "1.6",
        voltage: "400",
        electricPower: "280",
        thermalPower: "450",
        electricEfficiency: "30",
        thermalEfficiency: "47",
        overallEfficiency: "77",
        fuelType: "Природный газ",
        methaneNumber: "Более 80",
        gasPressure: "0,05",
        nominalGazConsumption: "40",
        noiseLevel: "80",
        serviceInterval: "800 моточасов",
        totalPowerPlant: "Не менее 15 лет",
        description:
          "Синхронный генератор: Leroy Somer, Stamford. Газовая линейка: Karl Dungs. Группа охлаждения: Alfa Laval. Насосное оборудование: Grundfos. Силовое оборудование: ABB. Система управления: Motortech AIO."
      }
    ]
  }
].map(link => {
  link.key = `nav-link-${link.id}-${link.electricPower}`;
  return link;
});

export default productsList;
