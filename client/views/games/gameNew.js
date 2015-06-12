//-- template onCreated functions
Template.gameNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAllGames'); //DEBUG   
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
  $(".count").text("Zeichen übrig: 200");
});

//-- template helpers                            
Template.gameNew.helpers({
  getTime: function(){
    var currentdate = new Date();
    return currentdate.getHours() + ":" + currentdate.getMinutes();
  }
});

//-- template events
Template.gameNew.events({
  'submit form': function(e, tpl) {
    e.preventDefault();
    
    var gameTitle = $(e.target).find('[name=gameTitle]').val();
    if(gameTitle) {
      var gameData = [];
      var gameDateDay = $(e.target).find('[name=gameDateDay]').val();
      gameDateDay = moment().add(gameDateDay, 'days').format('YYYY-MM-DD');  
      var gameDateTime = $(e.target).find('[name=gameDateTime]').val();
      var gameDate = gameDateDay + ' ' + gameDateTime;
      gameData = {
        gameTitle: gameTitle,
        gameType: $(e.target).find('[name=gameType]').val(),
        gameInfotext: $(e.target).find('[name=gameInfotext]').val(),
        gamePlayerMin: $(e.target).find('[name=gamePlayerMin]').val(),
        gamePlayerMax: $(e.target).find('[name=gamePlayerMax]').val(),
        gameDate: gameDate,
        gameUser: Meteor.user().profile.nickname,
        submitted: new Date().getTime(), 
        updatedAt: new Date().getTime()
      }
      console.log(gameData); //DEBUG
      
      Meteor.call('newEntry', gameData, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error.reason);
        if(result)
          toastr.success('Eintrag für ' + gameTitle + ' erfolgreich angelegt');
          Router.go('dashboard');
      });
    } else {
      toastr.error('Ein Spiel muss zwingend angegeben werden!');
    } 
  },
  'keyup #gameInfotext': function(e, tpl) {
    $(".count").text("Zeichen übrig: " + (200 - $('#gameInfotext').val().length));
  }
});