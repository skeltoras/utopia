//-- template onCreated functions
Template.profileUCP.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAvatar');   
  });
});

//-- template onDestroyed functions
Template.profileUCP.onDestroyed(function () {
});

//-- template onRendered functions
Template.profileUCP.onRendered(function () {
  $(".count").text("Zeichen übrig: 140");
  $('.summernote').summernote({
    height: 150,
    lang: 'de-DE', // default: 'en-US'
    toolbar: [
      //[groupname, [button list]]
       
      ['style', ['bold', 'italic', 'underline', 'clear']],
      //['font', ['strikethrough', 'superscript', 'subscript']],
      ['misc', ['paragraph']],
      //['color', ['color']],
      //['para', ['ul', 'ol', 'paragraph']],
      //['height', ['height']],
    ]
  });
});

//-- template helpers                            
Template.profileUCP.helpers({
  getUserData: function() {
    var data = Meteor.users.findOne();
    Session.set('userId', data._id);
    return data;
  },
  getAvatar: function(){
    return Images.findOne({'metadata.userId': Meteor.userId(), 'metadata.assignedObject': 'userAvatar'});
  },    
});

//-- template events
Template.profileUCP.events({ 
  'submit form': function(e,tpl) {
    e.preventDefault();
    
    var nickname = $(e.target).find('[name=nickname]').val();
    if(nickname) {
      var userData = [];
      userData = {
        nickname: nickname,
        city: $(e.target).find('[name=city]').val(),
        country: $(e.target).find('[name=country]').val(),
        occupation: $(e.target).find('[name=occupation]').val(),
        url: $(e.target).find('[name=url]').val(),
        facebook: $(e.target).find('[name=facebook]').val(),
        twitter: $(e.target).find('[name=twitter]').val(),
        skype: $(e.target).find('[name=skype]').val(),
        info: $(e.target).find('[name=info]').val(),
        signature: $(e.target).find('[name=signature]').val()
      }
      
      Meteor.call('updateUserProfile', userData, function(error, result){
        if(error) {
          toastr.error('Fehler: ' + error.reason);
        }          
        if(result) {
          toastr.success('Profil erfolgreich geädert');
          var slug = nickname;
          slug = slug.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
          slug = slug.toLowerCase();

          Router.go('/profil/' + slug);
        }          
      });
    } else {
      toastr.error('Ein Anzeigename muss zwingend angegeben werden!');
    } 
  },
  'keyup #signature': function(e, tpl) {
    $(".count").text("Zeichen übrig: " + (200 - $('#gameInfotext').val().length));
  },
  'change input[type=file]': function(e, tpl){
    e.preventDefault();
    var userId = Session.get('userId');
    var userData = Meteor.users.findOne({_id: userId});
    console.log(userData);
    var slug = userData.slug; 
    var assignedObject = e.currentTarget.id;
    var target = e.currentTarget.classList[1];
       
    FS.Utility.eachFile(event, function(file) {
      var newFile = new FS.File(file);
      newFile.metadata = {userId: userId, userSlug: slug, assignedObject: assignedObject, target: target};
      Images.insert(newFile, function (err, fileObj) {
      });
    });
  },
  'click a.delImage': function(e){
    e.preventDefault();
    var userId = Session.get('userId');    
    var imgId = this._id;
    console.log('DELETEIMG|userId: ' + userId);
    console.log('DELETEIMG|imgId: ' + imgId);
    Meteor.call('deleteImagerecord', userId, imgId, function(error, result){
      if(error)
        toastr.error(error.reason);
    }); 
  }
});