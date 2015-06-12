Meteor.startup(function () {
  if(Meteor.isClient) {
    console.log('[!]APP gestartet');
    console.log('================');
    var addClass = '';
    var domainPath = window.location.hostname;
    var parts = domainPath.split('.');
    if(parts[0]==='www') {
      addClass = parts[1];  
    } else {
      addClass = parts[0];  
    }
    $('body').addClass(addClass);
    //moment.locale('de');
  }
  
  if(Meteor.isServer){
  }
}); 