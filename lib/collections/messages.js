Messages = new Mongo.Collection('messages');

var Schema = {};

Schema.Message = new SimpleSchema({
  messageTitle: {
    type: String,
    label: "Titel",
    optional: true   
  },
  messageText: {
    type: String,
    label: "Nachricht",
    optional: true  
  },
  messageUser: {
    type: String,
    label: "User",
    optional: true  
  },
  messageReceiver: {             
    type: [Object],
    optional: true,
  },
  'messageReceiver.$.userId': {   
    type: String,
    optional: true
  },  
  'messageReceiver.$.userName': {   
    type: String,
    optional: true
  },  
  'messageReceiver.$.isNew': {   
    type: Boolean,
    optional: true
  },
  messageReplies: {             
    type: [Object],
    optional: true,
  },
  'messageReplies.$.replyId': {   
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

Messages.attachSchema(Schema.Message);

Messages.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});