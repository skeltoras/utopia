if (Meteor.roles.find().count() === 0) {
  Roles.createRole('admin');
  Roles.createRole('team');
  Roles.createRole('user');
  Roles.createRole('guest');
};

if (Meteor.users.find().count() === 0) {
  headAdmin = Accounts.createUser({
    username: 'Skeltoras',
    email: 'dev@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Skeltoras"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(headAdmin, 'admin');
    
  trueffel = Accounts.createUser({
    username: 'Trueffel',
    email: 'trueffel@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Trueffel"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(trueffel, 'team');
        
  friedel = Accounts.createUser({
    username: 'Friedel',
    email: 'friedel@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Friedel"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(friedel, 'team');
    
  towoko = Accounts.createUser({
    username: 'Towoko',
    email: 'towoko@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Towoko"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(towoko, 'team');
    
  spike = Accounts.createUser({
    username: 'Spike',
    email: 'spike@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Spike"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(spike, 'team');
    
  jesienny = Accounts.createUser({
    username: 'Jesienny',
    email: 'jesienny@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Jesienny"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(jesienny, 'team');
    
  guest = Accounts.createUser({
    username: 'Gast',
    email: 'gast@skeltoras.de',
    password: 'test',
    profile: {
      nickname: "Gast"
    },
    isFirstLogin: true
  });
  Roles.addUsersToRoles(guest, 'guest');
}