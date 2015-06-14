Accounts.onCreateUser(function(options, user) {
  var isFirstLogin = true;
  var slug = user.username;
  var userData = [];
  var profile = []; 

  slug = slug.replace(/\./g, "").replace(/ /g, "_").replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/Ä/g,"Ae").replace(/Ö/g,"Oe").replace(/Ü/g,"Ue").replace(/ß/g,"ss");
  slug = slug.toLowerCase();

  userData = {
    birthdate: '',
    city: '',
    country: '',  
    twitter: '',
    facebook: '',
    skype: '',
    telegram: '',
    url: '',
    occupation: '',
    signature: '',
    info: ''
  }

  profile = _.extend(userData, options.profile);
  

  user.isFirstLogin = isFirstLogin;
  user.slug = slug;
  user.profile = profile;
  return user;
});