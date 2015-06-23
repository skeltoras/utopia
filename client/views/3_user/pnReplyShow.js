//-- template onCreated functions
Template.pnReplyShow.onCreated(function () {
  var self = this;
  self.autorun(function () {
    //self.subscribe('getSingleMessage', pnId);
  });
});

//-- template onDestroyed functions
Template.pnReplyShow.onDestroyed(function () {
});

//-- template onRendered functions
Template.pnReplyShow.onRendered(function () {
});

//-- template helpers                            
Template.pnReplyShow.helpers({
  getReplies: function() {
    return Replies.find({}, {sort: {updatedAt: 1}}).fetch();
  }
});

//-- template events
Template.pnReplyShow.events({   
  'click .getUserLink': function(e) {
    e.preventDefault();
    var user = e.currentTarget.id;
    user = user.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
    user = user.toLowerCase();
    Router.go('/profile/' + user);
  },
});