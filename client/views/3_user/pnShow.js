//-- template onCreated functions
Template.pnShow.onCreated(function () {
  var self = this;
  var pnId = Session.get('pnId');
  self.autorun(function () {
    self.subscribe('getSingleMessage', pnId);
  });
  Session.setDefault('reply', false);
});

//-- template onDestroyed functions
Template.pnShow.onDestroyed(function () {
  Session.set('reply', false);
});

//-- template onRendered functions
Template.pnShow.onRendered(function () {
  //var pnId = Session.get('pnId');
  //Meteor.call('setNew', pnId);
});

//-- template helpers                            
Template.pnShow.helpers({
  getMessage: function() {
    return Messages.findOne();
  },
  getUserData: function() {
    return Meteor.users.findOne({username: this.messageUser});
  },
  getAvatar: function() {
    Meteor.subscribe('getPublicAvatar', this.slug);
    return Images.findOne({'metadata.userId': this._id, 'metadata.assignedObject': 'userAvatar'});  
  },
  getReplyForm: function() {
    return Session.get('reply');
  }
});

//-- template events
Template.pnShow.events({ 
  'click .getUserLink': function(e) {
    e.preventDefault();
    var user = e.currentTarget.id;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    Router.go('/profile/' + user);
  },
  'click #reply': function(e) {
    e.preventDefault();
    Session.set('reply', true);
  }  
});