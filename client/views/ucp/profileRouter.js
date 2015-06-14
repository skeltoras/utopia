/*
ProfileController = RouteController.extend({
  layoutTemplate: 'globalLayout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn:function(){
    //return Meteor.subscribe('userProfile',this.params.slug);
  },
  data:function(){
    return Meteor.subscribe('userProfile',this.params.slug);
    /*
    var slug=Router.current().params.slug;
    return Meteor.users.findOne({
      slug:slug
    });
  },
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

// ***** PROFILES **** //
Router.route('/ucp/:slug', function (){ 
  this.render('profileUCP', {
    data: function() {
      //return Meteor.users.findOne({});
    }
  });
}, {
  name: 'ucp',
  controller: 'ProfileController'
});

Router.route('/profil/:slug', function (){ 
  this.render('profileShow', {
    data: function() {
      return Meteor.users.findOne({slug: this.params.slug});
    }
  });
}, {
  name: 'profile.show',
  controller: 'ProfileController'
});
*/