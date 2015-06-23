Template.getGamesSelect.helpers({
  listGames: function(){
    var listItem = [];
    var listItems = GameList.find().fetch();
    listItem += ['<option value="">--- Spiel wählen ---</option>'];
    listItems.forEach(function(item){
      listItem += ['<option value="' + item._id + '">' + item.gameTitle + '</option>'];    
    })
    return listItem;
  }
});