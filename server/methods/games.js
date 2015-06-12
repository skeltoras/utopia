Meteor.methods({
  newEntry: function(gameData) {
    return Games.insert(gameData);
  }
})