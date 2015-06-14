Template.getGenresSelect.helpers({
  listGenres: function(){
    var listItem = [];
    var listItems = Genres.find().fetch();
    listItem += ['<option value="">--- Genre wählen ---</option>'];
    listItems.forEach(function(item){
      listItem += ['<option value="' + item._id + '">' + item.genreTitle + '</option>'];    
    })
    return listItem;
  }
});