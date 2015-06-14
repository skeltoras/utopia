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
      Meteor.call('checkFirstLogin', function(error,result){
        if(result) {
          var path = '/ucp/' + result;
          console.log(path);
          Router.go(path);
        }
      })      
      this.next();
    }
  }
});

Router.route('/home', function (){ 
  this.render('home', {
    data: function() {
      //return Games.find().fetch();
    }
  });
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

// ***** ALL **** //
Router.route('/calendar', function (){ 
  this.render('calendarAll', {
    waitOn: function() {
      return Meteor.subscribe('getAllCalendarEntries');
    },
    data: function() {
      Meteor.subscribe('getAllCalendarEntries');
      return Calendar.find().fetch();
    }
  });
}, {
  name: 'galendarAll',
  controller: 'GlobalController'
});

Router.route('/game/new', function (){ 
  this.render('gameNew');
}, {
  name: 'game.new',
  controller: 'GlobalController'
});

// ***** PROFILES **** //
Router.route('/ucp/:slug', function (){ 
  this.render('profileUCP', {
    data: function() {
      //return Meteor.users.findOne({});
    }
  });
}, {
  name: 'ucp',
  controller: 'GlobalController'
});

Router.route('/profil/:slug', function (){ 
  this.render('profileShow', {
    data: function() {
      Session.set('profile', this.params.slug);
      //return Meteor.users.findOne({slug: this.params.slug});
    }
  });
}, {
  name: 'profile.show',
  controller: 'GlobalController'
});