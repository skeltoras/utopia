Meteor.publish('getAllGames', function() {
  return Games.find();
});