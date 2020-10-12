const SHOP_DATA = {
  bmw: {
    id: 1,
    title: "BMW",
    routeName: "bmw",
    items: [
      {
        id: 1,
        name: "BMW 4-Series",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2021-BMW-4-Series-002-1080.jpg",
        price: 500000,
      },
      {
        id: 2,
        name: "Blue BMW M135i",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2020-BMW-M135i-002-1080.jpg",
        price: 1100000,
      },
      {
        id: 3,
        name: "2020 BMW M235i Gran Coupe",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2020-BMW-M235i-Gran-Coupe-001-1080.jpg",
        price: 350000,
      },
      {
        id: 4,
        name: "2021 BMW M3 Competition",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2021-BMW-M3-Competition-005-1080.jpg",
        price: 1500000,
      },
      {
        id: 5,
        name: "2019 BMW M3 CS",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2018-BMW-M3-CS-008-1080.jpg",
        price:250000,
      },
      {
        id: 6,
        name: "2013 BMW M3 Frozen Edition",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2013-BMW-M3-Frozen-Edition-001-1080.jpg",
        price: 300000,
      },
      {
        id: 7,
        name: "2012 BMW M3 DTM Champion Edition",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2012-BMW-M3-DTM-Champion-Edition-003-1080.jpg",
        price: 256000,
      },
      {
        id: 8,
        name: "2011 BMW M3 CTR",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2011-BMW-M3-CTR-001-1080.jpg",
        price: 521000,
      },
      {
        id: 9,
        name: "2001 BMW M3 Coupe",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2001-BMW-M3-Coupe-001-1080.jpg",
        price: 782000,
      },
      {
        id: 10,
        name: "2009 BMW M3 Coupe GT2",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2009-BMW-M3-Coupe-GT2-002-1080.jpg",
        price: 2510001,
      },
      {
        id: 12,
        name: "2009 BMW M3 Coupe GT2",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/2007-BMW-M3-Concept-002-1080.jpg",
        price: 1520002,
      },
      {
        id: 13,
        name: "1989 BMW M3 Sport Evolution",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/BMW/1989-BMW-M3-Sport-Evolution-001-1080.jpg",
        price: 1684500,
      },
    ],
  },
  audi: {
    id: 2,
    title: "AUDI",
    routeName: "audi",
    items: [
      {
        id: 14,
        name: "2020 Audi Q4 Sportback E-Tron Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2020-Audi-Q4-Sportback-e-tron-Concept-001-1080.jpg",
        price: 980000,
      },
      {
        id: 15,
        name: "2014 Audi A3 Clubsport Quattro Concept ",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2014-Audi-A3-Clubsport-Quattro-Concept-001-1080.jpg",
        price: 851020,
      },
      {
        id: 16,
        name: "2012 Audi A1 Sportback",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2012-Audi-A1-Sportback-001-1080.jpg",
        price: 110201,
      },
      {
        id: 17,
        name: "2008 Audi A3 TDI Clubsport Quattro",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2008-Audi-A3-TDI-Clubsport-Quattro-002-1080.jpg",
        price: 162500,
      },
      {
        id: 18,
        name: "2019 Audi AI-TRAIL Quattro Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2019-Audi-AI-TRAIL-Quattro-Concept-001-1080.jpg",
        price: 1605210,
      },
      {
        id: 19,
        name: "2018 Audi E-Tron GT Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2018-Audi-E-Tron-GT-Concept-001-1080.jpg",
        price: 960200,
      },
      {
        id: 20,
        name: "2017 Audi Aicon Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2017-Audi-Aicon-Concept-001-1080.jpg",
        price: 592000,
      },
      {
        id: 22,
        name: "2015 Audi E-Tron Quattro Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2015-Audi-E-Tron-Quattro-Concept-001-1080.jpg",
        price: 205400,
      },
      {
        id: 23,
        name: "2013 Audi Nanuk Quattro Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2013-Audi-Nanuk-Quattro-Concept-001-1080.jpg",
        price: 234250,
      },
      {
        id: 24,
        name: "2010 Audi Quattro Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2010-Audi-Quattro-Concept-001-1080.jpg",
        price: 245500,
      },
      {
        id: 25,
        name: "2009 Audi E-Tron Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Audi/2009-Audi-E-Tron-Concept-001-1080.jpg",
        price: 202510,
      },
    ],
  },
  bugatti: {
    id: 3,
    title: "Bugatti",
    routeName: "bugatti",
    items: [
      {
        id: 26,
        name: "Bugatti Chiron Super Sport 300",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2021-Bugatti-Chiron-Super-Sport-300-003-1080.jpg",
        price: 1255500,
      },
      {
        id: 27,
        name: "2019 Bugatti La Voiture Noire",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2019-Bugatti-La-Voiture-Noire-003-1080.jpg",
        price: 2599000,
      },
      {
        id: 28,
        name: "2019 Bugatti Chiron Sport '110 ans Bugatti",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2019-Bugatti-Chiron-Sport-110-ans-Bugatti-002-1080.jpg",
        price: 900000,
      },
      {
        id: 29,
        name: "2009 Bugatti 16C Galibier Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2009-Bugatti-16C-Galibier-Concept-001-1080.jpg",
        price: 1650000,
      },
      {
        id: 30,
        name: "2019 Bugatti Chiron Sport",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2019-Bugatti-Chiron-Sport-001-1080.jpg",
        price: 3850000,
      },
      {
        id: 31,
        name: "2017 Bugatti Chiron",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2017-Bugatti-Chiron-001-1080.jpg",
        price: 12500000,
      },
      {
        id: 32,
        name: "1951 Bugatti Type 101 Coupe",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/1951-Bugatti-Type-101-Coupe-001-1080.jpg",
        price: 185000,
      },
      {
        id: 33,
        name: "1937 Bugatti Type 57S Coupe",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/1937-Bugatti-Type-57S-Coupe-001-1080.jpg",
        price: 97000,
      },
      {
        id: 34,
        name: "1936 Bugatti Type 57SC Atlantic Coupe",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/1936-Bugatti-Type-57SC-Atlantic-Coupe-001-1080.jpg",
        price: 89000,
      },
      {
        id: 35,
        name: "2015 Bugatti Veyron Grand Sport Vitesse La Finale",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Bugatti/2015-Bugatti-Veyron-Grand-Sport-Vitesse-La-Finale-001-1080.jpg",
        price: 1280000,
      }
    ],
  },
  volkswagen: {
    id: 4,
    title: "Volkswagen",
    routeName: "volkswagen",
    items: [
      {
        id: 36,
        name: "2021 Volkswagen Arteon R",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2021-Volkswagen-Arteon-R-005-1080.jpg",
        price: 285000,
      },
      {
        id: 37,
        name: "2017 Volkswagen Golf GTI Clubsport S",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2017-Volkswagen-Golf-GTI-Clubsport-S-006-1080.jpg",
        price: 500000,
      },
      {
        id: 38,
        name: "2021 Volkswagen Golf GTI",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2021-Volkswagen-Golf-GTI-002-1080.jpg",
        price: 650000,
      },
      {
        id: 39,
        name: "2016 Volkswagen Beetle LSR",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2016-Volkswagen-Beetle-LSR-001-1080.jpg",
        price: 350000,
      },
      {
        id: 40,
        name: "2012 Volkswagen CC",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2012-Volkswagen-CC-002-1080.jpg",
        price: 250000,
      },
      {
        id: 41,
        name: "2016 Volkswagen Golf GTI TCR",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2016-Volkswagen-Golf-GTI-TCR-002-1080.jpg",
        price: 700000,
      },
      {
        id: 42,
        name: "2014 Volkswagen Golf GTI",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2014-Volkswagen-Golf-GTI-009-1080.jpg",
        price: 450000,
      },
      {
        id: 43,
        name: "2019 Volkswagen Atlas Cross Sport R Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2019-Volkswagen-Atlas-Cross-Sport-R-Concept-003-1080.jpg",
        price: 1550000,
      },
      {
        id: 44,
        name: "2015 Volkswagen Golf GTE Sport Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2015-Volkswagen-Golf-GTE-Sport-Concept-004-1080.jpg",
        price: 1825400,
      },
      {
        id: 45,
        name: "2015 Volkswagen Golf GTD Variant",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Volkswagen/2015-Volkswagen-Golf-GTD-Variant-001-1080.jpg",
        price: 895000,
      },
    ],
  },
  rollsroyce: {
    id: 5,
    title: "Rolls-Royce",
    routeName: "rollsroyce",
    items: [
      {
        id: 46,
        name: "2016 Rolls-Royce 103EX Vision Next 100 Concept",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2016-Rolls-Royce-103EX-Vision-Next-100-Concept-002-1080.jpg",
        price: 9982460,
      },
      {
        id: 47,
        name: "2021 Rolls-Royce Ghost",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2021-Rolls-Royce-Ghost-001-1080.jpg",
        price: 2552150,
      },
      {
        id: 48,
        name: "2017 Rolls-Royce Dawn",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2017-Rolls-Royce-Dawn-006-1080.jpg",
        price: 3224100,
      },
      {
        id: 49,
        name: "2019 Rolls-Royce Cullinan",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2019-Rolls-Royce-Cullinan-007-1080.jpg",
        price: 52548000,
      },
      {
        id: 50,
        name: "2017 Rolls-Royce Phantom",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2017-Rolls-Royce-Phantom-001-1080.jpg",
        price: 2521580,
      },
      {
        id: 51,
        name: "2017 Rolls-Royce Wraith",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2017-Rolls-Royce-Wraith-010-1080.jpg",
        price: 3251284,
      },
      {
        id: 52,
        name: "2014 Rolls-Royce Wraith",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2014-Rolls-Royce-Wraith-001-1080.jpg",
        price: 3250284,
      },
      {
        id: 53,
        name: "2014 Rolls-Royce Phantom Drophead Coupe Waterspeed",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2014-Rolls-Royce-Phantom-Drophead-Coupe-Waterspeed-Collection-002-1080.jpg",
        price: 1350184,
      },
      {
        id: 54,
        name: "2012 Rolls-Royce Phantom Coupe Aviator Collection",
        imageUrl:
          "https://www.wsupercars.com/wallpapers/Rolls-Royce/2012-Rolls-Royce-Phantom-Coupe-Aviator-Collection-001-1080.jpg",
        price: 1251100,
      },
    ],
  },
};

export default SHOP_DATA;
