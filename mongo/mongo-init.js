db.auth('root', 'example')

db = db.getSiblingDB('fluentd')

db.createUser({
  user: 'admin',
  pwd: 'password',
  roles: [
    {
      role: 'root',
      db: 'admin',
    },
  ],
});
