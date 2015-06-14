Meteor.publish('allImages', function(){ return Images.find(); });
Meteor.publish('getAvatar', function(){ return Images.find({'metadata.userId': this.userId, 'metadata.assignedObject': 'userAvatar'}); });
Meteor.publish('getPublicAvatar', function(user){ return Images.find({'metadata.userSlug': user, 'metadata.assignedObject': 'userAvatar'}); });