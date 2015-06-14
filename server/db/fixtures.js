if (Meteor.users.find().count() === 0) {
  headAdmin = Accounts.createUser({
    username: 'Skeltoras',
    email: 'dev@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Vorname",
      last_name: "Nachname",
      nickname: "Skeltoras"
    },
    isFirstLogin: true
  });
  
  trueffel = Accounts.createUser({
    username: 'Trueffel',
    email: 'trueffel@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Vorname",
      last_name: "Nachname",
      nickname: "Trueffel"
    },
  });
  towoko = Accounts.createUser({
    username: 'Towoko',
    email: 'towoko@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Vorname",
      last_name: "Nachname",
      nickname: "Towoko"
    },
  });
  spike = Accounts.createUser({
    username: 'Spike',
    email: 'spike@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Vorname",
      last_name: "Nachname",
      nickname: "Spike"
    },
  });
  guest = Accounts.createUser({
    username: 'Gast',
    email: 'gast@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Gast",
      last_name: "Account",
      nickname: "Gast"
    },
  });

}