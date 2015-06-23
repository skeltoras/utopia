//-- template onCreated functions
Template.gameNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('getAllGames');  
    //self.subscribe('getAllGenres'); //DEBUG 
    self.subscribe('getAllListedGames');   
  });
});

//-- template onDestroyed functions
Template.gameNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.gameNew.onRendered(function () {
  $('.clockpicker').clockpicker({
    donetext: 'Fertig',
    placement: 'right'
  });
  $("#gameOwnServer").bootstrapSwitch();
  $(".count").text("Zeichen übrig: 200");
  Meteor.typeahead.inject();
});

//-- template helpers                            
Template.gameNew.helpers({
  getTime: function(){
    var currentdate = new Date();
    var time = ('0' + currentdate.getHours()).slice(-2) + ':' + ('0' + currentdate.getMinutes()).slice(-2);
    return time;
  },
  gameList: function() {
    return GameList.find().fetch().map(function(object){ return {id: object._id, value: object.gameTitle}; });
  }
});

//-- template events
Template.gameNew.events({
  'submit form': function(e, tpl) {
    e.preventDefault();
    
    var gameTitle = $(e.target).find('[name=gameTitle]').val();
    //var gameType = $(e.target).find('[name=gameType]').val();
    if(gameTitle) {
      var gameData = [];
      var gameDateDay = $(e.target).find('[name=gameDateDay]').val();
      gameDateDay = moment().add(gameDateDay, 'days').format('YYYY-MM-DD');  
      var gameDateTime = $(e.target).find('[name=gameDateTime]').val();
      var gameDate = gameDateDay + ' ' + gameDateTime;
      gameTitle = s.capitalize(gameTitle);
      var gameOwnServer = false;
      if($(e.target).find('[name=gameOwnServer]').is(':checked')) {
        gameOwnServer = true;   
      }
      
      gameData = {
        gameTitle: gameTitle,
        //gameType: $(e.target).find('[name=gameType]').val(),
        gameInfotext: $(e.target).find('[name=gameInfotext]').val(),
        //gamePlayerMin: $(e.target).find('[name=gamePlayerMin]').val(),
        gamePlayerMax: $(e.target).find('[name=gamePlayerMax]').val(),
        gameDate: gameDate,
        gameCount: 0,
        gameOwnServer: gameOwnServer,
        gameServer: $(e.target).find('[name=gameServer]').val(),
        gameUser: Meteor.user().profile.nickname,
        submitted: new Date().getTime(), 
        updatedAt: new Date().getTime()
      }
      Meteor.call('newEntry', gameData, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error.reason);
        if(result) {
          //toastr.success('Eintrag für ' + gameTitle + ' erfolgreich angelegt');
          Router.go('dashboard');        
        }
      });
    } else {
      toastr.error('Ein Spiel muss zwingend angegeben werden!');
    } 
  },
  'keyup #gameInfotext': function(e, tpl) {
    $(".count").text("Zeichen übrig: " + (200 - $('#gameInfotext').val().length));
  }
});