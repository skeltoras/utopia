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
  });
  secondAdmin = Accounts.createUser({
    username: 'Trueffel',
    email: 'trueffel@skeltoras.de',
    password: 'test',
    profile: {
      first_name: "Vorname",
      last_name: "Nachname",
      nickname: "Trueffel"
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