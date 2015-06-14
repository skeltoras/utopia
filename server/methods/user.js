Meteor.methods({
  checkFirstLogin: function() {
    if(this.userId){
      var user = Meteor.user();
      if(user.isFirstLogin == true) {
        return user.slug;
      } else {
        return false;
      }
    }
  },
  updateUserProfile: function(userData) {    
    var user = userData.nickname;
    var slug = user;
    slug = slug.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    slug = slug.toLowerCase();
    if(Meteor.users.find({slug: slug, _id: {$ne: this.userId}}).count()==0){
      var oldValue = Meteor.users.findOne({_id: this.userId});
      var userGames = Games.find({gameUser: oldValue.username});
      userGames.forEach(function(game){
        Games.update(game._id, {$set: {gameUser: user}});  
      }) 
      var userImages = Images.find({userSlug: oldValue.slug});
      userImages.forEach(function(image){
        Images.update(image._id, {$set: {userSlug: slug}});  
      })     
      return Meteor.users.update({_id: this.userId}, { $set: {username: user, profile: userData, isFirstLogin: false, slug: slug}});
    } else {
      throw new Meteor.Error(500, 'Anzeigename schon vorhanden, bitte einen anderen wählen');  
    }    
  }
})