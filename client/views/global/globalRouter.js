GlobalController = RouteController.extend({
  layoutTemplate: 'globalLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  before: function() {
    if (! Meteor.user()) {
      if (Meteor.loggingIn()){
        this.render(this.loadingTemplate);
      } else {
        this.redirect('/login');
        this.next();
      }
    } else {
      this.next();
    }
  }
});

Router.route('/home', function (){ 
  this.render('home');
}, {
  name: 'home',
  controller: 'GlobalController'
});

Router.route('/dashboard', function (){ 
  this.render('home');
}, {
  name: 'dashboard',
  controller: 'GlobalController'
});