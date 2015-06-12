EasySearch.createSearchIndex('gamesHome', {
  'field' : ['gameTitle', 'gameType', 'gameUser'],
  'collection' : Games,
  'use' : 'mongo-db',
  'props' : {
    'filteredTitels' : [],
    'filteredTypes' : []
  },
  'query' : function (searchString) {
    // Default query that will be used for searching
    var query = EasySearch.getSearcher(this.use).defaultQuery(this, searchString);

    // filter for gameTitle if set
    if (this.props.filteredTitels.length > 0) {
      query.gameTitle = { $in : this.props.filteredTitels };
    }
    
    // filter for gameType if set
    if (this.props.filteredTypes.length > 0) {
      query.gameType = { $in : this.props.filteredTypes };
    }
    console.log(query) //DEBUG
    return query;
  }
});