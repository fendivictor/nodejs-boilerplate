exports.up = function (knex, Promise) {
  return knex.schema.createTable("User", function (table) {
    table.increments("id").primary();
    table.string("username").notNullable();
    table.string("password").notNullable();
    table.integer("status").defaultTo(1);
    table.timestamp("lastLogin", { useTz: true });
    table.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
    table.timestamp("updatedAt", { useTz: true });
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable("User");
};
