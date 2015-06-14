Meteor.methods({
  newEntry: function(gameData) {
    var gameTitle = gameData.gameTitle;
    if(GameList.find({gameTitle: gameTitle}).count()== 0){
      gameListData = [];
      gameListData = {
        gameTitle: gameTitle,
        gameDesc: '',    
        submitted: new Date().getTime(),
        updatedAt: new Date().getTime()    
      }
      GameList.insert(gameListData);
    }
    var calendarData = [];
    var entryStart = gameData.gameDate;
    var entryEnd = moment(entryStart).add(2, 'hours');
    entryEnd = moment(entryEnd).format('YYYY-MM-DD HH:MM');
    console.log(entryStart + ' | ' + entryEnd); //DEBUG
    calendarData = {
      title: gameData.gameTitle + " / "  + gameData.gameUser,
      allDay: false,
      start: entryStart,
      end: entryEnd,    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()    
    }
    Calendar.insert(calendarData);
    return Games.insert(gameData);
  }
})