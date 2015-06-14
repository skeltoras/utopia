Meteor.publish('getAllListedGames', function() {
  return GameList.find();
});