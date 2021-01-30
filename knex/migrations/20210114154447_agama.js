exports.up = function (knex) {
  return knex.schema.createTable("Agama", function (table) {
    table.increments("id").primary();
    table.string("agama").notNullable();
    table.integer("status").defaultTo(1);
    table.timestamp("createdAt", { useTz: true }).defaultTo(knex.fn.now());
    table.string("createdUser");
    table.timestamp("updatedAt", { useTz: true });
    table.string("updatedUser");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Agama");
};
