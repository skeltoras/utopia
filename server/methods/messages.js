Meteor.methods({  
  newMessage: function(message) {
    return Messages.insert(message);
  },
  setNew: function(pnId) {
    var userId = this.userId;
    var userData = Meteor.users.findOne(userId);
    var data = [];
    data = {
      userId: userId,
      userName: userData.username,
      isNew: false
    }
    var oldValue = Messages.update(pnId, {$pull: { messageReceiver: {userId: userId} }});
    return Messages.update(pnId, {$addToSet: { messageReceiver: data }}); 
  },
  newReply: function(messageId, reply) {
    var userId = this.userId;
    var userData = Meteor.users.findOne({_id: userId});
    var messageData = Messages.findOne({_id: messageId});
    var oldUser = messageData.messageUser;
    var oldUserData = Meteor.users.findOne({username: oldUser});    
    var i = 1;
    var replyReceiverData = [];
    var replyReceiver = [];
    
    replyReceiverData = messageData.messageReceiver;
    
    replyReceiver[0] = {
      userId: oldUserData._id,
      userName: oldUserData.username,
      isNew: true  
    };
    
    replyReceiverData.forEach(function(receiver){
      if(receiver.userId == userId) {
        //do nothing
      } else {
        replyReceiver[i] = {
          userId: receiver.userId,
          userName: receiver.userName,
          isNew: true
        };
        i++; 
      } 
    });

    var replyData = [];
    replyData = {
      messageId: messageId,
      replyTitle: '[RE]: ' + messageData.messageTitle,
      replyText: reply.replyText,
      replyUser: userData.username,
      replyReceiver: replyReceiver, 
      submitted: reply.submitted, 
      updatedAt: reply.updatedAt
    }
    return Replies.insert(replyData);
  }
})