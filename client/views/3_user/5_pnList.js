//-- template onCreated functions
Template.pnList.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAllMessages');  //DEBUG
    //self.subscribe('getUnreadMessages');  //DEBUG
  });
  Session.setDefault('pnInbox', true);
  Session.setDefault('pnOutbox', false);
  Session.setDefault('pnArchive', false);
});

//-- template onDestroyed functions
Template.pnList.onDestroyed(function () {
  Session.set('pnInbox', true);
  Session.set('pnOutbox', false);
  Session.set('pnArchive', false);
});

//-- template onRendered functions
Template.pnList.onRendered(function () {
});

//-- template helpers                            
Template.pnList.helpers({
  getInbox: function() {
    return Session.get('pnInbox');
  },
  getArchive: function() {
    return Session.get('pnArchive');
  },
  getOutbox: function() {
    return Session.get('pnOutbox');
  }
});
                          
Template.pnInbox.helpers({
  getMessages: function() {
    var userId = Meteor.userId();
    var data = [];
    Messages.find().fetch().map(function(object){
      var check = false;
      object.messageReceiver.map(function(user){
        if(user.userId == userId && user.isNew == true) {
          check = true;
        }    
      })
      if(check == true) {
        data.push(object);  
      }
    });
    return data;
  },
  checkNew: function() {
    var userList = this.messageReceiver;
    var check = false;
    userList.forEach(function(user){
      if(user.userId == Meteor.userId() && user.isNew == true) {
        check = true;
      }  
      console.log(check);
    }); 
    return check;
  }
});

Template.pnArchive.helpers({
  getMessages: function() {
    var userId = Meteor.userId();
    var data = [];
    Messages.find().fetch().map(function(object){
      var check = false;
      object.messageReceiver.map(function(user){
        if(user.userId == userId && user.isNew == false) {
          check = true;
        }    
      })
      if(check == true) {
        data.push(object);  
      }
    });
    return data;
  }
});

Template.pnOutbox.helpers({
  getMessages: function() {
    var user = Meteor.user().profile.nickname;    
    var messageList = Messages.find({messageUser: user}, {sort: {submitted: -1}}).fetch();
    return messageList;
  }
});

//-- template events
Template.pnList.events({
  'click .pnInbox': function(e) {
    e.preventDefault();
    Session.set('pnInbox', true);
    Session.set('pnOutbox', false);
    Session.set('pnArchive', false);  
  },
  'click .pnArchive': function(e) {
    e.preventDefault();
    Session.set('pnInbox', false);
    Session.set('pnOutbox', false);
    Session.set('pnArchive', true);  
  },
  'click .pnOutbox': function(e) {
    e.preventDefault();
    Session.set('pnInbox', false);
    Session.set('pnOutbox', true);
    Session.set('pnArchive', false);  
  },
  'click #pnNew': function(e) {
    e.preventDefault();
    Router.go('/user/messages/new');  
  },
  'click .getUserLink': function(e) {
    e.preventDefault();
    var user = e.currentTarget.id;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    Router.go('/profile/' + user);
  }  
});