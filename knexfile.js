// Update with your config settings.

module.exports = {
  development: {
    client: "mysql",
    connection: "mysql://root:1234@localhost:3306/knexdb",
    migrations: {
      directory: __dirname + "/knex/migrations",
    },
    seeds: {
      directory: __dirname + "/knex/seeds",
    },
  },

  production: {
    client: "mysql",
    connection: "mysql://root:1234@localhost:3306/knexdb",
  },
};
