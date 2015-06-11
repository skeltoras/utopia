Template.version.helpers({
  getVersion: function(){
    return version;
  }
});

Template.versionDetail.helpers({
  getVersion: function(){
    return versionDetail;
  },
  getMeteorVersion: function() {
    return versionMeteor;
  }
});