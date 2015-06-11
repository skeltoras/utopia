//-- template onCreated functions
Template.authLayout.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('');
  });
  $('body').addClass('auth'); 
});

//-- template onDestroyed functions
Template.authLayout.onDestroyed(function () {
  $('body').removeClass('auth');
});

//-- template onRendered functions
Template.authLayout.onRendered(function () {
});

//-- template helpers                            
Template.authLayout.helpers({
});

//-- template events
Template.authLayout.events({ 
});