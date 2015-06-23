//-- template onCreated functions
Template.pnReplyForm.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('getAllMessages'); //DEBUG
  });
});

//-- template onDestroyed functions
Template.pnReplyForm.onDestroyed(function () {
});

//-- template onRendered functions
Template.pnReplyForm.onRendered(function () {
  $('.summernote').summernote({
    height: 150,
    lang: 'de-DE',
    toolbar: [
      //[groupname, [button list]]
       
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontsize']],
      ['para', ['ul', 'ol', 'paragraph']]
    ]
  });
});

//-- template helpers                            
Template.pnReplyForm.helpers({
  debug: function() {
    console.log(this);
  }
});

//-- template events
Template.pnReplyForm.events({
  'reset form': function(e) {
    e.preventDefault();
    Session.set('reply', false);
  },
  'submit form': function(e, tpl) {
    e.preventDefault();
    var messageId = this._id;
    var reply = [];
    reply = {
      replyText: $(e.target).find('[name=replyText]').val(),
      submitted: new Date().getTime(), 
      updatedAt: new Date().getTime()
    };
    Meteor.call('newReply', messageId, reply, function(error, result){
        if(error)
          toastr.error('Fehler: ' + error.reason);
        if(result)
          Session.set('reply', false);
    });
  }
});