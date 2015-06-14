Meteor.startup(function () {
  if(Meteor.isServer){
    Games.remove({});
    GameList.remove({});
    Genres.remove({});
    Calendar.remove({});
    GameList.insert({
      gameTitle: 'Battlefield 2',
      gameDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    GameList.insert({
      gameTitle: 'Battlefield 3',
      gameDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    }); 
    GameList.insert({
      gameTitle: 'Battlefield 4',
      gameDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    GameList.insert({
      gameTitle: 'Minecraft',
      gameDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Action',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Adventure',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Casual',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'MMO',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'MOBA',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Misc',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Puzzle',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'RPG',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Sandbox',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Strategie',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Shooter',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Simulation',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Sport',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
    Genres.insert({
      genreTitle: 'Survival',
      genreDesc: '',    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()
    });
  }
}); 