//-- template onCreated functions
Template.globalFooter.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('');   
  });
});

//-- template onDestroyed functions
Template.globalFooter.onDestroyed(function () {
});

//-- template onRendered functions
Template.globalFooter.onRendered(function () {
});

//-- template helpers                            
Template.globalFooter.helpers({
});

//-- template events
Template.globalFooter.events({ 
  'click .scroll-top': function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");  
  } 
});