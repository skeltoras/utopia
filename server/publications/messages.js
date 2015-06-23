Meteor.publish('getAllMessages', function() {
  return Messages.find();
});

Meteor.publish('getSingleMessage', function(pnId) {
  var message = Messages.findOne({_id: pnId});
  var user = message.messageUser;
  var userId = this.userId;   
  var userData = Meteor.users.findOne(this.userId);
  var check = false;
  message.messageReceiver.map(function(user){
    if(user.userId == userId) {
      check = true;
    }
  });

  if(message.messageUser == userData.username || check == true ) {
    return [
      Messages.find({_id: pnId}), 
      Replies.find({messageId: pnId}),
      Meteor.users.find({username: user}, {fields: {'profile': 1, 'slug': 1, 'username': 1}})  
    ];
  } else {
    throw new Meteor.Error(500, 'Du hast keinen Zugriff auf diese Nachricht');
  }
});
