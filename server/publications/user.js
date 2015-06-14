Meteor.publish('userSlug', function () {
  if(this.userId) {
    return Meteor.users.find({_id: this.userId}, {fields: {'slug': 1}});
  } else {
    this.ready();
  }
});

Meteor.publish('getProfileData',function(user){
  return Meteor.users.find({slug: user}, {fields: { 'profile' : 1, 'slug': 1}});
});

Meteor.publish('userProfile',function(slug){
  var user=Meteor.users.findOne({slug:slug});
  if(!user){
    this.ready();
    return;
  }
  if(this.userId==user._id){
    return Meteor.users.find(this.userId,{fields:{'profile':1, 'slug':1, 'isFirstLogin': 1}});
  }
  else{
    //return Meteor.users.find(user._id,{fields:{"profile":1, 'slug':1}});
    this.ready();
    return;
  }
});