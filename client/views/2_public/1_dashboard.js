//-- template onCreated functions
Template.dashboard.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAllGames');
    self.subscribe('getAllGenres'); 
    self.subscribe('getAllListedGames');        
  });
});

//-- template onDestroyed functions
Template.dashboard.onDestroyed(function () {
});

//-- template onRendered functions
Template.dashboard.onRendered(function () {
  /**
  EasySearch
    .getComponentInstance({ index: 'gamesHome' })
    //.search(Session.get('acpCustomersSearch'))
  ;
  */
});

//-- template helpers                            
Template.dashboardAll.helpers({
  getAllGames: function() {
    return Games.find().fetch();
  },
  getUserPath: function() {
    var user = this.gameUser;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    return user;
  },
  getPlayerPath: function() {
    var user = this.userName;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    return user;
  },
  checkIfJoined: function() {
    var playerArr = [];
    var check = false;
    var user = Meteor.userId();
    playerArr = this.gamePlayers;
    if(playerArr){
      playerArr.forEach(function(player){
        if(player.userId == user){
          check = true;
        }
      });
      return check;
    } 
  },
  checkFull: function() {
    if(this.gameCount >= this.gamePlayerMax) {
      return true;
    }
  }
});

//-- template events
Template.dashboard.events({ 
  'keyup #gameHomeSearch': function(e) {
    if(e.currentTarget.value){
      EasySearch.changeProperty('gamesHome', 'filteredTitels', '');
      EasySearch.changeProperty('gamesHome', 'filteredTypes', '');
      EasySearch
        .getComponentInstance({ index: 'gamesHome' })
        .search(e.currentTarget.value)
      ; 
    } else {
      EasySearch
        .getComponentInstance({ index: 'gamesHome' })
        .clear()
      ;
    }
  },
  'change #gameTitle': function(e) {
    var searchInput = $(e.target).find('[name=gameHomeSearch]').val(); 
    var filteredTitels = e.currentTarget.value;
    var filteredTypes = $(e.target).find('[name=gameType]').val();
    var searchArr = [];
    var searchString = '';
    
    searchArr[0] = filteredTitels;
    
    if(searchInput) {
      searchString = searchInput;
    } else {
      searchString = filteredTitels;
    }
        
    //check of selected  
    if(filteredTitels && !filteredTypes){      
      EasySearch.changeProperty('gamesHome', 'filteredTitels', searchArr);
      EasySearch.changeProperty('gamesHome', 'filteredTypes', '');
      $('#gameType').val(null);
      EasySearch
        .getComponentInstance({ index: 'gamesHome' })
        .search(searchString)
      ; 
    } else {
      if(searchInput) {
        EasySearch
          .getComponentInstance({ index: 'gamesHome' })
          .search(searchInput)
        ;
      } else {
        EasySearch
          .getComponentInstance({ index: 'gamesHome' })
          .clear()
        ;
      }     
    }
  },
  'change #gameType': function(e) {
    var searchInput = $(e.target).find('[name=gameHomeSearch]').val(); 
    var filteredTitels = $(e.target).find('[name=gameTitle]').val();
    var filteredTypes = e.currentTarget.value;
    var searchArr = [];
    var searchString = '';
    
    searchArr[0] = filteredTypes;
    
    if(searchInput) {
      searchString = searchInput;
    } else {
      searchString = filteredTypes;
    }
        
    //check of selected  
    if(filteredTypes && !filteredTitels){      
      EasySearch.changeProperty('gamesHome', 'filteredTypes', searchArr);
      EasySearch.changeProperty('gamesHome', 'filteredTitels', '');
      $('#gameTitle').val(null);
      EasySearch
        .getComponentInstance({ index: 'gamesHome' })
        .search(searchString)
      ; 
    } else {
      if(searchInput) {
        EasySearch
          .getComponentInstance({ index: 'gamesHome' })
          .search(searchInput)
        ;
      } else {
        EasySearch
          .getComponentInstance({ index: 'gamesHome' })
          .clear()
        ;
      }     
    }
  },
  'click .joinThis': function(e, tpl) {
    e.preventDefault();
    var gameId = e.currentTarget.id;
    Meteor.call('addUserToGame', gameId, function(error, result) {
      if(error)
        toastr.error('Fehler: ' + error.reason);
    });  
  },
  'click .leaveThis': function(e, tpl) {
    e.preventDefault();
    var gameId = e.currentTarget.id;
    Meteor.call('removeUserFromGame', gameId, function(error, result) {
      if(error)
        toastr.error('Fehler: ' + error.reason);
    });  
  },
  'click .joinDeactivated': function(e, tpl) {
    e.preventDefault();
    toastr.warning('Maximale Spielerzahl schon erreicht');
  }
  
  
  
});