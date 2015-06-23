LandingController = RouteController.extend({
  layoutTemplate: 'landingLayout'
});

Router.route('/', function (){ 
  this.render('landing');
}, {
  name: 'landing',
  controller: 'LandingController'
});