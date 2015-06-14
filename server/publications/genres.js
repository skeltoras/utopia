Meteor.publish('getAllGenres', function() {
  return Genres.find();
});