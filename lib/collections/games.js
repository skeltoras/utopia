Games = new Mongo.Collection('games');

var Schema = {};

Schema.Game = new SimpleSchema({
  gameTitle: {
    type: String,
    label: "Titel",
    optional: true   
  },
  gameType: {
    type: String,
    label: "Genre",
    optional: true   
  },
  gameInfotext: {
    type: String,
    label: "Freitext",
    optional: true   
  }, 
  gamePlayerMin: {
    type: String,
    label: "Mindestanzahl Spieler",
    optional: true   
  },
  gamePlayerMax: {
    type: String,
    label: "Maximale Anzahl Spieler",
    optional: true   
  },
  gameServer: {
    type: String,
    label: "Server",
    optional: true   
  },
  gameOwnServer: {
    type: Boolean,
    label: "Eigener Server" 
  },
  gameDate: {   
    type: Date,
    label: "Zeitpunkt",
    optional: true   
  },  
  gameUser: {
    type: String,
    label: "User",
    optional: true   
  },
  gameCount: {
    type: Number,
    label: "Count",
    optional: true   
  },
  gamePlayers: {             
    type: [Object],
    optional: true,
  },
  'gamePlayers.$.userId': {   
    type: String,
    optional: true
  },  
  'gamePlayers.$.userName': {   
    type: String,
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

Games.attachSchema(Schema.Game);

Games.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});