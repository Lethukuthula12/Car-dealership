const INITIAL_STATE = {
  sections: [
    {
      title: "BMW",
      imageUrl:
        "https://www.wsupercars.com/wallpapers/BMW/2020-BMW-M135i-005-1080.jpg",
      id: 1,
      linkUrl: "shop/bmw",
    },
    {
      title: "Bugatti",
      imageUrl:
        "https://www.wsupercars.com/wallpapers/Bugatti/2021-Bugatti-Chiron-Pur-Sport-002-1080.jpg",
      id: 2,
      linkUrl: "shop/bugatti",
    },
    {
      title: "Audi",
      imageUrl:
        "https://www.wsupercars.com/wallpapers/Audi/2018-Audi-E-Tron-GT-Concept-006-1080.jpg",
      id: 3,
      linkUrl: "shop/audi",
    },
    {
      title: "Volkswagen",
      imageUrl:
        "https://www.wsupercars.com/wallpapers/Volkswagen/2018-Volkswagen-Arteon-001-1080.jpg",
      size: "large",
      id: 4,
      linkUrl: "shop/volkswagen",
    },
    {
      title: "Rolls-Royce",
      imageUrl:
        "https://www.wsupercars.com/wallpapers/Rolls-Royce/2021-Rolls-Royce-Ghost-002-1080.jpg",
      size: "large",
      id: 5,
      linkUrl: "shop/rollsroyce",
    },
  ],
};

const directoryReducer =( state= INITIAL_STATE, action) =>{
  switch(action.type){

    default:
      return state;
  }
};

export default directoryReducer;