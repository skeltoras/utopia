//-- template onCreated functions
Template.home.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAllGames');   
  });
});

//-- template onDestroyed functions
Template.home.onDestroyed(function () {
});

//-- template onRendered functions
Template.home.onRendered(function () {
  /**
  EasySearch
    .getComponentInstance({ index: 'gamesHome' })
    //.search(Session.get('acpCustomersSearch'))
  ;
  */
});

//-- template helpers                            
Template.homeAll.helpers({
  getAllGames: function() {
    return Games.find().fetch();
  },
  getUserPath: function() {
    var user = this.gameUser;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    return user;
  }
});

//-- template events
Template.home.events({ 
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
  'change #filterTitle': function(e) {
    var searchInput = $(e.target).find('[name=gameHomeSearch]').val(); 
    var filteredTitels = e.currentTarget.value;
    var filteredTypes = $(e.target).find('[name=filterType]').val();
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
      $('#filterType').val(null);
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
  'change #filterType': function(e) {
    var searchInput = $(e.target).find('[name=gameHomeSearch]').val(); 
    var filteredTitels = $(e.target).find('[name=filterTitle]').val();
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
      $('#filterTitle').val(null);
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
});