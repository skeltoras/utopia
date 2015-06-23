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
        if(result)
          Router.go('/user/edit');
      })      
      this.next();
    }
  }
});

/** PUBLIC **/
Router.route('/dashboard', function (){ 
  this.render('dashboard');
}, {
  name: 'dashboard',
  controller: 'GlobalController'
});

Router.route('/calendar', function (){ 
  this.render('calendar', {
    waitOn: function() {
      return Meteor.subscribe('getAllCalendarEntries');
    },
    data: function() {
      Meteor.subscribe('getAllCalendarEntries');
      return Calendar.find().fetch();
    }
  });
}, {
  name: 'calendar',
  controller: 'GlobalController'
});

Router.route('/newgame', function (){ 
  this.render('gameNew');
}, {
  name: 'game.new',
  controller: 'GlobalController'
});

Router.route('/news', function (){ 
  this.render('news');
}, {
  name: 'news',
  controller: 'GlobalController'
});

Router.route('/userlist', function (){ 
  this.render('userList');
}, {
  name: 'user.list',
  controller: 'GlobalController'
});


// ***** PROFILES / USER **** //
Router.route('/user/show/:slug', function (){ 
  this.render('profileShow', {
    data: function() {
      Session.set('profile', this.params.slug);
    }
  });
}, {
  name: 'user.show',
  controller: 'GlobalController'
});

Router.route('/profile/:slug', function (){ 
  this.render('profileShow', {
    data: function() {
      Session.set('profile', this.params.slug);
    }
  });
}, {
  name: 'profile.show',
  controller: 'GlobalController'
});

Router.route('/user/edit', function (){ 
  this.render('userEdit');
}, {
  name: 'user.edit',
  controller: 'GlobalController'
});

Router.route('/user/settings', function (){ 
  this.render('userSettings');
}, {
  name: 'user.settings',
  controller: 'GlobalController'
});

Router.route('/user/entries', function (){ 
  this.render('userEntries');
}, {
  name: 'user.entries',
  controller: 'GlobalController'
});

Router.route('/user/calendar', function (){ 
  this.render('userCalendar');
}, {
  name: 'user.calendar',
  controller: 'GlobalController'
});

Router.route('/user/messages/list', function (){ 
  this.render('pnList');
}, {
  name: 'user.pn.list',
  controller: 'GlobalController'
});

Router.route('/user/messages/new', function (){ 
  this.render('pnNew');
}, {
  name: 'user.pn.new',
  controller: 'GlobalController'
});

Router.route('/user/messages/show/:_id', function (){ 
  this.render('pnShow', {
    data: function() {
      Session.set('pnId', this.params._id);
    }
  });
}, {
  name: 'user.pn.show',
  controller: 'GlobalController'
});

Router.route('/user/messages/edit/:_id', function (){ 
  this.render('pnEdit');
}, {
  name: 'user.pn.edit',
  controller: 'GlobalController'
});

/*
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

*/