// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      host:'localhost',
      database: 'tengri_test',
      user:     'root',
      password: 'password'
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      host:'localhost',
      database: 'tengri_test',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host:'localhost',
      database: 'tengri_test',
      user:     'root',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
