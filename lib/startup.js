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
    Tracker.autorun(function () {
      if(Meteor.userId() && !UserStatus.isMonitoring()){
        try {
          UserStatus.startMonitor({threshold:600000,interval:5000,idleOnBlur:false});
        }
        catch(err) {
          console.log(err);
        }
      }
    });
  }
  
  if(Meteor.isServer){
    process.env.HTTP_FORWARDED_COUNT = 1;
  }
}); 