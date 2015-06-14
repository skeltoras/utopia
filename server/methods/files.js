Meteor.methods({  
  deleteImagerecord: function(userId, imgId) {
    return Images.remove(imgId);
  }
})