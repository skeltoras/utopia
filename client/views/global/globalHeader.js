//-- template onCreated functions
Template.globalHeader.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('');   
  });
});

//-- template onDestroyed functions
Template.globalHeader.onDestroyed(function () {
});

//-- template onRendered functions
Template.globalHeader.onRendered(function () {
  $(document).ready(function(){
    $(".header").sticky({topSpacing:0});
  });
});

//-- template helpers                            
Template.globalHeader.helpers({
});

//-- template events
Template.globalHeader.events({ 
});