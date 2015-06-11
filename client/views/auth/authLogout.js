//-- template onCreated functions
Template.authLogout.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('');   
  });
});

//-- template onDestroyed functions
Template.authLogout.onDestroyed(function () {
});

//-- template onRendered functions
Template.authLogout.onRendered(function () {
});

//-- template helpers                            
Template.authLogout.helpers({
});

//-- template events
Template.authLogout.events({ 
  'submit form': function(event, template){
    event.preventDefault();
    Meteor.logout();
    Router.go('/');
  }
});