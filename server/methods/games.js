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
    calendarData = {
      title: gameData.gameTitle + " / "  + gameData.gameUser,
      allDay: false,
      start: entryStart,
      //end: entryEnd,    
      submitted: new Date().getTime(),
      updatedAt: new Date().getTime()    
    }
    Calendar.insert(calendarData);
    return Games.insert(gameData);
  },
  addUserToGame: function(gameId) {
    var userId = this.userId;
    var userData = Meteor.users.findOne({_id: userId});
    var userName = userData.username;
    var gameData = Games.findOne({_id: gameId});
    if(userName == gameData.gameUser) {
      throw new Meteor.Error( 500, 'Du kannst nicht deinem eigenen Spiel beitreten' );
    } else {
      var gamePlayers = [];
      gamePlayers = {
        userId: userId,
        userName: userName  
      };
      return Games.update(gameId, {$inc: {gameCount: 1}, $addToSet: {gamePlayers: gamePlayers}});
    }
  },
  removeUserFromGame: function(gameId) {
    var userId = this.userId;
    var userData = Meteor.users.findOne({_id: userId});
    var gamePlayers = [];
    gamePlayers = {
      userId: userId,
      userName: userData.username  
    };
    return Games.update(gameId, {$inc: {gameCount: -1}, $pull: {gamePlayers: gamePlayers}});
  }
})