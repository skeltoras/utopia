GameList = new Mongo.Collection('gameList');

var Schema = {};

Schema.GameList = new SimpleSchema({
  gameTitle: {
    type: String,
    label: "Titel",
    optional: true   
  },
  gameDesc: {
    type: String,
    label: "Beschreibung",
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

GameList.attachSchema(Schema.GameList);

GameList.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});