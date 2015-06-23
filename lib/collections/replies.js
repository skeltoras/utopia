Replies = new Mongo.Collection('replies');

var Schema = {};

Schema.Reply = new SimpleSchema({
  messageId: {
    type: String,
    label: "Titel",
    optional: true   
  },
  replyTitle: {
    type: String,
    label: "Nachricht",
    optional: true  
  },  
  replyText: {
    type: String,
    label: "Nachricht",
    optional: true  
  },
  replyUser: {
    type: String,
    label: "User",
    optional: true  
  },
  replyReceiver: {             
    type: [Object],
    optional: true,
  },
  'replyReceiver.$.userId': {   
    type: String,
    optional: true
  },  
  'replyReceiver.$.userName': {   
    type: String,
    optional: true
  },  
  'replyReceiver.$.isNew': {   
    type: Boolean,
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

Replies.attachSchema(Schema.Reply);

Replies.allow({
  insert: function(){return true;},
  update: function(){return true;},
  remove: function(){return true;} // debug
});