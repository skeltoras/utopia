//-- template onCreated functions
Template.landing.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('');
  });
  $('body').addClass('landing'); 
});

//-- template onDestroyed functions
Template.landing.onDestroyed(function () {
  $('body').removeClass('landing');
});

//-- template onRendered functions
Template.landing.onRendered(function () {
});

//-- template helpers                            
Template.landing.helpers({
  domain: function(){
    var domain = '';
    var domainPath = window.location.hostname;
    var parts = domainPath.split('.');
    if(parts[0]==='www') {
      parts[1] = parts[1].toUpperCase();
      domain = '<small>' + parts[0] + '.</small>' + parts[1] + '<small>.' + parts[2] + '</small>';  
    } else {
      parts[0] = parts[0].toUpperCase();
      domain = parts[0] + '<small>.' + parts[1] + '</small>';  
    }
    return domain;
  }
});

//-- template events
Template.landing.events({ 
});