Genres = new Mongo.Collection('genres');

var Schema = {};

Schema.Genre = new SimpleSchema({
  genreTitle: {
    type: String,
    label: "Titel",
    optional: true   
  },
  genreDesc: {
    type: String,
    label: "Genre",
    optional: true   
  },
  submitted: {
    type: Date,
    optional: true
  },
  updatedAt: {
    type: Date,
    optional: true
  }
});

Genres.attachSchema(Schema.Genre);

Genres.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});