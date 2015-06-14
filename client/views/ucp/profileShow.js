//-- template onCreated functions
Template.profileShow.onCreated(function () {
  var self = this;
  var user = Session.get('profile');
  Session.set('isOwn', false);
  self.autorun(function () {
    self.subscribe('getProfileData', user); 
    self.subscribe('getPublicAvatar', user);  
  });
});

//-- template onDestroyed functions
Template.profileShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.profileShow.onRendered(function () {
});

//-- template helpers                            
Template.profileShow.helpers({
  showProfileData: function(){
    var slug = Session.get('profile');
    var data = Meteor.users.findOne({slug: slug});
    if(data._id==Meteor.userId()){
      Session.set('isOwn', true);
    }
    return data;
  },
  getIsOwn: function() {
    return Session.get('isOwn');
  },
  getAvatar: function() {
    var slug = Session.get('profile');
    return Images.findOne({'metadata.userSlug': slug, 'metadata.assignedObject': 'userAvatar'});  
  }
});

//-- template events
Template.profileShow.events({ 
});