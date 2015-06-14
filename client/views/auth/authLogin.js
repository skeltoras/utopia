//@since v0.11.0

//-- template created functions
Template.authLogin.created = function(){
};

//-- template destroyed functions
Template.authLogin.destroyed = function(){
};

//-- template rendered functions
Template.authLogin.rendered = function(){
};

//-- template helpers
Template.authLogin.helpers({
});

//-- template events
Template.authLogin.events({
  'submit form': function(evt, tpl){
    event.preventDefault();
    var loginVar = tpl.find('#login-user').value;;
    var passwordVar = tpl.find('#login-password').value;
    var uid = Meteor.loginWithPassword(loginVar, passwordVar, function(err){
      if(err) {
        toastr.warning(err.reason);
      }
      else {       
        Router.go('/dashboard');        
      }        
    });
    return false;
  }    
});