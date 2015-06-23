//-- template onCreated functions
Template.pnNew.onCreated(function () {
  var self = this;
  self.autorun(function () {
    self.subscribe('getAllMessages'); //DEBUG
    self.subscribe('getAllUsernames');
  });
});

//-- template onDestroyed functions
Template.pnNew.onDestroyed(function () {
});

//-- template onRendered functions
Template.pnNew.onRendered(function () {
  $(".select2").select2({
    maximumSelectionLength: 5
  });
  $('.summernote').summernote({
    height: 150,
    lang: 'de-DE'
  });
});

//-- template helpers                            
Template.pnNew.helpers({
  userList: function() {
    var itemList = [];
    var items = [];
    itemList = Meteor.users.find({},{sort: {username: 1}}).fetch();
    itemList.forEach(function(item){
      if(item._id == Meteor.userId()) {
        // do nothing
      } else {
        items += ['<option value="' + item._id + '">' + item.username + '</option>'];  
      } 
    });
    return items;
  }
});

//-- template events
Template.pnNew.events({
  'submit form': function(e, tpl) {
    e.preventDefault();
    
    var receiverData = [];
    $('#messageReceiver :selected').each(function(i, selected){
      receiverData[i] = {
        userId: $(selected).val(),
        userName: $(selected).text(),
        isNew: true
      };
    });
    
    var message = [];
    message = {
      messageReceiver: receiverData,      
      messageTitle: $(e.target).find('[name=messageTitle]').val(),
      messageText: $(e.target).find('[name=messageText]').val(),
      messageUser: Meteor.user().profile.nickname,
      submitted: new Date().getTime(), 
      updatedAt: new Date().getTime()
    };
    Meteor.call('newMessage', message, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error.reason);
        if(result) {
          toastr.success('Nachricht versendet');
          Router.go('/user/messages/list');        
        }
    });
  }
});